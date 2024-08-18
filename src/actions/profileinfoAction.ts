"use server";
import { connectToDB } from "@/lib/db";
import ProfileInfoModel from "@/models/profileInfo";

export async function saveProfile(formData: FormData) {
  try {
    await connectToDB();
    const username = formData.get("username") as string;
    const displayName = formData.get("displayName") as string;
    const bio = formData.get("bio") as string;
    const existingUsername = await ProfileInfoModel.findOne({
      username: username,
    });

    if (existingUsername) {
      await existingUsername.set({ username, displayName, bio });
    } else {
      const newProfile = await ProfileInfoModel.create({
        username,
        displayName,
        bio,
      });
      console.log("New Profile Created ", newProfile);
    }
  } catch (error) {
    console.error(error);
  }
}
