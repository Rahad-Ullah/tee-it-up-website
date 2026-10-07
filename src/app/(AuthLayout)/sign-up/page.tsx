import SignUp from "./SignUp"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up",
};

const page = () => {
  return <SignUp />
}

export default page