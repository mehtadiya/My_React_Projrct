const express=require('express');
const router=express.Router();
const Earrings=require('./earringschema');


    //get all
    router.get('/earrings',async(req,res)=>{
        const ans=await Earrings.find();
        res.send(ans);
    });

    //get by id
    router.get('/earrings/:id',async(req,res)=>{
        const ans=await Earrings.findOne({id:req.params.id});
        res.send(ans);
    });

    //create
    router.post('/earrings',async(req,res)=>{
        ear=new Earrings({...req.body});
        const ans=await ear.save();
        res.send(ans);
    });

    //delete
    router.delete('/earrings/:id',async(req,res)=>{
        const ans=await Earrings.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //update
    router.patch('/earrings/:id',async(req,res)=>{
        const ear=await Earrings.findOne({id:req.params.id});
        ear.name=req.body.name;
        ear.image=req.body.image;
        ear.discription=req.body.discription;
        ear.price=req.body.price; 
        const ans=await ear.save();
        res.send(ans);
    })

    module.exports = router;  // Export the router properly
