import AboutBottom from "./AboutBottom"
import AboutTop from "./AboutTop"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

const page = () => {
  return (
    <div>
      <AboutTop />
      <AboutBottom />
    </div>
  )
}

export default page