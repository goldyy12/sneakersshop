import React from "react";
import "../styles/ShoeCard.css";
import { on } from "events";

const ShoeCard = ({ name, price, image, className = "", onClick }) => {
  return (
    <div className={`shoe-card ${className}`} onClick={onClick}>
      <div className="shoe-image-wrapper">
        <img src={image} alt={name} className="shoe-image" />
      </div>{" "}
      <div className="shoe-info">
        <h3 className="shoe-name">{name}</h3>
        <span className="shoe-price">${price}</span>
      </div>
    </div>
  );
};

export default ShoeCard;
