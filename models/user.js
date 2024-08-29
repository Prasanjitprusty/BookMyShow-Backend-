import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }, 
  seats: {
    type: Object,
    required: true,
  }, 
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
