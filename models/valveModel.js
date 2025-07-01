import mongoose from "mongoose";

const valveTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
});

export default mongoose.model("ValveType", valveTypeSchema);    