import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
      ? query(collection(db, "catalogo"), where("categoryId", "==", id))
      : collection(db, "catalogo");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) setItems([]);
        else {
          setItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando productos...</div>;

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
