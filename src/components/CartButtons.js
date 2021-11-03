import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { useCartContext } from "../cart_context";

const CartButtons = () => {
  const { closeSidebar } = useGlobalContext();
  const { total_items } = useCartContext();
  // the class name came from Navbar.js and Sidebar.js
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: hsl(22, 28%, 21%);
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: hsl(22, 31%, 52%);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: hsl(22, 28%, 21%);
    letter-spacing: 0.1rem;
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
