const mongoose = require('mongoose');
const productSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pName:String,
    price:Number,
    pDesc:String,
    picName:String,
    cID:Number,
    pID:Number
});//creating a new mongo scheme for products
const model = mongoose.model('product',productSchema); // creating a mongo model for products


module.exports=model;