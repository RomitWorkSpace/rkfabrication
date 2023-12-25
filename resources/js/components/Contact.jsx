import React from 'react';
import Banner from './Banner'
import ContactSection1 from './ContactSection1';
import ContactForm from './ContactForm';
import ContactBanner from 'imgPath/contact-us.jpeg';

const Contact=()=>{
    return(
        <>
           <Banner BannerImg = {ContactBanner} />
           <ContactSection1 />
           <ContactForm />
        </>
    );
}

export default Contact;