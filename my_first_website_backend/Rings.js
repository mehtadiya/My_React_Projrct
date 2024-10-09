const express=require('express');
const router=express.Router();
const Rings=require('./ringschema');


    //get all
    router.get('/ring',async(req,res)=>{
        const ans=await Rings.find();
        res.send(ans);
    });

    //get by id
    router.get('/ring/:id',async(req,res)=>{
        const ans=await Rings.findOne({id:req.params.id});
        res.send(ans);
    });

    //create
    router.post('/ring',async(req,res)=>{
        const ring=new Rings({...req.body});
        const ans=await ring.save();
        res.send(ans);
    });

    //delete
    router.delete('/ring/:id',async(req,res)=>{
        const ans=await Rings.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //update
    router.patch('/ring/:id',async(req,res)=>{
        const ring=await Rings.findOne({id:req.params.id});
        ring.name=req.body.name;
        ring.image=req.body.image;
        ring.discription=req.body.discription;
        ring.price=req.body.price; 
        const ans=await ring.save();
        res.send(ans);
    })

    module.exports = router;  // Export the router properly
