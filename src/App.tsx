import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Cart } from "./pages/Cart";
import { Categories } from "./pages/Category";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { Register } from "./pages/Register";

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
        <Route path="success" element={<PaymentSuccess />} />
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>

      <footer className="text-center py-5">
        <p className="h5 mt-2">Oh-My-Shop</p>
        <p>Copyright 2022</p>
      </footer>
    </Container>
  );
}

export default App;
