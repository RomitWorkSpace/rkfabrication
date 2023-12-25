import React from 'react';
import p1 from 'imgPath/p1.png';
import p2 from 'imgPath/p2.png';

const OurProductSection3=()=>{
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="product-clip-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="">
                                <img src={p1} alt="product" width="60%" style={{float:"right"}} />
                            </div>
                            <div className="">
                                <img src={p2} alt="product" width="55%" id="product-bottom" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <h2>Provide complete Range of Aluminium products</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of typeandscrambled it to make a type specimen book.</p>
                            <button className="rk-btn">Learn More</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default OurProductSection3;