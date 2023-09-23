import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import Container from "react-bootstrap/Container";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (value) => addItem(item, value);

  return (
    <>
      <Container className="mt-4">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h2>{item.name}</h2>
          <img
            src={item.img}
            style={{ width: "300px", height: "auto" }}
            alt=""
          />
          <div>{item.description}</div>
          <div>Stock : {item.stock}</div>
          <div>Precio por unidad : ${item.price}</div>
          <div>
            <ItemCount stock={item.stock} onAdd={onAdd} />
          </div>
        </div>
      </Container>
    </>
  );
};
