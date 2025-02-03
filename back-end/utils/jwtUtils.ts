import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET || 'secret';

export const generateToken= (userId:number): string =>{
    return jwt.sign({userId},JWT_SECRET,{expiresIn:'1h'})
};