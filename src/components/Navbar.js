import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import icon from "../assets/logo.png";
import { useState } from "react";

function Navbar({ cart = [], setCart, totalItems = 0 }) {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <nav className="navbar">
      <div className="containernav">
        <div className="logo-container">
          <img src={icon} alt="Sneakers Shop Logo" className="logo-icon" />

          <Link to="/" className="logo-text">
            Sneakers Shop
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/ShopPage"
              className={`nav-link ${
                location.pathname === "/ShopPage" ? "active" : ""
              }`}
            >
              Shop
            </Link>
          </li>

          <li>
            <div className="cart-dropdown">
              <button
                className="cart-btn"
                onClick={() => setShowCart(!showCart)}
              >
                🛒 {totalItems}
              </button>

              {showCart && (
                <div className="mini-cart">
                  {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    cart.map((item, index) => (
                      <div className="mini-cart-item" key={index}>
                        <img src={item.image} alt={item.name} width="40" />
                        <div className="mini-cart-info">
                          <p>{item.name}</p>
                          <p>x{item.quantity}</p>
                          <p>${item.price * item.quantity}</p>
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => handleRemove(index)}
                        >
                          ❌
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
