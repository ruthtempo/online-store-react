import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "../context/UserContext";
import { PopoverCart } from "./PopoverCart";
import { PopoverUser } from "./PopoverUser";
import logo from "../img/logo.png";

export const Navigation = (p: { categories: string[] }) => {
  const { favorites } = useFavorites();
  const { user } = useUser();

  return (
    <Navbar expand="lg" bg="light" variant="light" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} width="100" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>BrandName</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="pe-3">
              {p.categories.map((cat) => (
                <Nav.Link
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
                <HeartFill size={20} fill={"#4d88ff"} className="me-1" />
                {user && favorites.length}
              </Nav.Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
