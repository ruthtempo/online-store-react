import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import { BagHeart, Cart4 } from "react-bootstrap-icons";
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
                {cart.length > 1 ? " items" : " item"} in your{" "}
                <Cart4 size={20} />
              </p>
            ) : (
              <>
                <h4>Your shopping bag is empty</h4>
                <BagHeart size={60} />
              </>
            )}
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link as={Link} to="cart" href="#" className="me-3">
        <BagHeart size={25} role={"button"} className="me-1" />
        {cart.length}
      </Nav.Link>
    </OverlayTrigger>
  );
};
