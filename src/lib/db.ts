import { connect } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    await connect(process.env.MONGO_URI!);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
