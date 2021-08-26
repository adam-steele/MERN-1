//import  mongoose  from "mongoose";

//Checked this code seems not to be the issue same error when copied from web

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const secret = "test";

export const signin = async(req,res)=>{
    const {email, password} = req.body;
    console.log(email, password);
    
    try {
        const exisitingUser = await User.findOne({email});

        if(!exisitingUser){
            res.status(404).json({message:"user doesn't exist"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password)
        if(!isPasswordCorrect){
            res.status(400).json({message:"Invalid Password"});
        }

        const token = jwt.sign({email: exisitingUser.email, id: exisitingUser._id}, "test", {expiresIn:"1h"});
       
        res.status(200).json({result: exisitingUser, token});
   } catch (error) {
       console.log(error)
       res.status(500).json({message:"OMG SOMETHING WENT WRONG!"});
   }

};

export const signup = async(req,res)=>{
    
    const {email, password, firstName, lastName, confirmPassword} = req.body;
    
    
    try {
        const exisitingUser = await User.findOne({email});

        if(exisitingUser){
            res.status(400).json({message:"user already exists"});
        }

        if(password !== confirmPassword){
            res.status(400).json({message:"Passwords don't match"});
        }

        const hashedpassword = await bcrypt.hash(password,12);

        const result = await User.create({email, password: hashedpassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn:"1h"});

        res.status(200).json({result, token});
        
   } catch (error) {
       res.status(500).json({message:"something is fucked"});
   }

};

