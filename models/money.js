const mongoose = require("mongoose") 
const moneySchema = mongoose.Schema({ 
 country: String, 
 currency: {type:String,minlength:5}, 
 rate:{type:Number,min:20,max:40}
}) 
 
module.exports = mongoose.model("money", moneySchema) 