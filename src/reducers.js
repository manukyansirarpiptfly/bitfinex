import { combineReducers } from "redux";

import { reducer as BooksReducer } from "./books";
import { reducer as TradesReducer } from "./trades";

export default combineReducers({
  books: BooksReducer,
  trades: TradesReducer
});
