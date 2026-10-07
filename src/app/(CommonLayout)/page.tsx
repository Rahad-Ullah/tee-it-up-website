import Home from "./Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tee It Up",
  description: "Tee It Up",
};


export default function page() {
  return (
    <div>
      <Home />
    </div>
  );
}
