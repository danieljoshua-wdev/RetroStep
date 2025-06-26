// src/components/ProductShared/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, viewMode }) {
  const {
    id,
    image,
    name,
    category,
    sale,
    price,
    originalPrice,
    salePrice,
    promo,
  } = product;

  const displayPrice = price ?? 0;
  const displaySalePrice = salePrice ?? 0;
  const displayOriginalPrice = originalPrice ?? null;

  // View for "list"
  if (viewMode === "list") {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 border p-4 rounded">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/placeholder.png";
            }}
            className="w-40 h-40 object-contain"
          />
        </Link>
        <div className="flex-1">
          <Link to={`/product/${id}`}>
            <h3 className="text-lg font-semibold hover:underline">{name}</h3>
          </Link>
          <p className="text-sm text-gray-500">{category}</p>
          <div className="mt-2">
            {sale ? (
  <>
    <span className="text-black font-semibold text-sm">
      ${displaySalePrice.toLocaleString()}
    </span>
    {displayOriginalPrice && (
      <span className="ml-2 line-through text-gray-400 text-xs">
        ${displayOriginalPrice.toLocaleString()}
      </span>
    )}
  </>
) : (
  <span className="text-sm font-semibold text-black">
    ${displayPrice.toLocaleString()}
  </span>
)}
{promo && (
  <span className="block mt-1 text-xs text-red-600 font-medium">
    {promo}
  </span>
)}
          </div>
        </div>
      </div>
    );
  }

  // View for "grid"
  return (
    <div className="text-center">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/placeholder.png";
          }}
          className="w-full h-60 object-contain mb-4 hover:scale-105 transition-transform duration-200"
        />
      </Link>
      <p className="text-xs uppercase text-gray-500">{category}</p>
      <Link to={`/product/${id}`}>
        <h3 className="text-sm font-semibold mt-1 hover:underline">{name}</h3>
      </Link>
      <div className="mt-1">
        {sale ? (
          <>
           <span className="text-black font-semibold text-sm">
      ${displaySalePrice.toLocaleString()}
    </span>
            {displayOriginalPrice && (
              <span className="ml-2 line-through text-gray-400 text-xs">
                ${displayOriginalPrice.toLocaleString()}
              </span>
            )}
          </>
        ) : (
          <span className="text-sm font-semibold text-gray-900">
            ${displayPrice.toLocaleString()}
          </span>
        )}
      </div>
      {promo && (
        <span className="block mt-1 text-xs text-red-600 font-medium">
          {promo}
        </span>
      )}
    </div>
  );
}

export default ProductCard;
