import mongoose from "mongoose";

const valvePressureSchema = new mongoose.Schema({
   value: {
     type: Number,
     required: true,
   }
});

export default mongoose.model("valvePressure", valvePressureSchema);  