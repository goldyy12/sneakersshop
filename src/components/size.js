import React, { useState } from "react";
import "../styles/size.css";

const SizePicker = () => {
  const [activeSize, setActiveSize] = useState(42);
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];

  return (
    <div className="size-picker">
      <h3 className="title">Choose Size</h3>
      <div className="sizes">
        {sizes.map((size) => (
          <div
            key={size}
            className={`size ${activeSize === size ? "active" : ""}`}
            onClick={() => setActiveSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
