import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./context/UserContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
