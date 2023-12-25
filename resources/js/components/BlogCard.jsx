import React from 'react';

const BlogCard=({props})=>{
    return(
        <>
           <div className="col-md-4 mb-4">
              <div className="blog-card">
                 <img src={props.Blog_img} width="100%" alt="Blog image" />
                 <h3>{ props.Title }</h3>
                 <p>{ props.Desc }</p>
                 <button className="rk-btn">Read More</button>
              </div>
           </div>
        </>
    );
}

export default BlogCard;