const express=require('express');
const router=express.Router();
const Bracelet=require('./braceletschema');

//get all
router.get('/bracelet',async(req,res)=>{
    const ans=await Bracelet.find();
    res.send(ans);
});

//get by id
router.get('/bracelet/:id',async(req,res)=>{
    const ans=await Bracelet.findOne({id:req.params.id});
    res.send(ans);
});


//add
router.post('/bracelet',async(req,res)=>{
    const brac=new Bracelet({...req.body});
    const ans=await brac.save();
    res.send(ans);
});

//delete
router.delete('/bracelet/:id',async(req,res)=>{
    const ans=await Bracelet.deleteOne({id:req.params.id});
    res.send(ans);
});

//update
router.patch('/bracelet/:id',async(req,res)=>{
    const brac=await Bracelet.findOne({id:req.params.id});
    brac.name=req.body.name;
    brac.image=req.body.image;
    brac.discription=req.body.discription;
    brac.price=req.body.price; 
    const ans=await brac.save();
    res.send(ans);
})

module.exports = router;