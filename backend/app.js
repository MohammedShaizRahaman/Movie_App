import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import  bookingsRouter from "./routes/booking-routes.js";
import cors from 'cors';
dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));

//midddlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose.connect(`mongodb+srv://mohammedshaizr:${process.env.MONGODB_PASSWORD}@cluster0.qmci7m7.mongodb.net/movie-booking-system?retryWrites=true&w=majority`)
.then(() => 
    app.listen(5000, ()=>
    console.log("Connected to database and server is running")
)
)
.catch((e) => console.log(e));
// mongodb+srv://mohammedshaizr:<password>@cluster0.qmci7m7.mongodb.net/?retryWrites=true&w=majority


