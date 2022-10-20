import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { User, isLoggedIn, useUser } from "../context/UserContext";

import { LoginForm } from "./LoginForm";

export const PopoverUser = () => {
  const { user, setUser } = useUser();

  const saveCurrentUserFavsInUsers = () => {
    const parsedUsersArr: User[] = JSON.parse(
      localStorage.getItem("users") ?? "[]"
    );

    const updatedUsersArr = parsedUsersArr.map((userObj) => {
      if (userObj.id === user.id) {
        return { ...userObj, favorites: user.favorites };
      } else {
        return userObj;
      }
    });
    localStorage.setItem("users", JSON.stringify(updatedUsersArr));
  };

  const logOut = () => {
    saveCurrentUserFavsInUsers();
    localStorage.removeItem("currentUser");
    setUser({ cart: [] });
  };

  return !isLoggedIn(user) ? (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Header as="h3" className="text-center">
            You are not logged in
          </Popover.Header>
          <Popover.Body>
            <LoginForm />
            <p className="mt-2">
              Don't have an account?
              <Link className="text-decoration-none ms-2" to="/register">
                Register
              </Link>
            </p>
          </Popover.Body>
        </Popover>
      }
    >
      <PersonFill size={25} className="me-3" role="button" />
    </OverlayTrigger>
  ) : (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body className="text-center">
            <h6>You are logged in as {user.name}</h6>
            <Button size="sm" onClick={logOut}>
              Log out
            </Button>
          </Popover.Body>
        </Popover>
      }
    >
      <PersonFill size={25} className="me-3" role="button" />
    </OverlayTrigger>
  );
};
