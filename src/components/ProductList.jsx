import React, { useState } from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Bread", category: "Bakery" },
];

function ProductList({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProducts = sampleProducts.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;