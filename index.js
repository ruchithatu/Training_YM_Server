import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import userRoute from "./Route/userRoutes.js";

dotenv.config();
const app=express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
//connectivitynpm start
connectDB();
app.use("/api/users", userRoute); 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})