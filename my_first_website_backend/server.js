const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors'); 
const bodyParser=require('body-parser');
const jewelleryRoutes = require('./All_jewellery');
const necklaceRoutes=require('./Necklace.js');
const earringsRoutes=require('./Earrings.js');
const ringsRoutes=require('./Rings.js');
const braceletsRoutes=require('./Bracelets.js');


const connectionString="mongodb+srv://Diyamehta:diyamehta@cluster0.5wjcy.mongodb.net/backend";

mongoose.connect(connectionString).
then(()=>{
    console.log("connected to db");
    const app=express();
    app.use(bodyParser.json());
    app.use(cors());
    

    app.use('/', jewelleryRoutes);  
    app.use('/',necklaceRoutes);
    app.use('/', earringsRoutes);  
    app.use('/',ringsRoutes);
    app.use('/',braceletsRoutes);

    app.listen(3003,()=>{
        console.log("server started");
        
    })
})