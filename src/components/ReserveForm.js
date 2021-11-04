import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AmountButton from "./AmountButton";
export const ReserveForm = ({ setIsBook }) => {
  const MAX_PEOPLE = 8;
  const MIN_PEOPLE = 1;
  const MONTHS = 12;
  const MAX_HOURS = 12;
  const MAX_MINUTES = 59;
  const DAY_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [peopleQuantity, setPeopleQuantity] = useState(4);
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hours, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  //Handle date change
  const handleDate = (e) => {
    let newDate = e.target.value;
    newDate = parseInt(newDate);
    if (Number.isInteger(newDate) && newDate <= DAY_IN_MONTH[month - 1]) {
      setDate(newDate);
    }
    if (isNaN(newDate)) {
      setDate("");
    }
  };
  // Handle month change
  const handleMonth = (e) => {
    let newMonth = e.target.value;
    newMonth = parseInt(newMonth) - 1;
    if (Number.isInteger(newMonth) && newMonth >= 0 && newMonth < MONTHS) {
      setMonth(newMonth + 1);
    }
    if (isNaN(newMonth)) {
      setMonth("");
    }
  };
  // Handle Year change
  const handleYear = (e) => {
    //STILL NEED TO BE IMPROVE TO HANDLE THE CASE USER ENTER THE YEAR LESS THAN TODAY YEAR
    const currentYear = new Date().getFullYear();
    let newYear = parseInt(e.target.value);
    if (Number.isInteger(newYear)) {
      setYear(newYear);
    }
    if (isNaN(newYear)) {
      setMonth("");
    }
  };

  //handle hour
  const handleHour = (e) => {
    let newHour = parseInt(e.target.value);
    if (Number.isInteger(newHour) && newHour >= 1 && newHour <= MAX_HOURS) {
      setHour(newHour);
    }
    if (isNaN(newHour)) {
      setHour("");
    }
  };
  // //handle minute
  const handleMinutes = (e) => {
    let newMinute = parseInt(e.target.value);
    if (
      Number.isInteger(newMinute) &&
      newMinute >= 1 &&
      newMinute <= MAX_MINUTES
    ) {
      setMinutes(newMinute);
      return;
    }
    if (isNaN(newMinute)) {
      setMinutes("");
    }
  };

  const increase = () => {
    let newQuantity = peopleQuantity + 1;
    if (newQuantity <= MAX_PEOPLE) {
      setPeopleQuantity(newQuantity);
      return;
    }
  };
  const decrease = () => {
    let newQuantity = peopleQuantity - 1;
    if (newQuantity >= MIN_PEOPLE) {
      setPeopleQuantity(newQuantity);
      return;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setIsBook(true);
    console.log(`change`);
  };
  return (
    <Wrapper onSubmit={handleChange}>
      <div>
        <input type="text" name="name" placeholder="Name" required />
        <div className="underline"></div>
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" required />
        <div className="underline"></div>
      </div>
      {/* Pick date container */}
      <div>
        <label htmlFor="date">Pick a Date</label>
        <div className="container">
          {/* Month input */}
          <div>
            <input
              type="text"
              placeholder="MM"
              name="month"
              value={month}
              onChange={(e) => handleMonth(e)}
            />
            <div className="underline"></div>
          </div>
          {/* date input */}
          <div>
            <input
              type="text"
              placeholder="DD"
              name="date"
              value={date}
              onChange={(e) => handleDate(e)}
            />
            <div className="underline"></div>
          </div>
          {/* year input */}
          <div>
            <input
              type="text"
              placeholder="YYYY"
              name="year"
              value={year}
              onChange={(e) => handleYear(e)}
            />
            <div className="underline"></div>
          </div>
        </div>
      </div>
      {/* End Pick date container */}
      {/* Pick time container */}
      <div>
        <label htmlFor="time">Pick Time</label>
        <div className="container">
          {/* Hour input */}
          <div>
            <input
              type="text"
              placeholder="Hour"
              value={hours}
              onChange={(e) => handleHour(e)}
            />
            <div className="underline"></div>
          </div>
          {/* Minute input */}
          <div>
            <input
              type="text"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => handleMinutes(e)}
            />
            <div className="underline"></div>
          </div>
          {/* year input */}
          <div>
            <select name="" id="" select="AM">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <div className="underline"></div>
          </div>
        </div>
      </div>
      {/* End Pick time */}
      <AmountButton
        amount={peopleQuantity}
        increase={increase}
        decrease={decrease}
      />
      <div className="underline"></div>
      <button type="submit" class="confirm-btn">
        Confirm reservation
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  color: black;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  gap: 1.5em;

  input {
    display: inline-block;
    width: 100%;
    height: 3rem;
    border: 0;
    text-align: center;
    font-size: 1.5rem;

    &::placeholder {
      text-align: left;
    }
  }
  select {
    width: 50px;
    height: 3rem;
    border: none;
    font-size: 1rem;
  }
  .underline {
    position: relative;
    height: 0.2rem;
    width: 100%;
    background-color: #8e8e8e;
  }
  .container {
    display: flex;
    gap: 3rem;
    width: 100%;

    input::placeholder {
      width: 10ch;
      color: red;
      font-size: 1rem;
      text-align: center;
    }
  }
  .amount-btns {
    width: 100%;
  }
  .confirm-btn {
    width: 100%;
    padding: 1rem;
    border: 1px solid;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .confirm-btn::hover {
    transform: scale(0.8);
  }
  @media screen and (min-width: 635px) {
    select {
      width: 100px;
    }
  }
`;

export default ReserveForm;
