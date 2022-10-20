import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { isLoggedIn, useUser } from "../context/UserContext";
import { PopoverCart } from "./PopoverCart";
import { PopoverUser } from "./PopoverUser";
import logo from "../img/logo.png";
import "animate.css";
import { useState } from "react";

export const Navigation = (p: { categories: string[] }) => {
  const { user } = useUser();
  const [hoveredElem, setHoveredElem] = useState(-1);

  return (
    <Navbar expand="lg" bg="light" variant="light" collapseOnSelect>
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} width="50" height="50" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Oh-My-Shop</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end">
            <Nav className="pe-3 ">
              {p.categories.map((cat, index) => (
                <Nav.Link
                  key={index}
                  onMouseOver={() => setHoveredElem(index)}
                  onMouseOut={() => setHoveredElem(-1)}
                  className={
                    hoveredElem === index
                      ? "animate__animated animate__pulse"
                      : ""
                  }
                  as={Link}
                  href="#"
                  to={`category/${encodeURIComponent(cat)}`}
                >
                  {cat.toUpperCase()}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center mb-2 me-3">
              <PopoverUser />
              <PopoverCart />
              <Nav.Link as={Link} href="#" to="favorites">
                <HeartFill size={20} fill={"#4d88ff"} className="mx-1" />
                {isLoggedIn(user) && user.favorites.length}
              </Nav.Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
