import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import axios from "axios";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, []);

  return (
    <div>
      {" "}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            {/* <Image
              floated="right"
              size="large"
              src="/images/avatar/large/steve.jpg"
            /> */}
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta style={{ textTransform: "capitalize" }}>
              {product.category}
            </Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
