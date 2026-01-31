import express from 'express';
import { protect } from '../Middleware/product.js';
import { isAdmin } from '../Middleware/admin.js';
import { authLogin, authSignUp } from '../Controller/authUserController.js';

const authUserRoute=express.Router();
authUserRoute.post('/signup',authSignUp);
authUserRoute.post('/login',authLogin);
authUserRoute.get("/profile", protect,(req,res)=>{
    res.json({message:"protected profile",user:req.role});
});
authUserRoute.get("/admin",protect,isAdmin,(req,res)=>{
    res.json({message:"admin access only",user:req.role});
});
export default authUserRoute;