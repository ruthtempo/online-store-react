import { useState } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { HeartFill, Heart } from "react-bootstrap-icons";
import { useFavorites } from "../context/FavoritesContext";
import { Product } from "../pages/Category";

export const ProductCard = (p: { product: Product }) => {
  const { favorites, toggleFavorites } = useFavorites();
  const [units, setUnits] = useState(1);
  const increaseUnits = () => {
    setUnits(units + 1);
  };
  const decreaseUnits = () => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };

  return (
    <Card className="h-100 shadow-sm text-center ">
      <HeartFill
        cursor="pointer"
        size={30}
        fill={favorites.includes(p.product) ? "#4d88ff" : "#ccddff"}
        className="m-3 d-flex align-self-end"
        onClick={() => toggleFavorites(p.product)}
      />
      <Card.Body className="d-flex flex-column">
        <div
          style={{
            backgroundImage: `url(${p.product.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 200,
          }}
        ></div>
        <Card.Title className="flex-grow-1 mt-3">{p.product.title}</Card.Title>
        <Card.Subtitle className="mt-2">{p.product.price} $</Card.Subtitle>
        <Card.Text className="d-flex flex-column align-items-center mt-3 flex-grow-0">
          <ButtonGroup>
            <Button onClick={decreaseUnits}>-</Button>
            <Button variant="light" disabled>
              {units}
            </Button>
            <Button onClick={increaseUnits}>+</Button>
          </ButtonGroup>
          <Button className="mt-3">Add to Cart</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
