import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const page = async () => {
  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 px-2 pt-2">
        {postsData?.map((post) => (
          <div key={post.id} className="border-2 border-black px-2">
            <h3>Title: {post.title}</h3>
            <h5>Description: {post.body}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
