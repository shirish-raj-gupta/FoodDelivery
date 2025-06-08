import express from "express"
import cors from "cors"
import "dotenv/config"
import {connectDB} from './config/db.js'
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"

const app = express()
const port = 4000

//midlleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user', userRouter)

app.get("/", (req,res)=>{
  res.send("Hello")
})



app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`);
  
})

//mongodb+srv://foodDelivery:food_Delivery01@cluster0.89zyueu.mongodb.net/?
