import { User } from "../models/user.models.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js"
export const register=async (req,res)=>{
    console.log("Api hit")
    
        try{
            const {name,email,password}=req.body
            if(!email || !name || !password){
                return res.status(400).json({
                    success:false,
                    message:"All field are required"
                })
            }
            const user=await User.findOne({email})
            if(user)
            {
                return res.status(400).json({
                    success:false,
                    message:"User already Exists"
                })
            }
            const hashPassword=await bcrypt.hash(password,10)
            await User.create({
                name,
                email,
                password:hashPassword,
            })
            return res.status(200).json({
                success:true,
                message:"new user created successfully"
            })


        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"Error Occured failed to register",
                error:error.message
            })

        }
     
    

    }
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user=await User.findOne({email})
       if(!user)
       {
        return res.status(400).json({
            success:false,
            message:"User not found"

        })
       }
       const ispassword=await bcrypt.compare(password,user.password)
       if(!ispassword)
       {
        return res.status(400).json({
            success:false,
            message:"Incorrect Email or Password"
        })
       }
       generateToken(res,user,`Welcome Back ${user.name}`)

    }
    catch{
        return res.status(500).json({
            success:false,
            message:"Failed to Login",
            error:error.message
        })

    }
}