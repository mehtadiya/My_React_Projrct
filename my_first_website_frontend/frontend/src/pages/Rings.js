import React, { useEffect, useState } from "react";
import Text_item from "../components/Text_item/Text_item";
import "./All_jewellery.css"

function Rings(){
    const [ring,setRing]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3003/ring").
        then((res)=>{return res.json()}).
        then((res)=>{
            return setRing(res);
        }
            
        )
    },[]);

    const result=ring.map((item)=>{
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
export default Rings;