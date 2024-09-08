import { getServerSession } from "next-auth";
import React from "react";
import { outhOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Services",
  keywords: ["web development", "software", "app", "application"],
  description: "About page for super next hero website",
};

const page = async () => {
  const session = await getServerSession(outhOptions);
  console.log(session);
  return (
    <div>
      <h1>This is seRvices page</h1>
    </div>
  );
};

export default page;
