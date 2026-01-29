import UserModel from "../Model/userModul.js";
export const createUserController=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const response=await UserModel.createUserModel({name,email,password});
        res.status(201).json({message:"User created successfully",userId:response});
    }catch(err){
        res.status(500).json({message:"Error creating user"});
    }      
}