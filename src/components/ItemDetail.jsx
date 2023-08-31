import { ItemCount } from "./ItemCount";
import Container from "react-bootstrap/Container";

export const ItemDetail = ({ item }) => {
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
            alt=""
            style={{ width: "300px", height: "auto" }}
          />
          <div>{item.description}</div>
          <div>Stock : {item.stock}</div>
          <div>Precio por unidad : ${item.price}</div>
          <div>
            <ItemCount />
          </div>
        </div>
      </Container>
    </>
  );
};

/* No logro que funcione este componente llamandolo desde ItemDetailContainer */
