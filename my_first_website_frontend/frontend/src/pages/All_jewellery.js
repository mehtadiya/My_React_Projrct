import React, { useEffect, useState } from "react";
// import data_product from "../assets/data";
import Text_item from "../components/Text_item/Text_item";
import "./All_jewellery.css"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function All_jewellery(){
    const [jewel,setJewel]=useState([]);
    const {id}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:3003/jewellery").
        then((res)=>{return res.json()}).
        then((res)=>{
            return setJewel(res);
            // console.log(jewel);
        }
            
        )
    },[]);

    const result=jewel.map((item)=>{
        return(
          <>
            <Text_item 
                key={item.name}
                id={item.id}
                image={item.image}
                name={item.name} 
                discription={item.discription}
                price={item.price}/>
                 
                  </>
                
        )
     } )

     return(
        <>
        <div className="all-items">
            {result} 
            </div>
           
             </>
       
     )

    
}
export default All_jewellery;