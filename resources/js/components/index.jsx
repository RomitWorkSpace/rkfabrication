import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import OurProduct from './OurProduct.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';
import ProductDetail from './ProductDetail.jsx';

function Index() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/our-products" exact element={<OurProduct />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/products" exact element={<Products />} />
        <Route path='/product/:slug' exact element={<ProductDetail />} />
    </Routes>
    <Footer />
    </>
  );
}

export default Index;
