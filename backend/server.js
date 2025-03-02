import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import connectdB from './database/db.js'
import userRoute from "./routes/userRoutes.js"
import cors from "cors"
dotenv.config()
connectdB()

const app=express()
const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/user/',userRoute)
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello from Kashish"
    })
})
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})