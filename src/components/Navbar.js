import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { navlist } from "../data";
import logo from "../images/Logo.svg";
import CartButtons from "./CartButtons";

const Nav = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {navlist.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}> {text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: hsl(22, 31%, 52%);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        list-style: none;
      }
      a {
        color: black;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        text-decoration: none;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid hsl(20, 31%, 74%);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
