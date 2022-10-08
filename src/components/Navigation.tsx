import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PopoverCart } from "./PopoverCart";
import { PopoverUser } from "./PopoverUser";

export const Navigation = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="mb-4">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          Brand Name
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>My Store</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Men's clothing</Nav.Link>
              <Nav.Link href="#action2">Jewelery</Nav.Link>
              <Nav.Link href="#action2">Electronics</Nav.Link>
              <Nav.Link href="#action2">Women's clothing</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center mb-2">
              <PopoverUser />
              <PopoverCart />
              <Nav.Link as={Link} to="favorites">
                <HeartFill size={20} className="me-3" />
              </Nav.Link>
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
