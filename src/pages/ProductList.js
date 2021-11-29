import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table, Button, Image } from "semantic-ui-react";
// import ProductService from "../services/productService";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/CartActions";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.info(`${product.title} added to cart successfuly!`);
  };

  // const handleRemoveItemfromCart = (product) => {
  //   dispatch(removeFromCart(product));
  // };

  // -----second way of calling an api-----
  // useEffect(() => {
  //   let productService = new ProductService();
  //   productService.getProducts().then((result) => setProducts(result.data));
  // }, []);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Add to Cart</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={`products/${product.id}`}>{product.title}</Link>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Image src={product.image} rounded size="mini" />
              </Table.Cell>
              <Table.Cell>{product.price}$</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ProductList;
