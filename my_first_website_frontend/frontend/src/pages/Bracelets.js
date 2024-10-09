import React, { useEffect, useState } from "react";
import Text_item from "../components/Text_item/Text_item";
import "./All_jewellery.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Bracelets(){
    const [brac,setBrac]=useState([]);
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch("http://localhost:3003/bracelet").
        then((res)=>{return res.json()}).
        then((res)=>{
            return setBrac(res);
        }
            
        )
    },[]);

    const result=brac.map((item)=>{
        return(
          
            <Text_item 
                key={item.name}
                id={item.id}
                image={item.image}
                name={item.name} 
                discription={item.discription}
                price={item.price}
                 />
        )
     } )

     return(
        <div className="all-items">{result}</div>
     )

    
}
export default Bracelets;