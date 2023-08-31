import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/items.json";
import { ItemDetail } from "./ItemDetail";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const itemById = data.find((item) => item.id === id);
        resolve(itemById);
      }, 2000);
    });

    promise.then((data) => setItem(data));
  }, []);

  if (!item) return <div>Cargando...</div>;

  return (
    <Container className="mt-4">
      <h1>Detalles del Producto</h1>
      <ItemDetail item={item} />
    </Container>
  );
};

/* No logro que funcione ItemDetail, si lo llamo no me trae ningun valor */
