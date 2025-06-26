// src/components/FeaturedGrid.jsx
import React from "react";

const featured = [
  {
    id: 1,
    name: "New Balance 327",
    image: "/src/assets/newbalance327.webp",
  },
  {
    id: 2,
    name: "Nike Zoom Vomero",
    image: "/src/assets/vomerofeatured.webp",
  },
  {
    id: 3,
    name: "Onitsuka Mexico 66",
    image: "/src/assets/onitsukamexico66featured.webp",
  },
];

function FeaturedGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
      {featured.map((item) => (
        <div key={item.id} className="relative group">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[500px] object-cover rounded"
          />
          <div className="absolute bottom-4 left-4 bg-black text-white text-xs tracking-widest px-4 py-2 uppercase font-medium">
            {item.name}
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeaturedGrid;
