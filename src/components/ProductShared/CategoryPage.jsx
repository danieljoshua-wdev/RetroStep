import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CategoryTitle from "./CategoryTitle";
import Toolbar from "./Toolbar";
import Filters from "./Filters";
import ViewToggle from "./ViewToggle";
import ProductGrid from "./ProductGrid";

function CategoryPage({ title, breadcrumbPath, products }) {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="px-6 py-10 max-w-[1400px] mx-auto">
      <Breadcrumbs path={breadcrumbPath} />
      <div className="flex justify-between items-center">
        <CategoryTitle title={title} />
        <Toolbar view={view} setView={setView} sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
        <Filters />
        <div className="md:col-span-3">
          {view === "grid" ? (
            <ProductGrid products={paginatedProducts} />
          ) : (
            <ProductList products={paginatedProducts} />
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
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

export default CategoryPage;
