import React, { useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';


function Item() {
    const [menu,setMenu]=useState("");

    return (
        <>
                    <ul className="items list-unstyled">
                      <li onClick={()=>{setMenu("ALL JEWELLERY")}}><Link to="/alljewellery" className='text-decoration-none fw-bold' style={{color:"brown"}}>ALL JEWELLERY</Link>{menu==="ALL JEWELLERY"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("NECKLACE")}}><Link to="/necklace" className='text-decoration-none fw-bold' style={{color:"brown"}}>NECKLACE</Link>{menu==="NECKLACE"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("BRACELETS")}}><Link to="/bracelets" className='text-decoration-none fw-bold' style={{color:"brown"}}>BRACELETS</Link>{menu==="BRACELETS"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("EARRINGS")}}><Link to="/earrings" className='text-decoration-none fw-bold' style={{color:"brown"}}>EARRINGS</Link>{menu==="EARRINGS"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("RINGS")}}><Link to="/rings" className='text-decoration-none fw-bold' style={{color:"brown"}}>RINGS</Link>{menu==="RINGS"?<hr/>:<></>}</li>
                      {/* <hr/> */}
                     
                    </ul>
                
          
        </>
    )
}
export default Item;