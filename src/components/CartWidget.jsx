import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="Cart" className="cart" />
      <span>0</span>
    </>
  );
};
