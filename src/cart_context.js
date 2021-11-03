import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
} from "./actions";

const getLocalStorageData = () => {
  let data = localStorage.getItem("cart");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorageData(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //helper functions
  const addToCart = (id, image, name, price, amount) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, image, name, price, amount },
    });
  };
  const toggle_item_amount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const removeItem = (id) => {
    //console.log(`called removeItem with id:`, id);
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggle_item_amount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
