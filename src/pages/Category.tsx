import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";

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
    ? categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)
    : categoryName;
  const [products, setProducts] = useState<Product[]>([]);

  const fetchproducts = () => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchproducts();
  }, [categoryName]);

  return (
    <div>
      <h5 className="text-center display-5 mb-4">{categoryNameUpperCased}</h5>
      <Row xs={1} md={3}>
        {products.map((product) => (
          <Col className="mb-3" md={6} lg={4} xxl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
