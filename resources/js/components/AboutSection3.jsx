import React from 'react';
import AbtImg from 'imgPath/ab-img-2.png';

const AboutSection3=()=>{
    return(
        <>
           <div className="container mt-5">
             <div className="row">
                <div className="col-md-5">
                   <h1 className="text-center">WHY CHOOSE US?</h1>
                   <p className="text-justify mt-4"><b>Quality Craftsmanship:</b> Impeccable precision in every detail.</p>
                   <p className="text-justify mt-4"><b>Innovation in Design:</b> Stay ahead with our modern and functional solutions.</p>
                   <p className="text-justify mt-4"><b>Client-Centric Approach:</b> Your satisfaction is our priority.</p>
                </div>
                <div className="col-md-7">
                   <img src={ AbtImg } alt="About" width="100%" />
                </div>
             </div>
           </div>
        </>
    );
}

export default AboutSection3;