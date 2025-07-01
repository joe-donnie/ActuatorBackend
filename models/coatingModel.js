import mongoose from "mongoose";

const coatingSchema = new mongoose.Schema({
  coating: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default mongoose.model("coating", coatingSchema);
