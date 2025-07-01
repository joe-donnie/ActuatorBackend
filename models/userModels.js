import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true,
        trim: true,
     },
     password: {
        type: String,
        required: true,
     },
     email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
     }
});

userSchema.pre("save", async function (next) {
   if(!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10);
   next();
})

userSchema.methods.comparePassword = async function (enterdpassword) {
   return await bcrypt.compare(enterdpassword, this.password);
};

export default mongoose.model("User", userSchema);