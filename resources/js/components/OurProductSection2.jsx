import React from 'react';
import ProductItem from './ProductItem';
import p1 from 'imgPath/product-item1.png';

const OurProductSection2=()=>{
    const Product = {
                      image: p1,
                      title: "PRODUCT NAME",
                      description: "Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of typeandscrambled it to make a type specimen book."
                    }
    return(
        <>
           <div className="container-fluid text-center mt-5 pt-4">
             <h4 style={{color:"#C90110"}}>PRODUCT CATEGORIES</h4>
             <h2>OUR PRODUCTS</h2>
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                       <ProductItem props = {Product} />
                    </div>
                    <div className="col-md-4 mb-4">
                       <ProductItem props = {Product} />
                    </div>
                    <div className="col-md-4 mb-4">
                       <ProductItem props = {Product} />
                    </div>
                </div>
             </div>
           </div>
        </>
    );
}

export default OurProductSection2;