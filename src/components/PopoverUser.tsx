import { OverlayTrigger, Popover } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { useUser } from "../context/UserContext";
import { LoginForm } from "./LoginForm";

export const PopoverUser = () => {
  const { user } = useUser();
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
      trigger="hover"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body>You are logged in as {user.name}</Popover.Body>
        </Popover>
      }
    >
      <PersonFill size={25} className="me-3" role={"button"} />
    </OverlayTrigger>
  );
};
