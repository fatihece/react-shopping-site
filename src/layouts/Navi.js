import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
// import CartSummary from "./CartSummary";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };
  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {/* <CartSummary /> */}
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};

export default Navi;
