import ForgotPassword from "./ForgotPassword"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password",
};

const page = () => {
  return <ForgotPassword />
}

export default page