import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Product from "./Product";

const ProductList = () => {
  const { filter_products } = useGlobalContext();
  return (
    <>
      <Product products={filter_products} />
    </>
  );
};

export default ProductList;
