import mongoose from "mongoose";

const connectDb = async () => {
  try {
    let mongodbURI = process.env.MONGO_URI;
    const projectName = 'SnapResume';

    if (!mongodbURI) {
      throw new Error("MONGO_URI env not set");
    }

    if (mongodbURI.endsWith('/')) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    // ✅ First listen to events
    mongoose.connection.on("connected", () => {
      console.log("Database Connected Successfully");
    });

    // ✅ Then connect
    await mongoose.connect(`${mongodbURI}/${projectName}`);

  } catch (error) {
    console.error("Error Connecting to MongoDB:", error.message);
  }
};

export default connectDb;