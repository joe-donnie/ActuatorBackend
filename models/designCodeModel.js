import mongoose from "mongoose";

const designCodeSchema = new mongoose.Schema({
  designCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default mongoose.model("designcode", designCodeSchema);
