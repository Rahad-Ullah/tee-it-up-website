import ExploreClubs from "./ExploreClubs"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Clubs",
  description: "Explore Clubs",
};

const page = () => {
  return (
    <div>
      <ExploreClubs />
    </div>
  )
}

export default page