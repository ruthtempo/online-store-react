import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Product } from "../pages/Category";
import { ButtonQuantity } from "./ButtonQuantity";

export const ProductCard = (p: { product: Product }) => {
  const { favorites, toggleFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [units, setUnits] = useState(1);

  return (
    <Card className="h-100 shadow-sm text-center ">
      <HeartFill
        cursor="pointer"
        size={30}
        fill={favorites.includes(p.product) ? "#4d88ff" : "#ccddff"}
        className="mt-3 me-3 d-flex align-self-end"
        onClick={() => toggleFavorites(p.product)}
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
