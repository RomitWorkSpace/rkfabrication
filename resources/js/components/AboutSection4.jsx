import React from 'react'
import img1 from 'imgPath/img1.png';

const AboutSection4=()=>{
    return(
        <>
           <div className="container mt-5 pt-5 pb-5" style={{backgroundColor:"#D9D9D9"}}>
            <div className="row">
                <div className="col-md-7">
                  <img src={ img1 } alt="about" width="100%" />
                </div>
                <div className="col-md-5">
                   <div className="">
                    <h1 className="text-center mb-4">WHAT WE PROVIDE</h1>
                    <h3 style={{color:"#C90110"}}>Natural Light Infusion</h3>
                    <p>Transform your living spaces with abundant natural light. Our windows are designed to maximize sunlight, creating a bright and inviting ambiance in your home.</p>
                    <h3 style={{color:"#C90110"}}>Energy Efficiency</h3>
                    <p>Embrace a sustainable lifestyle with our energy-efficient windows. The UPVC material, coupled with the white finish, contributes to excellent insulation, keeping your home comfortable year-round.</p>
                    <h3 style={{color:"#C90110"}}>Innovative Design</h3>
                    <p>Stay ahead in style with our innovative White UPVC Glass Windows, designed to complement modern and traditional aesthetics alike.</p>
                    <h3 style={{color:"#C90110"}}>Customization Options</h3>
                    <p>Tailor your windows to match your unique preferences. Choose from various sizes and styles to seamlessly integrate with your home's design.</p>
                    <h3 style={{color:"#C90110"}}>Professional Installation</h3>
                    <p>Our expert team ensures a seamless installation process, guaranteeing that your White UPVC Glass Windows not only enhance your home's aesthetics but also function optimally.</p>
                   </div>
                </div>
            </div>
           </div>
        </>
    );
}

export default AboutSection4;