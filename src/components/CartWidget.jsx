import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="Cart" />
      <span>0</span>
    </>
  );
};
