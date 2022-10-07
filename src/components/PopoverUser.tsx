import { OverlayTrigger, Popover } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { LoginForm } from "./LoginForm";

export const PopoverUser = () => {
  return (
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
  );
};
