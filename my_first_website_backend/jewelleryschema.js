const mongoose=require('mongoose');


const jewelleryschema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    discription:String,
    price:Number,
});

module.exports=mongoose.model('AllJewellery',jewelleryschema);
