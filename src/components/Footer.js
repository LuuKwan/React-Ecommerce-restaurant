import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <article>
        <div className="title">
          <h2>Watanabe</h2>
        </div>
        <div className="container">
          <div className="address">
            <p>Missouri city</p>
            <p>tel: 44-123-4567</p>
          </div>
          <div className="open-time">
            <p>Mon - Fri: 09:00AM - 10:00PM</p>
            <p>Sat - Sun: 09:00AM - 11:30PM</p>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 20rem;
  article {
    margin: 0 auto;
    padding: 3rem 0;
    color: white;
    display: grid;
    gap: 1.5rem;
    text-align: center;
    max-width: 1205px;
  }
  .container {
    display: grid;
    gap: 2.5rem;
    p {
      margin: 1rem 0;
    }
  }
  @media screen and (min-width: 735px) {
    article {
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
  } ;
`;
export default Footer;
