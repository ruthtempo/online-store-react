import { useEffect, useState } from "react";
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
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductCategories = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
    };
    fetchProductCategories();
  }, []);
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
              {categories.map((cat) => (
                <Nav.Link as={Link} to={`category/${encodeURIComponent(cat)}`}>
                  {cat.toUpperCase()}
                </Nav.Link>
              ))}
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
