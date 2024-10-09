import React, { useEffect, useState } from "react";
import './Text_item.css';
import { Link, useNavigate, useParams } from "react-router-dom";


function Text_item(props) {
const navigate =useNavigate();
  
  return (
    <>
      <div className="div">
        <div className="card m-5" style={{ width: "280px" }}>
          <img src={props.image} id="img" />
          <h4 className="card-title">{props.name}</h4>
          <h6>{props.discription}</h6>
          <h6 className="card-text fw-bolder fs-4" >{props.price}Rs.</h6>

          <button className="btn btn-warning w-75 fw-bolder fs-5">Edit</button>
              
          <button className="btn btn-danger w-75 fw-bolder fs-5" onClick={()=>{
              
                 const apiurl = "http://localhost:3003/jewellery/"+props.id;
                fetch(apiurl, { method: "DELETE" }).
                then(res => res.json())
              }}>Delete</button>
              
             
           

           

        </div>
      </div>
    </>
  );

}
export default Text_item;