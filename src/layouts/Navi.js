import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate(); // In react-router-dom v6 useHistory() is replaced by useNavigate()

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate("/");
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
