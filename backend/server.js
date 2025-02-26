import express from 'express'
import dotenv from "dotenv"
import connectdB from './database/db.js'
dotenv.config()
connectdB()

const app=express()
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})