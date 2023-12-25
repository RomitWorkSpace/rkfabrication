import React from 'react';
import Gall_img from 'imgPath/gal1.png';
import Gall_img2 from 'imgPath/gal2.png';

const HomeGallery=()=>{
   return(
    <>
       <div className="container-fluid text-center mt-5 pt-3">
          <h4 style={{color:"#C90110"}}>PRODUCT GALLERY</h4>
          <h2>OUR GALLERY</h2>
         <div className="container">
           <div className="row mt-5">
              <div className="col-md-4 mb-4">
                 <img src={ Gall_img } alt="gallery" style={{width:"100%"}} />
              </div>
              <div className="col-md-4 mb-4">
                 <img src={ Gall_img2 } alt="gallery" style={{width:"100%"}} />
              </div>
              <div className="col-md-4 mb-4">
                 <img src={ Gall_img } alt="gallery" style={{width:"100%"}} />
              </div>
           </div>
         </div>
       </div>
    </>
   );
}

export default HomeGallery;