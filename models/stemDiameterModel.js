import mongoose from "mongoose";

const stemDiameterSchema = new mongoose.Schema(
  {
    stemDiameter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("stemDiameter", stemDiameterSchema);