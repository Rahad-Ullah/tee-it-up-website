import Bookings from "./Bookings"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings",
  description: "Bookings",
};

const page = () => {
  return (
    <div>
      <Bookings />
    </div>
  )
}

export default page