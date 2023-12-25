import React from 'react';
import product_img from 'imgPath/our-product.jpeg';
import Banner from './Banner';
import OurProductSection1 from './OurProductSection1';
import Products from './Products.jsx';
// import OurProductSection2 from './OurProductSection2';
import OurProductSection3 from './OurProductSection3';


const OurProduct=()=>{
    return (
        <>
           <Banner BannerImg = { product_img } />
           <OurProductSection1 />
           <Products />
           <OurProductSection3 />
        </>
    );
}

export default OurProduct;