import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

//for meta data
export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();
  return {
    title: postData?.title,
    description: postData?.body,
  };
};

const page = async ({ params }) => {
  const { title, body } = await getDetailsPost(params?.id);
  return (
    <div className="px-3 mt-2">
      <div className="border-2 border-blue-500 p-2">
        <h1>Title: {title}</h1>
        <h2>Description: {body}</h2>
      </div>
    </div>
  );
};

export default page;
