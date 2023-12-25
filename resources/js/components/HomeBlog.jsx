import React from 'react';
import img1 from 'imgPath/blog1.png';
import img2 from 'imgPath/blog2.png';

const HomeBlog=()=>{
   return(
    <>
       <div className="container-fluid text-center mt-5 pt-4">
         <h2>BLOGS</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="container mt-5">
           <div className="row">
              <div className="col-md-4 mb-4">
                <div className="blog-bdr">
                    <img src={img1} alt="blog" style={{width:"100%"}} />
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                    <h4 className="mb-4">Read Our Latest Blogs</h4>
                    <p>Explore our blog to witness the transformative power of White UPVC Glass Windows by R K Fabrication. Redefine your living spaces with windows that offer clarity, elegance, and enduring quality. Choose R K Fabrication for windows that not only frame views but elevate them. </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="blog-bdr">
                    <img src={img2} alt="blog" style={{width:"100%"}} />
                </div>
              </div>
           </div>
        </div>
        <hr />
       </div>
    </>
   );
}

export default HomeBlog;