import { Button } from "@/components/ui/button";
import React from "react";

const ProfilePage = async () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg bg-gray-200 p-4">
        <div className="size-24 rounded-full bg-gray-300 p-4">avatar</div>
        <div>cover image</div>
      </div>

      <div>cover image</div>
      <div>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="displayName">display name</label>
        <input
          type="text"
          placeholder="display name"
          name="displayName"
          id="displayName"
        />
      </div>
      <div>
        <label htmlFor="displayName">bio</label>
        <textarea name="bio" id="bio" placeholder="bio"></textarea>
      </div>
      <div>
        <Button className="mt-4 rounded-lg px-4 py-2">Save profile</Button>
      </div>
      <div>donation list</div>
    </div>
  );
};

export default ProfilePage;
