"use server"

import { redirect } from "next/navigation"
import {Products, Users} from "./models"
import { connectToDB } from "./utils"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { connect } from "mongoose"
import { signIn } from "@/auth"

//  Form Action for Add User

export const addUser = async(formData) => {
  const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
  try{
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Users({
      username,
      email,
      password:hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })
    await newUser.save();
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to create User!")
  }
  redirect("/dashboard/users")
}

// Form Action for Add Product

export const addProduct = async (formData) => {
  const {title, desc, price, stock,color,size} = Object.fromEntries(formData);
  try{
    connectToDB();

    const newProduct = new Products({
      title,
      desc,
      price,
      stock,
      color,
      size,
    })
    await newProduct.save();
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to create Product!")
  }
  redirect("/dashboard/products")
}

// Form Action for Delete User

export const deleteUser = async(formData) =>{
  const {id} = Object.fromEntries(formData);

  try{
    connectToDB();
    await Users.findByIdAndDelete(id);
  }
  catch(err){
    console.log("Failed to Delete");
  }
  revalidatePath("/dashboard/users")

}

// Form Action for Delete Product

export const deleteProduct = async(formData) => {
  const {id} = Object.fromEntries(formData);

  try{
    connectToDB();
    await Products.findByIdAndDelete(id);
  }
  catch(err){
    console.log("Failed to Delete");
  }
  revalidatePath("/dashboard/products")
}

// Form Action for Update User

export const updateUser = async (formData) => {
  const {id, username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);

  try{
    connectToDB();

    const updateFields = {
      id,
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);

    await Users.findByIdAndUpdate(id,updateFields)
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to update User!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

// Form Action for Update Product

// export const updateProduct = async (formData) => {
//   const {} = Object.fromEntries(formData);

//   try{
//     connectToDB();
//   }
//   catch(err){
//     console.log(err);
//     throw new Error("Failed to update User");
//   }
// }

// Form Action for signIn

export const authenticate = async(formData) => {
  const {username, password} = Object.fromEntries(formData);

  try{
    await signIn("credentials",{username,password});
  }
  catch(err){
    if(err.message.includes("CredentialsSignin")){
      return "Wrong Credentials"
    }
    throw err;
  }

}
