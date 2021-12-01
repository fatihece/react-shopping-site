import React from "react";
import { Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <div>
      {" "}
      <Menu pointing vertical>
        <h3 style={{ marginTop: "0.6em" }}>Categories</h3>
        <Menu.Item name="Men's Clothing" />
        <Menu.Item name="Women's Clothing" />
        <Menu.Item name="Jewelery" />
        <Menu.Item name="Electronics" />
      </Menu>
    </div>
  );
};

export default Categories;
