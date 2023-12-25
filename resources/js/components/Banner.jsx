import React from 'react';

const Banner=(props)=>{
    return (
        <>
           <div className="container banner-section p-0">
            <img src={props.BannerImg} alt="banner" className="img-width" />
           </div>
        </>
    );
}

export default Banner; 