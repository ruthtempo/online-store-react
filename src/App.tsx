import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Navigation />
      <Container fluid className="vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<p>Page does not exist</p>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
