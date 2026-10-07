import { Metadata } from "next";
import SignIn from "./SignIn"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
};

const page = () => {
  return <SignIn />
}

export default page