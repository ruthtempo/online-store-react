import { OverlayTrigger, Popover } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

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
      <Cart4 size={30} className="me-3" role={"button"} />
    </OverlayTrigger>
  );
};
