import UserModel from "../Model/userModul.js";
//user creation
export const createUserController=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const response=await UserModel.createUserModel({name,email,password});
        res.status(201).json({message:"User created successfully",userId:response});
    }catch(err){
        res.status(500).json({message:"Error creating user"});
    }      
}
//get all the user innformation
export const getAllUsersController=async(req,res)=>{
    try{
    const data = await UserModel.getAllUsersModel();
    res.json(data);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}
export const updateUsersPasswordController=async(req,res)=>{
    try{
        const {password}=req.body;
        const updatePassword = await UserModel.updateUsersPasswordModel(req.params.id,{password});
        if(!updatePassword){
            res.status(404).json({message:"User not found"});
        }
        else{
            res.status(200).json({message:"Password updated successfully"});
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}
export const deleteUserController=async(req,res)=>{
    try{
        const deleteUser=await UserModel.deleteUserModel(req.params.id);
    if(!deleteUser){
        res.status(404).json({message:"User not found"});
    }
    else{
        res.status(200).json({message:"User deleted successfully"});
    }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}