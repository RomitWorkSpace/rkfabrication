import React from 'react';
import ContactImg from 'imgPath/contact-img.png';

const ContactSection1=()=>{
    return (
        <>
           <div className="container">
            <div className="row align-items-center mt-4">
                <div className="col-8">
                    <h1>GET IN TOUCH</h1>
                </div>
                <div className="col-4">
                    <img src={ ContactImg } alt="Contact" width="100%" />
                </div>
            </div>
           </div>
           <div className="container">
            <div className="row justify-content-space-between">
                <div className="col-md-3">
                    <div className="contact-card mb-4">
                        <h3>Main Location</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-card mb-4">
                        <h3>Mobile Number</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact-card mb-4">
                        <h3>E-mail</h3>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}

export default ContactSection1;