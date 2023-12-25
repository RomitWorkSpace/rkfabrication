import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import axios from 'axios'

function Products(){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        axios.get(`/api/products`).then(res=>{
            if(res.status === 200)
            {
                setProducts(res.data.products)
                // setLoading(false);
            }
        });

    }, []);

    var productDetails = "";

    productDetails = products.map( (item, index) => {
        return (
            <>
            <div className="col-md-3 mt-4">
                <ProductItem props = { item } />
            </div>
            </>
        )
    })

    return(
        <>
        <div className="container-fluid text-center mt-5 pt-4">
             <h4 style={{color:"#C90110"}}>PRODUCT CATEGORIES</h4>
             <h2>OUR PRODUCTS</h2>
            <div className="container mt-5">
                <div className="row">
                    {productDetails}
                </div>
            </div>
        </div>
        </>
    );

}

export default Products;