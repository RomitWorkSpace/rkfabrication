import React from 'react';
import AboutBG from 'imgPath/ab-bg.png';

const AboutSection2=()=>{
    const aboutStyle = {
        backgroundImage: `url(${AboutBG})`
    };
    return(
        <>
           <div className="container mt-5 about-bg" style = {aboutStyle}>
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6 right-bg">
                    <h1>A BETTER BUILDMARKS A BETTER TOWER</h1>
                    <p>Driven by a commitment to excellence, we strive to provide the highest quality products and services. Whether it's the seamless integration of UPVC and aluminium or the precision of our Office Partition Services, every aspect is crafted with utmost care.</p>
                    <div className="rk-btn">Learn More</div>
                </div>
            </div>
           </div>
        </>
    );
}

export default AboutSection2;