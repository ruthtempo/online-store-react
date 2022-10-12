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
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "../context/UserContext";
import { PopoverCart } from "./PopoverCart";
import { PopoverUser } from "./PopoverUser";

export const Navigation = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { favorites } = useFavorites();
  const { user } = useUser();

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
            <Nav className="justify-content-end pe-3">
              {categories.map((cat) => (
                <Nav.Link as={Link} to={`category/${encodeURIComponent(cat)}`}>
                  {cat.toUpperCase()}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center mb-2 me-3">
              <PopoverUser />
              <PopoverCart />
              <Nav.Link as={Link} to="favorites">
                <HeartFill size={20} fill={"#4d88ff"} className="me-1" />
                {user ? favorites.length : <></>}
              </Nav.Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
