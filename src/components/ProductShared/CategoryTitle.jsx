
import React from "react";

function CategoryTitle({ title, count }) {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-light tracking-widest">{title}</h1>
      <p className="text-sm text-gray-500 mt-2">{count} PRODUCTS</p>
    </div>
  );
}

export default CategoryTitle;
