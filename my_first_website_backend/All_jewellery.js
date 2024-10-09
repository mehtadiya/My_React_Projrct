const express=require('express');
const router=express.Router();
const AllJewellery=require('./jewelleryschema');


    //get all
    router.get('/jewellery',async(req,res)=>{
        const ans=await AllJewellery.find();
        res.send(ans);
    });

    //get by id
    router.get('/jewellery/:id',async(req,res)=>{
        const ans=await AllJewellery.findOne({id:req.params.id});
        res.send(ans);
    });

    //create
    router.post('/jewellery',async(req,res)=>{
        jewel=new AllJewellery({...req.body});
        const ans=await jewel.save();
        res.send(ans);
    });

    //delete
    router.delete('/jewellery/:id',async(req,res)=>{
        const ans=await AllJewellery.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //update
    router.patch('/jewellery/:id',async(req,res)=>{
        const jewel=await AllJewellery.findOne({id:req.params.id});
        jewel.name=req.body.name;
        jewel.image=req.body.image;
        jewel.discription=req.body.discription;
        jewel.price=req.body.price; 
        const ans=await jewel.save();
        res.send(ans);
    })

   
    module.exports = router;  // Export the router properly