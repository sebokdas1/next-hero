import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollecton = db.collection("users");
    const newUser = await request.json();
    const res = await userCollecton.insertOne(newUser);
    return Response.json({ message: "new user created" });
  } catch (error) {
    return Response.json({ message: "something went wrong", error });
  }
};
