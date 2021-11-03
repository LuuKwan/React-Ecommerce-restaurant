import React from "react";
import image from "../images/homepage/hero-bg-mobile.jpg";
import ReserveTableButton from "./ReserveTableButton";
export const Head = () => {
  return (
    <header className="header">
      {/* Nav here */}
      <div className="header-img"></div>
      <div className="header-info">
        <div className="info-container">
          {/* <h1>Watanebe</h1> */}
          <h2> Exquisite dining since 1989</h2>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <ReserveTableButton msg="Order now" path="/menu" />
        </div>
      </div>
    </header>
  );
};

export default Head;
