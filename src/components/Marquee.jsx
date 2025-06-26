import React from "react";
import products from "../data/products";

function Marquee() {
  const repeatedProducts = [...products, ...products];

  return (
    <div className="relative overflow-hidden bg-white border-y py-6 group">
      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee Content */}
      <div className="flex w-max animate-marquee group-hover:">
        {repeatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 mx-8 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-20 w-auto mx-auto"
            />
            <p className="text-xs mt-2 uppercase tracking-widest font-medium whitespace-nowrap">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
