import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const Categories = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [units, setUnits] = useState(1);

  const { categoryName } = useParams();

  const increaseUnits = () => {
    setUnits(units + 1);
  };
  const decreaseUnits = () => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };

  const fetchproducts = () => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchproducts();
  }, [categoryName]);

  return (
    <Row xs={1} md={2}>
      {products.map((product) => (
        <Col className="mb-3" md={6} lg={4} xxl={3}>
          <Card className="h-100 shadow-sm text-center ">
            <HeartFill
              size={30}
              fill={"pink"}
              className="m-3 d-flex align-self-end"
            />
            <Card.Body className="d-flex flex-column">
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: 200,
                }}
              ></div>
              <Card.Title className="flex-grow-1 mt-3">
                {product.title}
              </Card.Title>
              <Card.Subtitle className="mt-2">{product.price}$</Card.Subtitle>
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
        </Col>
      ))}
    </Row>
  );
};
