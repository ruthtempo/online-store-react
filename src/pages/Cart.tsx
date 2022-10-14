import { useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Bag, BagHeart, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import buttons from "../img/smoke.jpg";

export const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.price) * product.quantity,
    0
  );

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setCart([]);
      navigate("/success");
    }
    setValidated(true);
  };
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
        My Shopping Bag
      </h3>
      <Row className="d-flex justify-content-center">
        <Col sm={5} md={5} lg={4} className="mb-2">
          {cart.length === 0 ? (
            <Card className="h-100 text-center">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="display-6 mb-3">
                  Your bag is empty
                </Card.Title>
                <Bag size={60} />
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
        <Col lg={4} md={7} className="mb-2">
          <Card>
            <Card.Header>
              <Card.Title className="text-center">
                Payment & Shipping
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form
                className="needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
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
                    required
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
                  style={{ height: 100 }}
                />
                <div className="text-center mt-2">
                  Total: <p className="h3">{total} $</p>
                  <Button
                    className={`mb-2 ${cart.length < 1 ? "disabled" : ""}`}
                    type="submit"
                  >
                    Confirm Purchase
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
