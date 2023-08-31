import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/items.json";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => {
      if (!id) {
        setItems(data);
      } else {
        const itemsFiltered = data.filter((item) => item.category === id);
        setItems(itemsFiltered);
      }
    });
  }, []);

  if (!items) return <div>Cargando productos...</div>;

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          height: "180px",
        }}
      >
        <ItemList items={items} />
      </div>
    </Container>
  );
};
