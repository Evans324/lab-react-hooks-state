import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems((items) =>
      items.some((item) => item.id === product.id)
        ? items
        : [...items, product]
    );
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <h1>Grocery Store</h1>
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((prev) => !prev)}
      />
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;