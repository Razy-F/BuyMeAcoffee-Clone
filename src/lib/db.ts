import { connect } from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
  if (!isConnected) return console.log("Using existing connection");

  try {
    await connect(process.env.MONGO_URI!);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
