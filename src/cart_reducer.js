import { act } from "react-dom/test-utils";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  INCREASE_ITEM_AMOUNT,
  DECREASE_ITEM_AMOUNT,
} from "./actions";

const reducer = (state, action) => {
  //Add new item
  if (action.type === ADD_TO_CART) {
    const { id, name, image, price, amount } = action.payload;
    let tempItem = state.cart.find((item) => item.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.amount !== amount) {
            let newAmount = amount;
            return { ...cartItem, amount: newAmount };
          }
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    } else {
      // if tempItem is not found, add it into cart
      const newItem = {
        id,
        name,
        image,
        price,
        amount,
      };
      // add new item into cart
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  //modify amount of specific item in cart
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: value };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE_CART_ITEM) {
    //Remove single item from cart
    const id = action.payload;
    //console.log(`passed id:`, id);
    const tempCart = state.cart.filter((item) => {
      return item.id !== id;
    });

    return { ...state, cart: tempCart };
  }
  //Remove all items from cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //Calculate total amount of items and total price
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_amount += amount * price;
        total.total_items += amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  //return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
