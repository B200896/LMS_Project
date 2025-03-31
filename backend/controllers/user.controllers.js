import { User } from "../models/user.models.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js"
export const register = async (req, res) => {
    console.log("Api hit")

    try {
        const { name, email, password } = req.body
        if (!email || !name || !password) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already Exists"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const userData = await User.create({
            name,
            email,
            password: hashPassword,
        })
    

        if (userData) {
            return generateToken(res, userData, "new user created successfully")
        }


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error Occured failed to register",
            error: error.message
        })

    }



}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"

            })
        }
        const ispassword = await bcrypt.compare(password, user.password)
        if (!ispassword) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Email or Password"
            })
        }
        return generateToken(res, user, `Welcome Back ${user.name}`)

    }
    catch {
        return res.status(500).json({
            success: false,
            message: "Failed to Login",
            error: error.message
        })

    }
}
export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged Out Successfully",
            success: true
        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Failed to logout"
        })

    }
}
export const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId).select("-password")
        if (!user) {
            return res.status(404).json({
                message: "Profile not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Profile Found Successfully",
            success: true
        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to load user"

        })

    }
}