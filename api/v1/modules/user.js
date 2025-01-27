const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userName:String,
    pass:String,
    fullName:String,


}); 


 
module.exports=mongoose.model('users' , userSchema); // ייצוא המודל שהוגדר ביחד עם הטבלה בבסיס הנתונים ונסכימה שהגדרנו עבורה
