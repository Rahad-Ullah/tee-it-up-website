import AllFeatureClub from "@/components/home/AllFeatureClub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Feature Club",
  description: "All Feature Club",
};

const page = () => {
  return (
    <div>
      <AllFeatureClub />
    </div>
  );
};

export default page;
