import { useState } from "react";

const stock = 4;

export const ItemCount = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    if (stock > value) {
      setValue((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <>
      <span onClick={handleDecrease}>-</span>
      {value}
      <span onClick={handleIncrease}>+</span>
      <button>Agregar al carrito</button>
    </>
  );
};
