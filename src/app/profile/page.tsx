import ProfileInfoForm from "@/components/ProfileInfoForm";
import { Button } from "@/components/ui/button";
import React from "react";

const ProfilePage = async () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <ProfileInfoForm />
      <div>donation list</div>
    </div>
  );
};

export default ProfilePage;
