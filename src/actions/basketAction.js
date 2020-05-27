import {createActions} from "redux-actions";

export const {
  addToBasket,
  removeFromBasket
} = createActions(
    'ADD_TO_BASKET',
    'REMOVE_FROM_BASKET'
);
