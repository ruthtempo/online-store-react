import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

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

  const increaseUnits = () => {
    setUnits(units + 1);
  };
  const decreaseUnits = () => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };

  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <Row xs={1} md={2}>
      {products.map((product) => (
        <Col
          className="mb-3"
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xxl={{ span: 3, offset: 2 }}
        >
          <Card className="h-100 shadow-sm">
            <div className="m-3">
              <HeartFill size={25} fill={"pink"} />
            </div>
            <Card.Body>
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: 200,
                }}
              ></div>
              <Card.Title className="text-center mt-4">
                <h5>{product.title}</h5>
              </Card.Title>

              <Card.Text className="d-flex flex-column align-items-center">
                {product.price}$
                <ButtonGroup className="mt-2">
                  <Button onClick={decreaseUnits}>-</Button>
                  <Button variant="light" disabled>
                    {units}
                  </Button>
                  <Button onClick={increaseUnits}>+</Button>
                </ButtonGroup>
                <Button className="mt-4">Add to Cart</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
