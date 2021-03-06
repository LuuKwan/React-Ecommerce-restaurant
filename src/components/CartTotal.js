import React from "react";
import styled from "styled-components";
import { useCartContext } from "../cart_context";
import { formatPrice } from "../ultils/helpers";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Sub-total: <span>{formatPrice(total_amount)}</span>
          </h5>
          <h5>
            Shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </h5>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>

        <Link to="/checkout" className="btn">
          proceed to check-out
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px hsl(210, 31%, 80%);
    border-radius: 0.25rem;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotal;
