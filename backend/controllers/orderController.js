import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

//placing using order from frontend
const placeOrder =  async (req,res)=>{
  const stripe = new Stripe()
}


export {placeOrder}