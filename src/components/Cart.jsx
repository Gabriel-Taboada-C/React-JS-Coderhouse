import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Container, Table, Form } from "react-bootstrap";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  const handelChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items,
      date: serverTimestamp(),
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert("Su orden: " + id + "ha sido realizada con éxito!!!");
      }
    });
  };

  return (
    <>
      <Container>
        <h1>Carrito de Compras</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>
                    Quitar Producto
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>{total()}</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
        <h2>Ingresar datos del usuario</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handelChange}
              value={formValues.name}
              type="text"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handelChange}
              value={formValues.email}
              type="email"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tel</Form.Label>
            <Form.Control
              onChange={handelChange}
              value={formValues.phone}
              type="text"
              name="phone"
              required
            />
          </Form.Group>
        </Form>
        <button onClick={sendOrder}>Terminar mi compra</button>
      </Container>
    </>
  );
};
