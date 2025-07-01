import mongoose from "mongoose";

const safetyFactorSchema = new mongoose.Schema({
  safetyFactor: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("SafetyFactor", safetyFactorSchema);