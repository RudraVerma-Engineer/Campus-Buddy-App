import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        minlength: 3,
        required: true
    },
    lastname: {
        type: String,
        minlength: 3
    },
    username:{
        type:String,
        minlength:5,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, 
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone:{
        type:Number,
        minlength:10,
        required:true, 
    },
    password:{
        type:String,
        minlength:8,
        required:true
    }
})

const User = mongoose.model("User",userSchema);
export default User;