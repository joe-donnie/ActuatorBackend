import mongoose from "mongoose";

const actuatorTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    }
})

export default mongoose.model("actuatorType", actuatorTypeSchema);