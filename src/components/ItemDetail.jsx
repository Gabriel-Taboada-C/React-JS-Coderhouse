import { ItemCount } from "./ItemCount";
import Container from "react-bootstrap/Container";

export const ItemDetail = (item) => {
  return (
    <>
      <Container className="mt-4">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <h1>{item.name}</h1>
          <img src={item.img} />
          <div>{item.stock}</div>
        </div>
        <ItemCount />
      </Container>
    </>
  );
};

/* No logro que funcione este componente llamandolo desde ItemDetailContainer */
