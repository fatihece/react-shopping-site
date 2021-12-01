import React from "react";
import { Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <div>
      {" "}
      <Menu pointing vertical>
        <Menu.Item name="Men's Clothing" />
        <Menu.Item name="Women's Clothing" />
        <Menu.Item name="Jewelery" />
        <Menu.Item name="Electronics" />
      </Menu>
    </div>
  );
};

export default Categories;
