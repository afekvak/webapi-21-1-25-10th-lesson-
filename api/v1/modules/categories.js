const mongoose = require('mongoose');
const categoiresModel=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cName:String,
    cDesc:String,
    cID:Number
});//creating a new mongo scheme for products
const model = mongoose.model('categories',categoiresModel); // creating a mongo model for products


module.exports=model;