const mongoose = require('mongoose');
const ordersModel=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    oDesc:String,
    pID:Number,
    amount:Number,
    totalPrice:Number,
    oID:Number
});//creating a new mongo scheme for products
const model = mongoose.model('orders',ordersModel); // creating a mongo model for products


module.exports=model;