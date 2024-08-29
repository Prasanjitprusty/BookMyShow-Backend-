import mongoose from "mongoose"; /* mongoose helps to interact with MongoDB database */

const connectToMongo = async () => {
  /* asynchronous function to create database URL String */
  try {
    await mongoose.connect("mongodb://localhost:27017/Book-Show");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
