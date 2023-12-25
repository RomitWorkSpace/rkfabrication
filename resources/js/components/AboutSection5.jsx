import React from 'react';
import Abt1 from 'imgPath/Abt12.png';
import Abt2 from 'imgPath/Abt13.png';
import Abt3 from 'imgPath/Abt11.png';

const AboutSection5=()=>{
    return(
        <>
           <div className="container mt-5 pt-4">
              <div className="row">
                 <div className="col-6 col-md-3 mb-4">
                    <div style={{backgroundColor:"#C90110",width:"100%",height:"100%"}} className="p-3">
                       <h1 style={{color:"#fff"}}>MARKETS WE SERVE</h1>
                    </div>
                 </div>
                 <div className="col-6 col-md-3 mb-4">
                    <img src={ Abt1 } alt="about" width="100%" />
                 </div>
                 <div className="col-6 col-md-3 mb-4">
                    <img src={ Abt2 } alt="about" width="100%" />
                 </div>
                 <div className="col-6 col-md-3 mb-4">
                    <img src={ Abt3 } alt="about" width="100%" />
                 </div>
              </div>
           </div>
        </>
    );
}

export default AboutSection5;