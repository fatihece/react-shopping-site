import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      {" "}
      <Dropdown item text="Your Cart" style={{ marginTop: ".5em" }}>
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item>
              {cartItem.product.title}
              <Label style={{ marginLeft: "5px", backgroundColor: "#3498db" }}>
                {cartItem.quantity}
              </Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Go Your Cart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CartSummary;
