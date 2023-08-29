export const ItemDetail = (items) => {
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <h1>{items.name}</h1>
    <img src={items.img} alt="" />
    <div>{items.stock}</div>
  </div>;
};
