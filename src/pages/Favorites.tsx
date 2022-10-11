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
    <div className="d-flex flex-column mt-4 ">
      <Alert className="d-flex align-self-center">
        Create an account to save to favorites
      </Alert>
      <Register />
    </div>
  );
};
