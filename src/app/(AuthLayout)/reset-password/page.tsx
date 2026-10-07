import { Metadata } from "next";
import ResetPassword from "./ResetPassword"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset Password",
};

const page = () => {
  return <ResetPassword />
}

export default page