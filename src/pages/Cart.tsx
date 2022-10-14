import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { BagHeart, Trash3Fill } from "react-bootstrap-icons";
import { useCart } from "../context/CartContext";
import buttons from "../img/smoke.jpg";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <h3
        className="display-4 text-center my-3 text-white py-3 "
        style={{
          backgroundImage: `url(${buttons})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        My shopping Bag
      </h3>
      <Row className="d-flex justify-content-center mb-3">
        <Col sm={5} className="mb-2">
          {cart.length === 0 ? (
            <Card className="h-100">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="display-6">Your bag is empty</Card.Title>
                <BagHeart size={60} />
              </Card.Body>
            </Card>
          ) : (
            cart.map((cartProduct) => (
              <Card className=" shadow-sm text-center mb-2">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cartProduct.title}</Card.Title>
                  <Row>
                    <Col className="mt-2">
                      <div
                        style={{
                          backgroundImage: `url(${cartProduct.image})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "10em",
                        }}
                      ></div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-end">
                      <p>Quantity:{cartProduct.quantity}</p>
                      <p>
                        Subtotal:
                        <h4>
                          {parseFloat(cartProduct.price) * cartProduct.quantity}
                          $
                        </h4>
                      </p>
                      <Button
                        className="mt-3 pb-2"
                        onClick={() => removeFromCart(cartProduct)}
                      >
                        <Trash3Fill size={20} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
        <Col>
          <Card className="d-flex align-items-center">
            <Card.Body>
              <Card.Title className="text-center">
                Payment & Shipment
              </Card.Title>
              <Form>
                <FloatingLabel label="Full Name" className="mb-3">
                  <Form.Control required />
                </FloatingLabel>
                <FloatingLabel label="Email" className="mb-3">
                  <Form.Control required />
                </FloatingLabel>
                <FloatingLabel label="Address" className="mb-3">
                  <Form.Control required />
                </FloatingLabel>
                <FloatingLabel label="Country" className="mb-3">
                  <Form.Control required />
                </FloatingLabel>
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Credit Card"
                    name="group1"
                    type="radio"
                    id="payment"
                  />
                  <Form.Check
                    inline
                    label="Visa Card"
                    name="group1"
                    type="radio"
                    id="payment"
                  />
                  <Form.Check
                    inline
                    label="Paypal"
                    name="group1"
                    type="radio"
                    id="payment"
                  />
                </div>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment (Optional)"
                  style={{ height: 200 }}
                />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
