import Profile from "../profile/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit Profile",
};

export default function EditProfilePage() {
  return (
    <div>
      <Profile />
    </div>
  );
}
