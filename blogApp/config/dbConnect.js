import mongoose from "mongoose";
import { config } from "dotenv";
config();
export const dbConnect = async() =>{
    try {
        const ConnectionInstance = await mongoose.connect(process.env.DATABASE_URL);
        console.log("DataBase Connected",ConnectionInstance.connection.host); 
        
    } catch (error) {
        
    }
}