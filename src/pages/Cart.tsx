import { Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Row>
      {cart.map((cartElem) => (
        <Col>
          <ProductCard product={cartElem.product} />
          <Button
            className="mt-3"
            onClick={() => removeFromCart(cartElem.product)}
          >
            Remove from Cart
          </Button>
        </Col>
      ))}

      <Col>data form</Col>
      <Col>my basket</Col>
    </Row>
  );
};
