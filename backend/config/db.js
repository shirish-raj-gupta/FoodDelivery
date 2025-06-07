import mongoose from "mongoose";

export const connectDB = async () =>{
   await mongoose.connect('mongodb+srv://foodDelivery:food_Delivery01@cluster0.89zyueu.mongodb.net/food-del').then(()=>console.log('db connected'));

}

