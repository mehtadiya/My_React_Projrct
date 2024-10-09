const mongoose=require('mongoose');

const braceletschema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    discription:String,
    price:Number,
});

module.exports=mongoose.model('Bracelet',braceletschema);