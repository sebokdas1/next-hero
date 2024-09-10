const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () => {
  if (db) return db;
  try {
    const url = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("next-hero");
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
