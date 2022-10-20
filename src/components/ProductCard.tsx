import "animate.css";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BagCheckFill, HeartFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, useUser } from "../context/UserContext";
import { Product } from "../pages/Category";
import { formatCurrency } from "../utils/currency";
import { ButtonQuantity } from "./ButtonQuantity";

export const ProductCard = (p: { product: Product }) => {
  const { user, toggleFavorites, addToCart } = useUser();
  const [isAdd2CartClicked, setIsAdd2CartClicked] = useState(false);
  const buttonText = "Add to Cart";

  const [units, setUnits] = useState(1);
  const [isFavClicked, setIsFavClicked] = useState(
    isLoggedIn(user) &&
      user.favorites.some((favProd) => favProd.id === p.product.id)
  );
  const navigate = useNavigate();

  function handleAddToFavs(event: React.MouseEvent<SVGElement>) {
    if (isLoggedIn(user)) {
      toggleFavorites(p.product);
      setIsFavClicked((current) => !current);
    } else {
      navigate("/register");
    }
  }

  function handleAddToCart() {
    addToCart(p.product, units);
    setIsAdd2CartClicked(true);
    setTimeout(() => {
      setIsAdd2CartClicked(false);
    }, 1000);
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
          isFavClicked ? "animate__animated animate__heartBeat" : ""
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
        <Card.Subtitle className="mt-2">
          {formatCurrency(p.product.price)}
        </Card.Subtitle>
        <Card.Text className="d-flex flex-column align-items-center mt-3 flex-grow-0">
          <ButtonQuantity units={units} setUnits={setUnits} />
          <Button
            className="mt-3 py-2 w-50 d-flex align-items-center justify-content-center"
            variant={isAdd2CartClicked ? "success" : "primary"}
            onClick={handleAddToCart}
          >
            {isAdd2CartClicked ? (
              <BagCheckFill
                size={24}
                className="animate__animated animate__wobble"
              />
            ) : (
              buttonText
            )}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
