import mongoose, { InferSchemaType, model, models, Schema } from "mongoose";

const profileInfoSchema = new Schema(
  {
    username: { type: String, unique: true },
    displayName: { type: String },
    bio: { type: String },
    avatarUrl: { type: String },
    coverUrl: { type: String },
  },
  { timestamps: true },
);

type ProfileInfo = InferSchemaType<typeof profileInfoSchema>;

const ProfileInfoModel =
  models.ProfileInfo || model("ProfileInfo", profileInfoSchema);

export default ProfileInfoModel;
