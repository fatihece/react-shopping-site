import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

const SignedIn = ({ signOut }) => {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/81515422?v=4"
        />
        <Dropdown pointing="top left" text="Fatih">
          <Dropdown.Menu>
            <Dropdown.Item text="My Info" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
};

export default SignedIn;
