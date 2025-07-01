import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default mongoose.model("material", materialSchema);
