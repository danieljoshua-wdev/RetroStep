// src/components/Search/SearchOverlay.jsx
import React, { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import allProducts from "../../data/allProducts";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function SearchOverlay() {
  const { isOpen, setIsOpen } = useSearch();
  const [query, setQuery] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-white shadow-md border-b`}
      style={{ maxHeight: "80vh" }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <input
          autoFocus
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border-none focus:ring-0 outline-none text-lg"
        />
        <button onClick={() => setIsOpen(false)} className="ml-4 text-gray-600 hover:text-black">
          <FaTimes size={18} />
        </button>
      </div>

      {/* Results */}
      <div className="max-h-[60vh] overflow-y-auto px-6 py-4">
        {query.length === 0 ? (
          <p className="text-sm text-gray-500">Start typing to search...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-sm text-gray-500">No products found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredProducts.slice(0, 10).map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-contain border"
                  />
                  <div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      ₱{(product.sale ? product.salePrice : product.price).toLocaleString()}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchOverlay;
