import React from "react";
import styled from "styled-components";
import { useCartContext } from "../cart_context";
import { Link } from "react-router-dom";
import { CartItem, CartTotal } from "../components/index_component";

export const CartPage = () => {
  const { cart, clearCart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/menu" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Wrapper>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className="link-container">
          <Link to="/menu" className="link-btn">
            Continue shopping
          </Link>
          <button
            type="button"
            className="link-btn clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        <CartTotal />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem - 20rem);
  place-items: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
  .empty {
    margin: auto;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
    .btn {
      padding: 1rem 2rem;
    }
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: hsl(22, 31%, 52%);
    color: white;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: #222;
  }
`;
export default CartPage;
