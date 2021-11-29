import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
import { useSelector } from "react-redux";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate(); // In react-router-dom v6 useHistory() is replaced by useNavigate()
  const { cartItems } = useSelector((state) => state.cart);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {/* CartSummary nin eleman sayısı 0'dan büyükse render et. Değer 0 ise, yani sepet(cart) boş ise gösterme. */}

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
