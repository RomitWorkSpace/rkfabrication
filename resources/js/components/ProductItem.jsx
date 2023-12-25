import React from 'react';
import { Link } from "react-router-dom";

const ProductItem=({props})=>{

    return (
        <>
           <div className="product-bg text-center">
            <img className="mb-4" src={"https://rkfabrication.in/storage/app/" + props.image} alt="product" width="100%" />
            <Link to={`/product/${props.slug}`}>
                <h4 style={{color:"#C90110"}}>{ props.title }</h4>
            </Link>
            <Link to={`/product/${props.slug}`}>
            <button className="rk-btn">Read More</button>
            </Link>
           </div>
        </>
    );
}

export default ProductItem;