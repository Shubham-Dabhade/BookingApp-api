import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

//mongoDB connection
mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected");
});


//api routes middleware
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(express.json());




app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);


//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went Wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack, //gives more detail about error
    });
});



app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log("Connected to port 5000");
});