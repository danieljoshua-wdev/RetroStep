
import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products, viewMode }) {
  const gridCols =
    viewMode === "grid"
      ? "grid-cols-2 md:grid-cols-4"
      : viewMode === "smallGrid"
      ? "grid-cols-3"
      : "grid-cols-1";

  return (
    <div className={`grid ${gridCols} gap-6 mt-6`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
}


export default ProductGrid;
