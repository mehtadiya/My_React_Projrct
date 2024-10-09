import React from "react";
import "./Home.css"
import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import image6 from "../assets/image6.jpeg"

function Home() {
    return (
        <>
            <div className="homebox container-fluid">
                <div className="row h-100" >
                <div className="rbox col">
                        <div className="fs-1 d-flex justify-content-around mt-5">"Crafting Luxury, Celebrating You"</div>
                        
                        <div className="fs-3 d-flex justify-content-around mt-5 text-center">“At MW Jewelry, we believe that every piece of jewelry tells a story — your story. With a passion for design and craftsmanship that spans generations, we create timeless pieces that capture the essence of elegance and individuality. From ethically sourced materials to our commitment to sustainable practices, we pride ourselves on creating not just jewelry, but heirlooms to be cherished forever.”</div>
                    </div>
                    <div className="col-6">
                        <div className="row ">
                            <div className="slant w-50">
                                <img src={image1} className="image  me-4" />
                                <img src={image2} className="image me-4" />
                                <img src={image3} className="image" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="slant w-100 mt-5">
                                <img src={image4} className="image me-4" />
                                <img src={image5} className="image  me-4" />
                                <img src={image6} className="image" />
                            </div>
                        </div>

                    </div>
                    
                </div>



                <div></div>
            </div>




        </>
    );
}
export default Home;