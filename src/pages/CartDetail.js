import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Label, List, Image, Table, Header } from "semantic-ui-react";
import { removeFromCart } from "../store/actions/CartActions";
import { cartSelector } from "../store/reducer/cartReducer";

const CartDetail = () => {
  const cartItems = useSelector(cartSelector);
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <div>
      <Table basic="very" celled collapsing>
        {cartItems.map((cartItem) => (
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={cartItem.product.image} rounded size="large" />
                  <Header.Content>
                    {cartItem.product.title}
                    <Header.Subheader>
                      {" "}
                      {cartItem.product.category}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{cartItem.quantity}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => dispatch(removeFromCart(cartItem.product))}
                  content="danger"
                  color="red"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default CartDetail;
