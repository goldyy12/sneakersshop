import Navbar from "./Navbar";
import { shoes } from "../Data";
import ShoeCard from "./ShoeCard";
import "../styles/ShopPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ShopPage() {
  const navigate = useNavigate();
  const [clicked, setIsClicked] = useState(null);

  function HandleClick(shoeId) {
    setIsClicked(shoeId);
    navigate("/CartPage", { state: { shoeId } });
  }

  return (
    <div className="shop-page" style={{ minHeight: "100vh" }}>
      <h1>Shop Page Content</h1>
      <div className="shopcontainer">
        {shoes.map((shoe) => (
          <ShoeCard
            className="shopconcard"
            key={shoe.id}
            name={shoe.name}
            price={shoe.price}
            image={shoe.image}
            onClick={() => HandleClick(shoe.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
