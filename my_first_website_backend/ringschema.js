const mongoose=require('mongoose');

const ringschema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    discription:String,
    price:Number,
});

module.exports=mongoose.model('Rings',ringschema);