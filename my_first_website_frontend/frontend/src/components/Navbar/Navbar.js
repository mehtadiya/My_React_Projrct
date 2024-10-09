import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png'
import wishlist from '../../assets/wishlist.png'
import account from '../../assets/account.png'
import { Link } from "react-router-dom";



function Navbar() {
    const [cartcount, setCartcount] = useState(0);
    return (
        <>
            <div className="Navbar">
                <div className="logo">
                    <img src={logo} className="w-50 rounded"></img>
                </div>
                <div className="search"><input type="text" className="form-control w-100" placeholder="Search for Gold jewellery,Diamond jewellery and more.." />
                
                </div>
                <div className="navicons">
                    <Link  style={{color:"#3B2A1A"}} > <i className="bi bi-cart fs-1 me-5"></i></Link>
                    <Link  style={{color:"#3B2A1A"}} ><i className="bi bi-heart fs-1 me-5"></i></Link>
                    <Link to="/admin" style={{color:"#3B2A1A"}} ><i className="bi bi-person fs-1 me-5"></i></Link>
                    
                </div>
                
            </div>
        </>
    );

}
export default Navbar;