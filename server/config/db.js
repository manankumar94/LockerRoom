import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI= process.env.MONGODB_URI;

const connectDB= async()=>{
    try {
        const connection= await mongoose.connect(URI);
        console.log("Connected Successfull with Database..");
    } catch (error) {
        console.error("DataBase connection Failed : ", error);
    }
}

export default connectDB;