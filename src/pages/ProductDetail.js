import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();

  return <div>Ürün: {id}</div>;
};

export default ProductDetail;
