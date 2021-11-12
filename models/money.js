const mongoose = require("mongoose") 
const moneySchema = mongoose.Schema({ 
 country: String, 
 currency: String, 
 rate: Number 
}) 
 
module.exports = mongoose.model("money", moneySchema) 