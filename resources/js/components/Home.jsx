import React from 'react';

import MainSlider from './MainSlider.jsx';
import HomeAbout from './HomeAbout.jsx';
// import HomeProduct from './HomeProduct.jsx';
import Products from './Products.jsx';
import HomeBlog from './HomeBlog.jsx';
import HomeGallery from './HomeGallery.jsx';
import HomeContact from './HomeContact.jsx';

export default function Home(){
    return(
        <>
           <MainSlider />
           <HomeAbout />
           <Products />
           <HomeBlog />
           <HomeGallery />
           <HomeContact />
        </>
    );
}