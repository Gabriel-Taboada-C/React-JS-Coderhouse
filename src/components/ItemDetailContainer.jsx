import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/items.json";
import { ItemDetail } from "./ItemDetail";
import { ItemList } from "./ItemList";

export const ItemDetailContainer = (props) => {
  const [items, setItems] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const itemById = data.find((item) => item.id === id);
        resolve(itemById);
      }, 2000);
    });

    promise.then((data) => setItems(data));
  }, []);

  if (!items) return <div>Cargando...</div>;

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <ItemDetail items={items} />
    </Container>
  );
};
