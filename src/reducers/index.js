import { combineReducers } from "redux";

import basketReducer from "./basketReducer";
import loadReducer from "./loadReducer";
import productsReducer from "./productsReducer";


const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
});

export default reducers;
