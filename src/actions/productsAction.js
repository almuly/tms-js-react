import { createActions } from "redux-actions";

export const { addProducts, sortProductsAsc, sortProductsDesc, searchProducts } = createActions(
  "ADD_PRODUCTS",
  "SORT_PRODUCTS_ASC",
  "SORT_PRODUCTS_DESC","SEARCH_PRODUCTS"
);
