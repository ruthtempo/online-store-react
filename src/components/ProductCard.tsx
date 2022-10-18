import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { Product } from "../pages/Category";
import { ButtonQuantity } from "./ButtonQuantity";
import "animate.css";
import { isLoggedIn, useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const ProductCard = (p: { product: Product }) => {
  const { user, toggleFavorites, addToCart } = useUser();

  const [units, setUnits] = useState(1);
  const [isClicked, setIsClicked] = useState(
    isLoggedIn(user) &&
      user.favorites.some((favProd) => favProd.id === p.product.id)
  );
  const navigate = useNavigate();

  function handleAddToFavs(event: React.MouseEvent<SVGElement>) {
    if (isLoggedIn(user)) {
      toggleFavorites(p.product);
      setIsClicked((current) => !current);
    } else {
      navigate("/register");
    }
  }

  return (
    <Card className="h-100 shadow-sm text-center ">
      <HeartFill
        cursor="pointer"
        size={30}
        fill={
          isLoggedIn(user) &&
          user.favorites.some((favProd) => favProd.id === p.product.id)
            ? "#4d88ff"
            : "#ccddff"
        }
        className={`mt-3 me-3 d-flex align-self-end ${
          isClicked ? "animate__animated animate__heartBeat" : ""
        }`}
        onClick={handleAddToFavs}
      />
      <Card.Body className="d-flex flex-column">
        <div
          style={{
            backgroundImage: `url(${p.product.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "10em",
          }}
        ></div>
        <Card.Title className="flex-grow-1 mt-3">{p.product.title}</Card.Title>
        <Card.Subtitle className="mt-2">{p.product.price} $</Card.Subtitle>
        <Card.Text className="d-flex flex-column align-items-center mt-3 flex-grow-0">
          <ButtonQuantity units={units} setUnits={setUnits} />
          <Button className="mt-3" onClick={() => addToCart(p.product, units)}>
            Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
