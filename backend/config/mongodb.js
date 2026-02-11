import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Successfully connnected to mongoDB👍😘"),
  );

  await mongoose.connect(process.env.MONGO_URL);
};

export default connectDB;
