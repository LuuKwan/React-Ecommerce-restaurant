import React from "react";
import styled from "styled-components";
import { bookingImage } from "../data";
import { ReserveForm } from "../components/index_component";

const ReservePage = () => {
  const [isBook, setIsBook] = React.useState(false);
  return (
    <Wrapper>
      <article>
        <img src={bookingImage} alt="booking-img" />
        <div className="section-center">
          <div>
            <h2>Reservation</h2>
            <p>
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
          </div>
        </div>
      </article>
      <div className="reserve-form">
        {isBook ? (
          <div className="confirmation">
            <h2>Congratulation</h2>
            <p>You successfully reserved your table</p>
          </div>
        ) : (
          <ReserveForm setIsBook={setIsBook} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  color: white;
  article {
    min-height: calc(100vh -5rem - 20rem);
    position: relative;
    text-align: center;
    img {
      height: 600px;
      width: 100vw;
    }
  }
  .section-center {
    display: flex;
    position: absolute;
    inset: 0;
    text-align: center;
    width: 90vw;
    max-width: 573px;
    margin: 0 auto;
    place-items: center;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.75rem;
    }
  }
  .reserve-form {
    //position: absolute;
    inset: 0;
    width: 90vw;
    max-width: 540px;
    //height: 545px;
    //border: 1px solid red;
    margin: 0 auto;
    transform: translateY(-7rem);
    background-color: white;
    box-shadow: 0 0 6px 2px orange;
    text-align: center;
    display: flex;
    place-items: center;
    .confirmation {
      height: 545px;
      margin: 0 auto;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 6.5rem;
    article {
    }
    .section-center {
      left: -50%;
    }
    .reserve-form {
      position: absolute;
      inset: 0;
      transform: translate(18rem, 10rem);
      width: 100%;
    }
  } ;
`;
export default ReservePage;
