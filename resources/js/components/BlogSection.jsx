import React from 'react';
import BlogCard from './BlogCard';
import img1 from 'imgPath/blog-img1.png';

const BlogSection=()=>{
    const BlogData = {
                      Blog_img: img1,
                      Title: "Lorem Ipsum is simply dummy",
                      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                     }
    return (
        <>
           <div className="container-fluid text-center mt-5 pt-3">
              <h4 style={{color:"#C90110"}}>RECENT</h4>
              <h1>BLOGS</h1>
              <div className="container mt-4">
                <div className="row">
                    <BlogCard props = {BlogData}/>
                    <BlogCard props = {BlogData}/>
                    <BlogCard props = {BlogData}/>
                </div>
              </div>
           </div>
        </>
    );
}

export default BlogSection;