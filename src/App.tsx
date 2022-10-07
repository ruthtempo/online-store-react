import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  return (
    <Container className="App d-flex flex-column vw-100 vh-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
