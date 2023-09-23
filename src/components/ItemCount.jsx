import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    if (stock > value) {
      setValue((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <>
      <span onClick={handleDecrease}>-</span>
      {value}
      <span onClick={handleIncrease}>+</span>
      <button onClick={() => onAdd(value)}>Agregar al carrito</button>
    </>
  );
};
