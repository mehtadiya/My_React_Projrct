import React, { useState } from "react";
// import data_product from "../assets/data";

function GetById(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        {props.image}
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                {props.name}
                            </div>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h1>{props.discription}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h1>{props.price}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-success">Add to cart</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default GetById;