const express=require('express');
const router=express.Router();
const Necklace=require('./necklaceschema');


    //get all
    router.get('/necklace',async(req,res)=>{
        const ans=await Necklace.find();
        res.send(ans);
    });

    //get by id
    router.get('/necklace/:id',async(req,res)=>{
        const ans=await Necklace.findOne({id:req.params.id});
        res.send(ans);
    });

    //create
    router.post('/necklace',async(req,res)=>{
        neck=new Necklace({...req.body});
        const ans=await neck.save();
        res.send(ans);
    });

    //delete
    router.delete('/necklace/:id',async(req,res)=>{
        const ans=await Necklace.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //update
    router.patch('/necklace/:id',async(req,res)=>{
        const neck=await Necklace.findOne({id:req.params.id});
        neck.name=req.body.name;
        neck.image=req.body.image;
        neck.discription=req.body.discription;
        neck.price=req.body.price; 
        const ans=await neck.save();
        res.send(ans);
    })

    module.exports = router;  // Export the router properly
