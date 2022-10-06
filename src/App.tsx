import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App d-flex" style={{ width: "100vh" }}>
      <Navigation />
      <Register />
    </div>
  );
}

export default App;
