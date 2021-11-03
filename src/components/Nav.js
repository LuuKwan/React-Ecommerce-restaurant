import React, { useState, useEffect, useRef } from "react";
import { GoThreeBars } from "react-icons/go";
import { BsX } from "react-icons/bs";
import Logo from "../images/Logo.svg";
import { menuList } from "../data";
import { Link } from "react-router-dom";


const Nav = () => {
  let toggleStyle = { color: "white", fontSize: "2rem" };
  let linkContainerRef = useRef(null);
  let navLinksRef = useRef(null);
  let navRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let navLinkHeight = navLinksRef.current.getBoundingClientRect();
    if (isShow) {
      linkContainerRef.current.style.height = `${navLinkHeight.height}px`;
    } else {
      linkContainerRef.current.style.height = `0px`;
      console.log(`close`);
    }
  }, [isShow]);
  return (
    <nav className={isShow ? `nav show-nav` : `nav`} ref={navRef}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <button className="nav-hamburger" onClick={() => setIsShow(!isShow)}>
            {isShow ? (
              <BsX style={toggleStyle} />
            ) : (
              <GoThreeBars style={toggleStyle} />
            )}
          </button>
        </div>
        <div className="link-container" ref={linkContainerRef}>
          <ul className="nav-links" ref={navLinksRef}>
            {menuList.map((item, index) => {
              return (
                <li key={index} className="link">
                  {item === "home" ? (
                    <Link to="/">Home</Link>
                  ) : item === "about_us" ? (
                    <Link to="/about">about us</Link>
                  ) : (
                    <Link to={`/${item}`}>{item}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
