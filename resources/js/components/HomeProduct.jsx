import React from 'react';
// import bg_img from '../assets/img/bg.png';

const HomeProduct=()=>{
    return(
        <>
           <div className="container-fluid pt-5">
              <div className="container text-center">
                <h4 style={{color:"#C90110"}}>PRODUCT CATEGORIES</h4>
                <h2>OUR PRODUCTS</h2>
                <div className="row mt-5">
                   <div className="col-md-4 mb-4">
                      <div className="card">
                         <h4 style={{color:"#C90110"}} className="mb-4 mt-3">UPVC Glass Foldable Door</h4>
                         <p>Your Gateway to Seamless Elegance and Functionality!
Explore the epitome of modern living with our UPVC Glass Foldable Doors. Crafted with precision and designed for versatility, these doors redefine the way you experience your space.</p>
                         <i class="fa-solid fa-arrow-right-long"></i>
                      </div>
                   </div>
                   <div className="col-md-4 mb-4">
                      <div className="card">
                         <h4 style={{color:"#C90110"}} className="mb-4 mt-3">UPVC Glass Double Glazed Door</h4>
                         <p>Where Innovation and Quality Unite!
Introducing our signature product, the UPVC Glass Double Glazed Door – a perfect harmony of style, insulation, and security for your space. Our UPVC Glass Double Glazed Door ensures thermal efficiency, keeping your space comfortable year-round</p>
                         <i class="fa-solid fa-arrow-right-long"></i>
                      </div>
                   </div>
                   <div className="col-md-4 mb-4">
                      <div className="card">
                         <h4 style={{color:"#C90110"}} className="mb-4 mt-3">UPVC Hinged Door</h4>
                         <p>Explore the epitome of elegance with our UPVC Hinged Doors—a perfect blend of aesthetics, durability, and security for your space. Elevate your home or office with the classic charm of our UPVC Hinged Doors. Crafted with precision, these doors add a touch of sophistication to any environment.</p>
                         <i class="fa-solid fa-arrow-right-long"></i>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </>
    );
}

export default HomeProduct;