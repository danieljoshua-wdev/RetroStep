import React, { useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../data/allProducts";
import Breadcrumbs from "../components/ProductShared/Breadcrumbs";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">Product not found.</div>
    );
  }

  const {
    name,
    image,
    category,
    price,
    originalPrice,
    salePrice,
    sale,
    inventory,
    sizes,
  } = product;

  const displayPrice = price ?? 0;
  const displayOriginalPrice = originalPrice ?? null;
  const displaySalePrice = salePrice ?? null;

  const handleAddToCart = () => {
    if (!selectedSize && sizes?.length > 0) {
      alert("Please select a size.");
      return;
    }

    addToCart({ ...product, selectedSize, quantity });
    alert("Added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumbs path={`Home / Shop / ${category} / ${name}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full">
          <img
            src={image || "/fallback-image.jpg"}
            alt={name}
            className="w-full h-auto object-contain rounded"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-sm text-gray-500 mb-4">{category}</p>

          {/* Price Display */}
          <div className="mb-4">
            {sale && displaySalePrice !== null ? (
              <>
                <span className="text-2xl font-bold text-black-600">
                  ${displaySalePrice.toLocaleString()}
                </span>
                {displayOriginalPrice && (
                  <span className="ml-3 line-through text-gray-400">
                    ${displayOriginalPrice.toLocaleString()}
                  </span>
                )}
              </>
            ) : (
              <span className="text-2xl font-bold">
                ${displayPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-2">
            Inventory: <strong>{inventory ?? "In Stock"}</strong>
          </p>

          {/* Size Selection */}
          {sizes?.length > 0 && (
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Quantity</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((q) =>
                    inventory ? Math.min(inventory, q + 1) : q + 1
                  )
                }
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition w-full"
          >
            Add to Cart
          </button>

          <button
            className="w-full mt-2 border px-6 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => alert("Added to wishlist!")}
          >
            ❤️ Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
