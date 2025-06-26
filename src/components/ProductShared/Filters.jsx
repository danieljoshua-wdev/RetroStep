import React from "react";

function Filters() {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-2">Availability</h3>
        <select className="w-full border px-3 py-2 text-sm">
          <option>All</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Price</h3>
        <select className="w-full border px-3 py-2 text-sm">
          <option>All</option>
          <option>$0–$5,000</option>
          <option>$5,000–$10,000</option>
        </select>
      </div>
    </aside>
  );
}

export default Filters;
