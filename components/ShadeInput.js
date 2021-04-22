import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="emojis">🐼🐹🦁🌋🌈🐻</div>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
      />
      <div className="emojis">🌮🌱🌲🌷🌸🌼</div>
    </div>
  );
};

export default ShadeInput;
