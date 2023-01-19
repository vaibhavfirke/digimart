const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
   img:String
})

const cartModel=mongoose.model("cart",cartSchema);
module.exports={cartModel};