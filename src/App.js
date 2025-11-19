import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";
import Footer from "./components/footer"
function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const element = useRoutes(routes(cart, setCart));

  return (
    <>
      <div className="app-wrapper">
        <Navbar cart={cart} setCart={setCart} totalItems={totalItems} />
        <main className="main-content">{element}</main>

      </div>
      <Footer />
    </>
  );
}

export default App;

