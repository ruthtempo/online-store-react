import { Button, Card, Col, Row } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import success from "../img/shopped.png";

export const PaymentSuccess = () => {
  return (
    <Row>
      <Col lg={{ span: 6, offset: 3 }}>
        <Card className="text-center mt-3 shadow-sm">
          <Card.Body className="d-flex flex-column align-items-center">
            <CheckCircleFill size={50} className="mb-4" fill="#4d88ff" />
            <Card.Title>Payment Successful!</Card.Title>
            <Card.Text> Thank you for shopping with us</Card.Text>
            <img src={success} alt="shopper-img" width="400" />
            <Link to="/">
              <Button className="mt-4">Continue Shopping</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
