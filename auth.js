import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./app/lib/utils"
import { Users } from "./app/lib/models";
import { authConfig } from "./app/auth.config";
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const login = async (credentials) => {
  try{
    connectToDB();
    const user = await Users.findOne({username:credentials.username});

    if(!user || !user.isAdmin) throw new Error("Wrong Credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if(!isPasswordCorrect) throw new Error ("Wrong Credentials");

    return user;
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to login!")
  }
}

export const {signIn, signOut, auth} = NextAuth({
  ...authConfig,
  providers:[
    CredentialsProvider({
      async authorize(credentials){
        try{
          const user = await login(credentials);
          return user;
        } 
        catch(err){
          return null
        }
      }
    })
  ]
})