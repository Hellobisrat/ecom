import express from "express";
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

//Utiles
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

const port = process.env.PORT || 5000

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/users',userRoutes)

  app.get('/',(req,res)=>{
    res.json('hello home')
  })

app.listen(port,()=>{
  console.log(`server running on port:${port}`)
})