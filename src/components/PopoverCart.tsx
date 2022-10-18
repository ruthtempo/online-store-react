import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import { Bag, BagHeart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const PopoverCart = () => {
  const { user } = useUser();

  return (
    <OverlayTrigger
      trigger="focus"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body className="text-center">
            {user.cart.length > 0 ? (
              <p>
                You have {user.cart.length}
                {user.cart.length > 1 ? " items" : " item"} in your{" "}
                <BagHeart size={20} />
              </p>
            ) : (
              <>
                <p className="h5">Your bag is empty</p>
                <Bag size={40} />
              </>
            )}
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link as={Link} to="cart" href="#" className="me-3">
        {user.cart.length > 0 ? (
          <>
            <BagHeart size={25} role="button" className="me-1" />
            {user.cart.length}
          </>
        ) : (
          <Bag size={25} role="button" />
        )}
      </Nav.Link>
    </OverlayTrigger>
  );
};
