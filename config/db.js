import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../config/.env",
});

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("Please set the MONGODB_URI environment variable");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Conection error:", error);
    process.exit(1);
  }
};

export default connectDB;
