import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function ProductDetail1({ item }){

    const [product, setProduct] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        // const product_slug = match.params.slug;

        axios.get(`/api/fetchproduct/${slug}`).then(res => {
            setProduct(res.data.product);
        })
    },[slug]);

    // var productItem = '';
    // productItem =product.map((item, index) => {
    //     return (
    //         <>
    //            <div className="col-md-5 mb-3">
    //                 <img src={"https://rkfabrication.in/storage/app/" + item.image} alt="product" width="100%" />
    //             </div>
    //             <div className="col-md-7">
    //                 <div className="text-justify">
    //                     <h3 style={{color:"#C90110"}}>{item.title}</h3>
    //                     {item.description}
    //                 </div>
    //                 <button className="rk-btn">BOOK NOW</button>
    //             </div>
    //         </>
    //     );
    // });

    return(
        <>
        <div className="container mt-5">
            <div className="row">
                { product && product.map(item => 
                    <>
                    <div className="col-md-5 mb-3">
                         <img src={"https://rkfabrication.in/storage/app/" + item.image} alt="product" width="100%" />
                     </div>
                     <div className="col-md-7">
                         <div className="text-justify">
                             <h3 style={{color:"#C90110"}}>{item.title}</h3>
                             <div dangerouslySetInnerHTML={{ __html: item.description}}></div>
                         </div>
                         <button className="rk-btn">BOOK NOW</button>
                     </div>
                    </>
                )}
            </div>
        </div>
        </>
    );
}

export default ProductDetail1;