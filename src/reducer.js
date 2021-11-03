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
const reducer = (state, action) => {
  if (action.type === "HANDLE_SLIDE") {
    return { ...state, showEventIndex: action.payload };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true, products_error: false };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload.map((item) => {
      const { name, id, price, description, featured, category } = item.fields;
      const image = item.fields.image.fields.file.url;
      return { id, name, price, description, image, featured, category };
    });
    const featured_products = products.filter((item) => item.featured === true);
    return {
      ...state,
      products_loading: false,
      products_error: false,
      all_products: products,
      featured_products: featured_products,
      filter_products: [...products],
    };
  }

  //=======open-close sidebar=========
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  //====end open-close sidebar=========

  // update filter
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }
  //Filter product to display
  if (action.type === FILTER_PRODUCTS) {
    const { category } = action.payload;
    let tempProduct = [...state.all_products];
    if (category !== "all") {
      tempProduct = tempProduct.filter((item) => item.category === category);
    }

    return { ...state, filter_products: tempProduct };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default reducer;
