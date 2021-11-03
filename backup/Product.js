import React from "react";
import styled from "styled-components";
//import { useGlobalContext } from "../context";
import { useCartContext } from "../cart_context";
import { formatPrice } from "../ultils/helpers";
import AmountButtons from "./AmountButton";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const { addToCart, toggle_item_amount } = useCartContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        let itemAmount = 1;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description}</p>
              {/* below will be AddtoCart */}
              <div className="btn-container">
                <AmountButtons productID={id} itemAmount={itemAmount} />
                <button
                  className="btn"
                  onClick={() => addToCart(id, image, name, price, itemAmount)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: hsl(22, 31%, 60%);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
    margin-top: 1rem;
    width: 140px;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
export default Product;
