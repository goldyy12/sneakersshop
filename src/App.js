import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";

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
      <Navbar cart={cart} setCart={setCart} totalItems={totalItems} />
      {element}
    </>
  );
}

export default App;
