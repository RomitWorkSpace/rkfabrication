import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function ProductMenu(){
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {

        axios.get(`/api/products`).then(res=>{
            if(res.status === 200)
            {
                setMenu(res.data.products)
                // setLoading(false);
            }
        });

    }, []);

    var productMenu = "";

    productMenu = menu.map( (item, index) => {
        return (
            <>
            <Link to={ `/product/${item.slug}` }>{ item.title }</Link>
            </>
        )
    })

    return(
        <>
        <li>
            { productMenu }
        </li>
        </>
    );

}

export default ProductMenu;