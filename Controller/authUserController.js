import { hashPassword,comparePassword} from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthUserModel from "../Model/authUserModel.js";
//name,email,password,role
export const authSignUp = async (req,res)=>{
    try{
    const{name,email,password,role}=req.body;
    const chechEmail=await AuthUserModel.userLoginModel({email});
    if(chechEmail){
        return res.status(400).json({message:"Email already exists"});
    }
    const newPassword = await hashPassword(password);
    const id=await AuthUserModel.userSignupModel({
        name:name,
        email:email,
        password:newPassword,
        role:role||"user"
    });
        res.status(201).json({message:"User registered successfully",userId:id}); 
    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}
export const authLogin = async (req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await AuthUserModel.userLoginModel({email});
        if(!user){
            return res.status(400).json({message:"Invalid email"});
        }
        const userPassword=await comparePassword(password,user.password);
        if(!userPassword){
            return res.status(400).json({message:"Invalid password"});
        }
        const token=createToken({id:user.id,role:user.role});
        res.status(200).json({message:"Login successful",token});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}