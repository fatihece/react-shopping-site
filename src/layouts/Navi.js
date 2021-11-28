import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
// import CartSummary from "./CartSummary";

const Navi = () => {
  return (
    <div>
      {/* <CartSummary /> */}
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <SignOut />
            <SignedIn />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
