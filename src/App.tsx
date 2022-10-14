import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Cart } from "./pages/Cart";
import { Categories } from "./pages/Category";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import buttons from "./img/smoke.jpg";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductCategories = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
    };
    fetchProductCategories();
  }, []);

  return (
    <Container className="vh-100">
      <Navigation categories={categories} />

      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="register" element={<Register />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category/:categoryName" element={<Categories />} />
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>

      <Row>
        <Col>
          <Card className="bg-light text-center">
            <h3 className="mt-2">Oh-My-Shop</h3>
            <p>Copyright 2022</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
