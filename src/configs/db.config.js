import mongoose from "mongoose";

export const connectDb = async() => {
  const uri = `${process.env.MONGODB_URI}/registration`;
  try {
    await mongoose.connect(uri);
    console.log("Mongodb Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}