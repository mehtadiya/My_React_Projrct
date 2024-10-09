import { useEffect, useState } from "react";
import GetById from "./getbyid";
import { useParams } from "react-router-dom";

function All_jewellery_id(){
  const [data,setData]=useState({});
  const{id}=useParams();
  useEffect(()=>{
    const api = `http://localhost:3003/jewellery/`+id;
        fetch(api).
        then((res) => {return res.json() }).
        then((res) => {return  setData(res) })
  },[])
    

        return(
         <h1>{data.name}</h1>
            // <GetById 
            //     key={data.id}
            //     id={data.id}
            //     image={data.image}
            //     name={data.name} 
            //     discription={data.discription}
            //     price={data.price}/>
                
        )
   
 
    
}
export default All_jewellery_id;