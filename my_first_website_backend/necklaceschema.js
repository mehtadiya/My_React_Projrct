const mongoose=require('mongoose');


const necklaceschema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    discription:String,
    price:Number,
});

module.exports=mongoose.model('Necklace',necklaceschema);
