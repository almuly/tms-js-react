import { handleActions } from "redux-actions";

//actions
import {
  addProducts,
  sortProductsAsc,
  sortProductsDesc,
  searchProducts,
} from "../actions";

import { productsState } from "../constants/defaultState";

export default {
  products: handleActions(
    {
      [addProducts]: (state, { payload = [] }) => ({
        current: payload,
        origin: payload,
        sortDirection: "Desc",
      }),
      [sortProductsAsc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => a.price.value - b.price.value);
        return { ...state, current: newState, sortDirection: "Desc" };
      },
      [sortProductsDesc]: (state) => {
        const newState = [...state.current];
        newState.sort((a, b) => b.price.value - a.price.value);
        return { ...state, current: newState, sortDirection: "Asc" };
      },
      [searchProducts]: (state, { payload = "" }) => {
        const reg = new RegExp(payload.searchString, "i");

        const stateOriginData = state.origin.filter((product) =>
          reg.test(product.title)
        );
        if (state.sortDirection === "Desc") {
          stateOriginData.sort((a, b) => a.price.value - b.price.value);
        } else if (state.sortDirection === "Asc") {
          stateOriginData.sort((a, b) => b.price.value - a.price.value);
        }

        return { ...state, current: stateOriginData };
      },
    },
    productsState
  ),
};
