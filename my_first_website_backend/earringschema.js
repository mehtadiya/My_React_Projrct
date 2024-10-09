const mongoose=require('mongoose');

const earringschema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    discription:String,
    price:Number,
});

module.exports=mongoose.model('Earrings',earringschema);