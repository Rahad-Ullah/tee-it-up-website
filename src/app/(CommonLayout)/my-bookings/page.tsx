import MyBookings from "./MyBookings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Bookings",
  description: "My Bookings",
};

const page = () => {
  return (
    <div>
      <MyBookings />
    </div>
  );
};

export default page;