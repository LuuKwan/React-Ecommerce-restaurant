import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { getUniqueValues } from "../ultils/helpers";

const Filter = () => {
  const {
    all_products,
    updateFilter,
    filter: { category },
  } = useGlobalContext();
  const categories = getUniqueValues(all_products, "category");
  console.log(categories);
  return (
    <Wrapper>
      <div className="content">
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categories.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={item}
                  onClick={updateFilter}
                  className={`${item === category ? "active" : null}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: hsl(210, 36%, 96%);
    border-radius: 0.25rem;
    border-color: transparent;
    letter-spacing: 0.1;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.1;
    color: hsl(22, 28%, 29%);
    cursor: pointer;
  }
  .active {
    border-color: hsl(210, 22%, 49%);
  }
  .company {
    background: hsl(210, 36%, 96%);
    border-radius: 0.25rem;
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: white;
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: hsl(360, 67%, 44%);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default Filter;
