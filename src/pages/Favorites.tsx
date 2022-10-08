import { Alert } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { Categories } from "./Category";
import { Register } from "./Register";

export const Favorites = () => {
  const { user } = useUser();

  return user ? (
    <Categories />
  ) : (
    <div className="d-flex flex-column mt-4 ">
      <Alert className="d-flex align-self-center">
        Create an account to save to favorites
      </Alert>
      <Register />
    </div>
  );
};
