import mongoose from "mongoose";

const tempTrimSchema = new mongoose.Schema({
  tempTrim: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default mongoose.model("temptrim", tempTrimSchema);
