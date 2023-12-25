import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from 'imgPath/image 2.png';

const HomeAbout=()=>{
    return(
        <>
           <div className="container-fluid pt-5 mt-4">
              <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4">
                       <img src={aboutImg} alt="about" style={{width:"100%"}} />
                    </div>
                    <div className="col-md-7">
                       <h3 style={{color:"#C90110"}} className="mb-4">WELCOME TO</h3>
                       <h1>M/S RK FABRICATION</h1>
                       <div className="text-justify">
                        <p>Established in 2015, M/S R K Fabrication takes pride in being a distinguished proprietorship firm. We specialize in the meticulous craft of manufacturing and wholesaling a diverse range of architectural solutions, including UPVC Doors, UPVC Glass Windows, Aluminium Doors, Aluminum Glass Office Cabins and Aluminium Glass Tilt Windows.</p>
                        <p>Our commitment extends beyond products—we provide top-tier Office Partition Services tailored to meet our clients' needs.
At the helm of our journey is the visionary leadership of Mr. Umesh Singh, our esteemed mentor. Under his guidance, we have not only flourished as a business but have also garnered a respected name in the industry.</p>
                       </div>
                       <Link to="about">
                       <div className="rk-btn">Read More</div>
                       </Link>
                    </div>
                </div>
              </div>
           </div>
        </>
    );
}

export default HomeAbout;