import { Card, FloatingLabel, Form } from "react-bootstrap";

export const Register = () => {
  return (
    <Card style={{ width: "25rem" }} className="d-flex justify-content-center">
      <Card.Body>
        <Card.Title>Register</Card.Title>
        <FloatingLabel label="Full Name" className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </FloatingLabel>
        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Card.Body>
    </Card>
  );
};
