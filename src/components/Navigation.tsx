import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { PopoverCart } from "./PopoverCart";
import { PopoverUser } from "./PopoverUser";

export const Navigation = () => {
  return (
    <Navbar expand="md" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              My Store
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Men's clothing</Nav.Link>
              <Nav.Link href="#action2">Jewelery</Nav.Link>
              <Nav.Link href="#action2">Electronics</Nav.Link>
              <Nav.Link href="#action2">Women's clothing</Nav.Link>
            </Nav>
            <PopoverUser />
            <PopoverCart />
            <HeartFill size={30} className="me-3" />
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
