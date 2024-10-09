import React, { useEffect, useState } from "react";
// import data_product from "../assets/data";
import Text_item from "../components/Text_item/Text_item";
import "./All_jewellery.css"

function Necklace(){
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3003/necklace").
        then((res)=>{return res.json()}).
        then((res)=>{return setData(res)});
    },[]);

    var result=data.map((item)=>{
        return(
            
            <Text_item 
              key={item.name}
              id={item.id}
                image={item.image}
                name={item.name} 
                discription={item.discription}
                price={item.price}/>
         
         );  
    });

    return(
        <>
        <div className="all-items">{result}</div>
        
        </>
    )
    
}
export default Necklace;