// src/components/ProductShared/Breadcrumbs.jsx
import React from "react";

function Breadcrumbs({ path }) {
  const items = Array.isArray(path) ? path : (path?.split(" / ") || []);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span>{item}</span>
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
