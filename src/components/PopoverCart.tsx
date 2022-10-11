import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const PopoverCart = () => {
  return (
    <OverlayTrigger
      trigger="hover"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body className="text-center">
            <h4>Your cart is empty</h4>
            <Cart4 size={60} />
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link as={Link} to="cart">
        <Cart4 size={25} className="me-3" role={"button"} />
      </Nav.Link>
    </OverlayTrigger>
  );
};
