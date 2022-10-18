import { Alert, Card, Col, Row } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { isLoggedIn, useUser } from "../context/UserContext";
import { Register } from "./Register";
import buttons from "../img/smoke.jpg";

export const Favorites = () => {
  const { user } = useUser();

  return isLoggedIn(user) ? (
    <div>
      <Card
        className="mb-2 text-white mt-2"
        style={{
          backgroundImage: `url(${buttons})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h5 className="text-center display-6 mb-4 mt-4 text-white">
          My Favorites
        </h5>
      </Card>
      {user.favorites.length > 0 ? (
        <Row xs={1} md={2}>
          {user.favorites.map((favProduct) => (
            <Col className="mb-3" md={4} lg={3} xxl={3}>
              <ProductCard product={favProduct} />
            </Col>
          ))}
        </Row>
      ) : (
        <h4 className="mt-4 text-center">You have no favorites yet.</h4>
      )}
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
