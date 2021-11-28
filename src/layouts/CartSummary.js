import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const CartSummary = () => {
  return (
    <div>
      {" "}
      <Dropdown item text="Your Cart" style={{ marginTop: ".5em" }}>
        <Dropdown.Menu>
          <Dropdown.Item>MSI Laptop</Dropdown.Item>
          <Dropdown.Item>Samsun AU8000</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
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
