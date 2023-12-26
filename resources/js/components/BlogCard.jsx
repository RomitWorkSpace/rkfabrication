import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard=({props})=>{
    return(
        <>
           <div className="col-md-4 mb-4">
              <div className="blog-card">
                 <img src={props.image} width="100%" alt="Blog image" />
                 <h3>{ props.title }</h3>
                 <p>{ props.description }</p>
                 <Link to={`/blog/${props.slug}`}>
                     <button className="rk-btn">Read More</button>
                 </Link>
              </div>
           </div>
        </>
    );
} 

export default BlogCard;