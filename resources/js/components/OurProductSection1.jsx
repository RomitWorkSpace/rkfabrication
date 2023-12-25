import React from 'react';
import icon1 from 'imgPath/icons/maintenance.png';
import icon2 from 'imgPath/icons/Group.svg';
import icon3 from 'imgPath/icons/shipping-truck.png';

const OurProductSection1=()=>{
    return(
        <>
           <div className="container-fluid text-center mt-5">
            <h2>Our Aluminium Towers- Integrity Through Testing</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <div className="container pt-5">
                <div className="row justify-content-space-around">
                    <div className="col-md-3 mb-3">
                        <div className="contact-card">
                            <div className="icon-bg mb-4">
                                <img src={ icon1 } alt="icon" width="50px" />
                            </div>
                            <h4>Easy Maintenance</h4>
                            <p>The invoicing tool is includedwith your UPI.</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="contact-card">
                            <div className="icon-bg mb-4">
                                <img src={ icon2 } alt="icon" width="50px" />
                            </div>
                            <h4>Designed For Strenght</h4>
                            <p>The invoicing tool is includedwith your UPI.</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="contact-card">
                            <div className="icon-bg mb-4">
                                <img src={ icon3 } alt="icon" width="50px" />
                            </div>
                            <h4>Simple Shipping</h4>
                            <p>The invoicing tool is includedwith your UPI.</p>
                        </div>
                    </div>
                </div>
            </div><hr />
           </div>
        </>
    );
}

export default OurProductSection1;