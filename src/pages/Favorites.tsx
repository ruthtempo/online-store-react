import { Alert, Col, Row } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";
import { useUser } from "../context/UserContext";
import { Register } from "./Register";

export const Favorites = () => {
  const { user } = useUser();
  const { favorites } = useFavorites();

  return user ? (
    <div>
      <h5 className="text-center display-4">My Favorites</h5>
      <Row xs={1} md={2}>
        {favorites.map((favProduct) => (
          <Col className="mb-3" md={4} lg={3} xxl={3}>
            <ProductCard product={favProduct} />
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <Row className="mt-4 ">
      <Col>
        <Alert>Create an account to save to favorites</Alert>
        <Register />
      </Col>
    </Row>
  );
};
