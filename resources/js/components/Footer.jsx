import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'imgPath/rk.png';

class Footer extends Component{
    render() { 
    return (
        <>
           <div className="container-fluid footer-bg pt-5 pb-5 mt-5">
             <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <img src={Logo} alt="Logo" height="100" />
                         <p className="text-dark mt-3 text-justify">Driven by a commitment to excellence, we strive to provide the highest quality products and services. Whether it's the seamless integration of UPVC and aluminium or the precision of our Office Partition Services, every aspect is crafted with utmost care.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                       <h4 className="mb-4">INFORMATION</h4>
                       <div className="footer-info">
                           <i className="fa fa-angle-right"></i>
                           <span><Link to="about" className="text-dark"> About Us </Link></span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-angle-right"></i>
                           <span><Link to="contact" className="text-dark"> Contact Us </Link></span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-angle-right"></i>
                           <span><Link to="blog" className="text-dark"> Blog </Link></span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-angle-right"></i>
                           <span><Link to="products" className="text-dark"> Products </Link></span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-angle-right"></i>
                           <span><Link to="/" className="text-dark"> Terms & Conditions</Link></span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-4">GET IN TOUCH</h4>
                        <div className="footer-info">
                           <i className="fa fa-phone"></i>
                           <span> +91 9034129456</span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-envelope"></i>
                           <span> support@rkfabrication.com</span>
                        </div>
                        <div className="footer-info">
                           <i className="fa fa-location-dot"></i>
                           <span> Khasra No-29, Near Hanuman Mandir Sec 168, Village New Dallupura Nalgara, Gautam Budh Nagar-201306, Uttar Pradesh, India</span>
                        </div>
                    </div>
                </div>
             </div>
           </div>
            <div className="container-fluid footer-bottom">
               <div className="container">
                 <p>Developed & Managed by LTS, All rights reserved</p>
               </div>
            </div>
        </>
    );
}
}

export default Footer;