import { useLocation } from "react-router-dom";
import { shoes } from "../Data";
import "../styles/CartPage.css";
import ColorPicker from "./colorpicker";
import SizePicker from "./size";
import AmountBtn from "./amount";
import { useState } from "react";

function CartPage({ cart, setCart }) {
  const location = useLocation();
  const { shoeId } = location.state || {};
  const shoe = shoes[shoeId];

  const [amount, setAmount] = useState(1);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoeId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoeId
            ? { ...item, quantity: item.quantity + amount }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: shoeId,
            name: shoe.name,
            price: shoe.price,
            quantity: amount,
            image: shoe.image,
            tag: shoe.tag,
          },
        ];
      }
    });
  };

  return (
    <div className="cart-page">
      <div className="shoe-card1">
        <img src={shoe.image} alt={shoe.name} className="shoe-image" />

        <div className="shoe-info">
          <h2 className="shoe-name">{shoe.name}</h2>
          <p className="shoe-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            veritatis, iure totam delectus modi minus?
          </p>
          <p className="shoe-price">${shoe.price}</p>
          <p className="shoe-tag">{shoe.tag}</p>

          <ColorPicker />
          <SizePicker />
          <AmountBtn amount={amount} setAmount={setAmount} />

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
