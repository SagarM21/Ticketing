import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT key must be defined");
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to mongo db");
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("Listening on PORT 3000!");
  });
};

start();
