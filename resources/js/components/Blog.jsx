import React from 'react';
import Banner from './Banner';
import BlogSection from './BlogSection';
import topBanner from 'imgPath/blog-banner.jpeg';

const Blog=()=>{
    return(
        <>
            <Banner BannerImg = { topBanner } />
            <BlogSection />
        </>
    );
}

export default Blog;
