import express from "express";
import { deleteUser, getAllusers, login, signup, updateUser,getBookingsOfUser, getUserById } from "../controllers/user-controller.js";


const userRouter = express.Router();

userRouter.get("/",getAllusers); 
userRouter.get("/:id", getUserById);
userRouter.post("/signup",  signup); 
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);


export default userRouter;