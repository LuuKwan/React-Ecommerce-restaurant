import React from "react";
import styled from "styled-components";
import { foodMenu } from "../data";
import { getUniqueValues } from "../ultils/helpers";
import { useGlobalContext } from "../context";
import { Filter, ProductList } from "../components/index_component";

const MenuPage = () => {
  const { all_products, filter_products } = useGlobalContext();
  return (
    <Wrapper>
      <div className="products">
        <Filter />
        <ProductList />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: hsl(212, 33%, 89%);

  padding: 2rem 0;
  min-height: calc(100vh - 25rem);
  .products {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default MenuPage;
