import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const protect = async (req, res, next) => {   // function na redirect panna next
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){ //start with  Bearer
        return res.status(401).json({message: 'Unauthorized'});
    }
    const token = authHeader.split(' ')[1]; // split Bearer and token//bearer token-->header.payload.signature
    try{
        const decoded = jwt.verify(token,process.env.JWT_TOKEN);
        req.user = decoded; // id and role
        next();
    }catch(err){
        return res.status(401).json({message: 'Invalid token'});
    }   
}