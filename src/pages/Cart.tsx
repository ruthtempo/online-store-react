import { Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Row>
      <Col md={3}>
        {cart.map((cartElem) => (
          <div>
            <ProductCard product={cartElem.product} />
            <Button
              className="mt-3"
              onClick={() => removeFromCart(cartElem.product)}
            >
              Remove from Cart
            </Button>
          </div>
        ))}
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>data form</Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>My Basket</Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
