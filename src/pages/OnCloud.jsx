// src/pages/OnCloud.jsx
import React, { useState } from "react";
import Breadcrumbs from "../components/ProductShared/Breadcrumbs";
import CategoryTitle from "../components/ProductShared/CategoryTitle";
import Toolbar from "../components/ProductShared/Toolbar";
import Filters from "../components/ProductShared/Filters";
import ProductGrid from "../components/ProductShared/ProductGrid";
import ViewToggle from "../components/ProductShared/ViewToggle";
import onCloud from "../data/onCloud";

function OnCloud() { 

   const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState("all");
  const [availability, setAvailability] = useState("all");

  const productsPerPage = 6;

  const sortedProducts = [...onCloud].sort((a, b) => {
    const priceA = a.salePrice ?? a.price;
    const priceB = b.salePrice ?? b.price;

    switch (sortOption) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const filteredByPrice = sortedProducts.filter((product) => {
    const finalPrice = product.salePrice ?? product.price;
    if (priceFilter === "under-1000") return finalPrice <= 1000;
    if (priceFilter === "1001-1200") return finalPrice > 1000 && finalPrice <= 1200;
    if (priceFilter === "above-1200") return finalPrice > 1200;
    return true;
  });

  const filteredProducts = filteredByPrice.filter((product) => {
    if (availability === "in-stock") return product.inventory > 0;
    if (availability === "out-of-stock") return product.inventory <= 0;
    return true;
  });

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="px-6 py-10 max-w-[1400px] mx-auto">
      <Breadcrumbs path="Home / Shop / On Cloud" />
      <CategoryTitle title="On Cloud" />
      <Toolbar sortOption={sortOption} setSortOption={setSortOption} />

      <div className="flex justify-between items-center mb-6">
        <ViewToggle currentView={viewMode} onChange={setViewMode} />
        <span className="text-sm text-gray-500">{filteredProducts.length} PRODUCTS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Availability</label>
            <select
              value={availability}
              onChange={(e) => {
                setAvailability(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border p-2 rounded"
            >
              <option value="all">All</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <select
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border p-2 rounded"
            >
              <option value="all">All</option>
              <option value="under-1000">$1,000 and below</option>
              <option value="1001-1200">$1,001 – $1,200</option>
              <option value="above-1200">$1,201 and above</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-3">
          <ProductGrid products={currentProducts} viewMode={viewMode} />
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border text-sm ${
                  currentPage === i + 1 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OnCloud;
