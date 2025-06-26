// src/components/ProductShared/Toolbar.jsx
import React from "react";

function Toolbar({ sortOption, setSortOption }) {
  return (
    <div className="flex justify-end items-center mb-4">
      <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        className="border border-gray-300 rounded px-3 py-1 text-sm"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}

export default Toolbar;
