var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/RateMyCakes');

const RatingSchema = new mongoose.Schema({
    content:{type:String},
    stars:{type:Number}
})

const CakeSchema = new mongoose.Schema({
    bakerName:{type:String, minlength:[3, "Name must be at least 3 characters long."]},
    imgUrl:{type:String, required:[true, "Please add an image link."]},
    ratings:[RatingSchema]
}, {timestamps:true})


module.exports = mongoose.model('Cake', CakeSchema)