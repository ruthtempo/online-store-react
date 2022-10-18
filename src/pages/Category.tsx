import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import buttons from "../img/smoke.jpg";

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const Categories = () => {
  const { categoryName } = useParams();
  const categoryNameUpperCased = categoryName
    ? categoryName.toUpperCase()
    : categoryName;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchproducts = () => {
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    fetchproducts();
  }, [categoryName]);

  return (
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
          {categoryNameUpperCased}
        </h5>
      </Card>
      <Row xs={1} md={3}>
        {products.map((product) => (
          <Col key={product.id} className="mb-3" md={6} lg={4} xxl={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
