import { useUser } from "../context/UserContext";
import { Register } from "./Register";

export const Favorites = () => {
  const { user } = useUser();

  return user ? (
    <div>favorites</div>
  ) : (
    <div className="d-flex flex-column justify-content-around mt-4">
      <p>Please create an account to save to favorites </p>
      <Register />
    </div>
  );
};
