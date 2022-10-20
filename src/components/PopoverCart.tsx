import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import { Bag, BagHeart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const PopoverCart = () => {
  const { user } = useUser();

  return (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Body className="text-center">
            <Nav.Link as={Link} to="cart" href="#">
              {user.cart.length > 0 ? (
                <>
                  <p>
                    You have {user.cart.length}
                    {user.cart.length > 1 ? " items" : " item"}
                  </p>
                  <BagHeart size={20} className="me-1" />
                  Go to Cart
                </>
              ) : (
                <>
                  <p className="h5">Your bag is empty</p>
                  <Bag size={40} />
                </>
              )}
            </Nav.Link>
          </Popover.Body>
        </Popover>
      }
    >
      {user.cart.length > 0 ? (
        <div>
          <BagHeart size={25} role="button" className="me-1" />
          {user.cart.length}
        </div>
      ) : (
        <Bag size={25} role="button" className="me-3" />
      )}
    </OverlayTrigger>
  );
};
