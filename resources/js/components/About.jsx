import React from 'react';
import topBanner from 'imgPath/about-us.jpeg';
import Banner from './Banner.jsx';
import AboutSection1 from './AboutSection1.jsx';
import AboutSection2 from './AboutSection2.jsx';
import AboutSection3 from './AboutSection3.jsx';
import AboutSection4 from './AboutSection4.jsx';
import AboutSection5 from './AboutSection5.jsx';

function About(){
    return(
        <>
            <Banner BannerImg = {topBanner} />
            <AboutSection1 />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
            <AboutSection5 />
        </>
    );
}

export default About;