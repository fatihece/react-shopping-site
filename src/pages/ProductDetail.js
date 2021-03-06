import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
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
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta style={{ textTransform: "capitalize" }}>
              {product.category}
            </Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
