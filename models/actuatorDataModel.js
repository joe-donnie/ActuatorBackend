import mongoose from "mongoose";

const actuatorDataschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        
    },
    type:{
        type: String,
        required: true,
        trim: true,
      
    },
    size:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    price:{
        type: Number,
        required: true,
        trim: true,
    },
})

export default mongoose.model("ActuatorData", actuatorDataschema);