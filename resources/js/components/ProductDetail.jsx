import React from 'react';
import product_img from 'imgPath/product-main.png';
import Banner from './Banner';
import ProductDetail1 from './ProductDetail1.jsx';

function ProductDetail(){
    return (
        <>
        <Banner BannerImg = { product_img } />
        <ProductDetail1 />
        </>
    );
}

export default ProductDetail;