import { Link } from "react-router-dom";
import "./Footer.css"

function Footer(){
    return(
        <>
        <div className="footerpage">
            <ul className="list-unstyled text-center">
                <li><Link className='fs-5 m-1 ' style={{color:"brown"}}>FAQ</Link></li>
                <li><Link className='fs-5 m-1 ' style={{color:"brown"}}>RETURNS</Link></li>
                <li><Link className='fs-5 m-1 ' style={{color:"brown"}}>SHOPPING</Link></li>
                <li><Link className='fs-5 m-1 ' style={{color:"brown"}}>CONTACT</Link></li>
                <li><Link className='fs-5 m-1 ' style={{color:"brown"}}>STORE FINDER</Link></li>
            </ul>
            <div className="icons">
            <i className="bi bi-instagram fs-2 m-3"></i>
            <i className="bi bi-facebook fs-2 m-3"></i>
            <i className="bi bi-snapchat fs-2 m-3"></i>
            <i className="bi bi-pinterest fs-2 m-3"></i>
            </div>
            <p className="d-flex text-center fs-5">“Subscribe to our newsletter for exclusive offers and updates!”
                <br/>
                “Join our mailing list to receive 10% off your next purchase!”
                <br/>
                “© [2024] [DIAA]. All rights reserved.”
            
            </p>
            
            </div>
        </>
    );
}

export default Footer;