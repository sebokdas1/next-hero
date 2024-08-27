export const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_}/posts`);
  const data = await res.json();
  return data;
};
