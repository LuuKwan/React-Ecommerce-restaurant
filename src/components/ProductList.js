import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Product from "./Product";

const ProductList = () => {
  const { filter_products } = useGlobalContext();
  return (
    <Wrapper>
      {filter_products.map((product) => {
        return <Product id={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
`;
export default ProductList;
