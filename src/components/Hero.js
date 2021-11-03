import React from "react";
import curveRight from "../images/patterns/pattern-curve-top-right.svg";
import curveLeft from "../images/patterns/pattern-curve-top-left.svg";
import patternDivide from "../images/patterns/pattern-divide.svg";
import heroImage1_mb from "../images/homepage/enjoyable-place-mobile.jpg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="portion">
        <div className="portion-bg">
          <img src={curveRight} alt="" />
        </div>
        <div className="hero-container">
          <div className="hero-image">
            <div className="image"></div>
          </div>
          <div className="hero-text">
            <img src={patternDivide} alt="" />
            <h2>Enjoyable place for all the family</h2>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </div>
      <div className="portion">
        <div className="portion-bg right">
          <img src={curveLeft} alt="" />
        </div>
        <div className="hero-container container-right">
          <div className="hero-image">
            <div className="image image-right"></div>
          </div>
          <div className="hero-text">
            <img src={patternDivide} alt="" />
            <h2>The most locally sourced food</h2>
            <p>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
