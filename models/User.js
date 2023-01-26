import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country: {
        type: String,
    },
    img: {
        type: String,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:20,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{timestamps:true});


export default mongoose.model("User",UserSchema);