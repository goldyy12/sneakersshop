import React, { useState } from "react";
import "../styles/amount.css";

const AmountBtn = ({ amount, setAmount }) => {
  const reduceAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };

  const increaseAmount = () => {
    if (amount === 99) return;
    setAmount(amount + 1);
  };

  return (
    <div className="amount-btn">
      <button className="btn minus" onClick={reduceAmount}>
        –
      </button>
      <span className="amount">{amount}</span>
      <button className="btn plus" onClick={increaseAmount}>
        +
      </button>
    </div>
  );
};

export default AmountBtn;
