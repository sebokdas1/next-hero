import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is aBout page</h1>
      <div className="flex justify-evenly text-gray-800">
        <Link href={"/about/blogs"}>Blogs</Link>
        <Link href={"/about/mission"}>Mission</Link>
        <Link href={"/about/vision"}>Vission</Link>
      </div>
    </div>
  );
};

export default page;
