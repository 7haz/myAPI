var mongoose = require("mongoose");


var partSchema = new mongoose.Schema({
    _id : { type:String,required:true,unique:true},
    title : { type:String,required:true},
    price : { type:String,required:true},
    link : { type:String},
    car : {type:String},
    year : {type:String},
    img : {type:String}
})

module.exports = mongoose.model("Part",partSchema);