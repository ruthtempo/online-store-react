import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";
import { LoginForm } from "./LoginForm";

export const PopoverUser = () => {
  const { user, setUser } = useUser();

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return !user ? (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Header as="h3">You are not logged in</Popover.Header>
          <Popover.Body>
            <LoginForm />
          </Popover.Body>
        </Popover>
      }
    >
      <PersonFill size={25} className="me-3" role={"button"} />
    </OverlayTrigger>
  ) : (
    <OverlayTrigger
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
      <PersonFill size={25} className="me-3" role={"button"} />
    </OverlayTrigger>
  );
};
