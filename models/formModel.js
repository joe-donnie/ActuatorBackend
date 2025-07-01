import mongoose from "mongoose";

const stdoptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
});

export default mongoose.model("stdopt", stdoptSchema);  