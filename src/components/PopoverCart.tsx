import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const PopoverCart = () => {
  const { cart } = useCart();
  return (
    <OverlayTrigger
      trigger="hover"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body className="text-center">
            {cart.length > 0 ? (
              <p>
                You have {cart.length}
                {cart.length > 1 ? " products" : " product"} in your{" "}
                <Cart4 size={20} />
              </p>
            ) : (
              <>
                <h4>Your cart is empty</h4>
                <Cart4 size={60} />
              </>
            )}
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link as={Link} to="cart" className="me-3">
        <Cart4 size={25} role={"button"} />
        {cart.length}
      </Nav.Link>
    </OverlayTrigger>
  );
};
