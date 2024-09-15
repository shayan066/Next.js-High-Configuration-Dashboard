// MongoDB me data send krne se phle client side se data read hota h or fetch hota h tb database/mongoDB me jata h. 

import { Products, Users } from "./models";
import { connectToDB } from "./utils";

// To fetch data from Users Schema/models

export const fetchUsers = async() => {
  try{
    connectToDB();
    const users = await Users.find();
    return users;
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
}

// To fetch data from User (Update Data for Single User)

export const fetchUser = async(id) => {
  try{
    connectToDB();
    const user = await Users.findById(id);
    return user;
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}

// To fetch data from Products Schema/models

export const fetchProducts = async() => {
  try{
    connectToDB();
    const products = await Products.find();
    return products;
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
}