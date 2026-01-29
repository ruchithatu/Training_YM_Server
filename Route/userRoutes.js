import { createUserController,getAllUsersController,updateUsersPasswordController,deleteUserController } from "../Controller/userController.js";
import express from "express";

const userRoute = express.Router(); // post get put delete

userRoute.post("/signup", createUserController); // http://localhost:5000/api/users/
userRoute.get("/getusers", getAllUsersController); // http://localhost:5000/api/users/
userRoute.put("/updatepassword/:id", updateUsersPasswordController); // http://localhost:5000/api/users/
userRoute.delete("/deleteuser/:id", deleteUserController); // http://localhost:5000/api/users/
export default userRoute;