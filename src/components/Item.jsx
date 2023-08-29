import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ items }) => {
  <Card key={items.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={items.img} alt="" />
    <Card.Body>
      <Card.Title>{items.name}</Card.Title>
      <Card.Text>{items.description}</Card.Text>
      <Link to={`/item${items.id}`}>
        <Button variant="primary">Add Cart</Button>
      </Link>
    </Card.Body>
  </Card>;
};
