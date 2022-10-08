import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const Categories = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col>
          <Card className="h-100">
            <div className="p-3">
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
            </Card.Body>
            <Card.Footer className="d-flex flex-column align-items-center">
              {product.price}$
              <ButtonGroup className="mt-2">
                <Button>-</Button>
                <Button variant="light" disabled>
                  1
                </Button>
                <Button>+</Button>
              </ButtonGroup>
              <Button className="mt-4">Add to Cart</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
