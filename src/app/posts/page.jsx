import { getPosts } from "@/postApi/postApi";
import Link from "next/link";
import React from "react";

const page = async () => {
  const postsData = await getPosts();
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 px-2 pt-2 bg-gray-300">
        {postsData?.map((post) => (
          <div
            key={post.id}
            className="border-2 border-black px-2 bg-gray-200 py-2"
          >
            <h3>Title: {post.title}</h3>
            <h5>Description: {post.body}</h5>
            <Link
              href={`/posts/${post.id}`}
              className="text-green-700 hover:underline"
            >
              Details..
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
