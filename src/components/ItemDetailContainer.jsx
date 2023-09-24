import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "catalogo", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Container className="mt-4">
        <h1>Detalles del Producto</h1>
        <ItemDetail item={item} />
      </Container>
    </>
  );
};
