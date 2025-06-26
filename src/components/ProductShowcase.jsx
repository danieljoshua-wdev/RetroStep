import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import shoe1 from "../assets/featured1.webp";
import shoe2 from "../assets/featured2.webp";
import shoe3 from "../assets/featured3.webp";
import shoe4 from "../assets/featured4.webp";
import shoe5 from "../assets/featured5.jpg";
import shoe6 from "../assets/featured6.webp";
import shoe7 from "../assets/featured7.webp";
import shoe8 from "../assets/featured8.jpg";

function ProductShowcase() {
	const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("new");
  const [fadeKey, setFadeKey] = useState(0); // Used to re-trigger animation on tab change

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setFadeKey((prev) => prev + 1); // Trigger re-render for animation
      setActiveTab(tab);
    }
  };

  const newArrivals = [
    { id: 1, name: "LOEWE x ON CLOUDTILT 2 'BLACK WHITE GUM' (W)", price: "₱44,995.00", image: shoe1, category: "Women's Lifestyle" },
    { id: 2, name: "LOEWE x ON CLOUDTILT 2 'Grey' (W)", price: "₱44,995.00", image: shoe2, category: "Women's Lifestyle" },
    { id: 3, name: "LOEWE x ON CLOUDTILT 2 'ALL WHITE' (W)", price: "₱44,995.00", image: shoe3, category: "Women's Lifestyle" },
    { id: 4, name: "LOEWE x ON CLOUDTILT 2 'CREAM DESERT' (W)", price: "₱44,995.00", image: shoe4, category: "Women's Lifestyle" },
  ];

  const bestsellers = [
    { id: 5, name: "ONITSUKA TIGER TOKUTEN 'WHITE/BLACK/GOLD'", price: "₱3,395.00", sale: "₱7,995.00", image: shoe5, category: "Women's Lifestyle", rating: 5.0 },
    { id: 6, name: "NIKE AIR FORCE 1 '07' 'TRIPLE WHITE' (W)", price: "₱9,095.00", sale: "₱12,995.00", image: shoe6, category: "Men's/Women's Lifestyle", rating: 5.0 },
    { id: 7, name: "ADIDAS SAMBA OG 'CLOUD WHITE'", price: "₱9,095.00", sale: "₱12,995.00", image: shoe7, category: "Men's/Women's Lifestyle", rating: 5.0 },
    { id: 8, name: "New Balance 327 'Moonbeam Driftwood'", price: "₱9,095.00", sale: "₱12,995.00", image: shoe8, category: "Men's/Women's Lifestyle", rating: 5.0 },
  ];

  const renderCard = (product) => (
    <div key={product.id} className="text-center transition-transform duration-500 hover:scale-105">
      {product.sale && (
        <div className="text-xs text-white bg-red-600 px-2 py-1 inline-block mb-2">
          SAVE ₱
          {(
            parseFloat(product.sale.replace("₱", "").replace(",", "")) -
            parseFloat(product.price.replace("₱", "").replace(",", ""))
          ).toLocaleString()}
        </div>
      )}
      <img src={product.image} alt={product.name} className="mx-auto w-full max-w-[240px]" />
      <p className="text-xs mt-2 uppercase tracking-wide">{product.category}</p>
      <p className="mt-1 font-semibold">{product.name}</p>
      <div className="mt-1">
        <span className="text-red-500">{product.price}</span>
        {product.sale && (
          <span className="text-gray-500 line-through text-sm ml-2">{product.sale}</span>
        )}
      </div>
      {product.rating && (
  <div className="mt-1 text-xs text-gray-800 flex items-center justify-center space-x-1">
    <div className="text-black">
      {"★".repeat(Math.floor(product.rating))}
    </div>
    <span className="text-gray-500">({product.rating.toFixed(1)})</span>
  </div>
)}
    </div>
  );

  return (
    <section className="py-12 px-6">
      {/* Tabs */}
      <div className="text-center mb-8">
        <div className="inline-flex space-x-10 text-lg font-semibold uppercase tracking-wider">
          <button
            onClick={() => handleTabChange("new")}
            className={`border-b-2 pb-1 ${
              activeTab === "new" ? "border-black text-black" : "border-transparent text-gray-400"
            } transition`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => handleTabChange("bestsellers")}
            className={`border-b-2 pb-1 ${
              activeTab === "bestsellers"
                ? "border-black text-black"
                : "border-transparent text-gray-400"
            } transition`}
          >
            Bestsellers
          </button>
        </div>
      </div>

      {/* Product Grid with Animation */}
      <div
        key={fadeKey} // This resets animation when tab changes
        className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn"
      >
        {(activeTab === "new" ? newArrivals : bestsellers).map(renderCard)}
      </div>

      {/* View All */}
      <div className="text-center mt-10">
       <button
  onClick={() =>
    navigate(activeTab === "new" ? "/new-arrivals" : "/bestsellers")
  }
  className="bg-black text-white px-6 py-2 rounded uppercase tracking-wide hover:bg-gray-800 transition"
>
  View All
</button>
      </div>
    </section>
  );
}

export default ProductShowcase;
