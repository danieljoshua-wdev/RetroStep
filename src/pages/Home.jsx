// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductShared/ProductCard.jsx";
import products from "../data/products";
import Marquee from "../components/Marquee";
import FeaturedGrid from "../components/FeaturedGrid"; 
import Features from "../components/Features";
import Footer from "../components/Footer";
import ProductShowcase from "../components/ProductShowcase";


function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <FeaturedGrid />
	   <ProductShowcase />
	  <Features />
    </div>
  );
}

export default Home;
