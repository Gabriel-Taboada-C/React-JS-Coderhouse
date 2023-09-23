import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => (
  <Card key={item.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.categoryId}</Card.Text>
      <Link to={`/item/${item.id}`}>
        <Button variant="primary">Ver Detalles</Button>
      </Link>
    </Card.Body>
  </Card>
);
