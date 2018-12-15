import { combineReducers } from "redux";

import { reducer as BooksReducer } from "./books";
import { reducer as TradesReducer } from "./trades";
import { reducer as TickerReducer } from "./ticker";

export default combineReducers({
  books: BooksReducer,
  trades: TradesReducer,
  ticker: TickerReducer
});
