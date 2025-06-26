import React from "react";
import CategoryPage from "./CategoryPage";
import { newArrivals } from "../data/newArrivals";

function NewArrivals() {
  return (
    <CategoryPage
      title="New Arrivals"
      breadcrumbPath="Home / Shop / New Arrivals"
      products={newArrivals}
    />
  );
}

export default NewArrivals;
