// Build Connection between MongoDB and Node.js/Next.js

import mongoose from "mongoose";

export const connectToDB = async() => {
  const connection = {};
  try{
    if(connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connection[0].readyState; 
  }
  catch(error){
    throw new Error(error);
  }
}