import React, { useState, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import { client } from "./client";
import { eventList } from "./data";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from "./actions";
const AppContext = React.createContext();

const initialState = {
  eventList: eventList,
  isSidebarOpen: false,
  showEventIndex: 0,
  products_loading: false,
  products_error: false,
  all_products: [],
  featured_products: [],
  filter_products: [],
  filter: {
    category: "all",
  },
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //selecting specific event to show
  const handleSlide = (showEventIndex) => {
    dispatch({ type: "HANDLE_SLIDE", payload: showEventIndex });
  };

  // hanlde sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  // Filter component
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "price") {
      value = parseInt(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  //fetching all products
  const fetchProduct = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      //will fetching data from contenful API
      const response = await client.getEntries();
      const data = response.items;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  //Default useEffect
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    //filter product to display
    dispatch({ type: FILTER_PRODUCTS, payload: state.filter });
  }, [state.filter]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSlide,
        openSidebar,
        closeSidebar,
        updateFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
