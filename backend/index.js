import express from 'express'
import userRouter from './user/userRoutes/user.routes.js'
import cors from 'cors'
import mongoose from 'mongoose';
import 'dotenv/config'
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";













await mongoose.connect(process.env.MONGODB_URI)

const PORT = 3000
const app = express()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true  // Optional: Erlaubt das Senden von Cookies
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json())
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})