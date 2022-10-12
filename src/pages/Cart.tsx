import { Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Row>
      <Col md={3}>
        {cart.length < 1 ? (
          <Card>Your cart is empty </Card>
        ) : (
          cart.map((cartProduct) => (
            <div>
              <Card className="h-100 shadow-sm text-center ">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cartProduct.title}</Card.Title>
                  <div
                    style={{
                      backgroundImage: `url(${cartProduct.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      height: "10em",
                    }}
                  ></div>
                  <p>Amount:</p>
                  <Button
                    className="mt-3"
                    onClick={() => removeFromCart(cartProduct)}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>data form</Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Title>My Basket</Card.Title>
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
