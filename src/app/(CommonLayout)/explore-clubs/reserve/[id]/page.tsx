import Reserve from "./Reserve";
import Submit from "./Submit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve",
  description: "Reserve",
};

const page = async ({ searchParams }: { searchParams: any }) => {
  const { isSubmit } = await searchParams;

  return (
    <div>
      {isSubmit == "true" ? <Submit /> : <Reserve />}
    </div>
  );
};

export default page;