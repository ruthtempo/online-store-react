import { Alert } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { Register } from "./Register";

export const Favorites = () => {
  const { user } = useUser();

  return user ? (
    <div>favorites</div>
  ) : (
    <div className="d-flex flex-column mt-4">
      <Alert>Create an account to save to favorites </Alert>
      <Register />
    </div>
  );
};
