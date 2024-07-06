import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ankitjeena08:AnkitJeena0803@cluster0.9jrozes.mongodb.net/DeliverEase"
    )
    .then(() => console.log("Database Connected"));
};
