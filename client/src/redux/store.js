import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookReducer } from "./book/bookReducer";
import thunk from "redux-thunk";
import { editBookReducer } from "./Edit/editReducer";
import { searchBookReducer } from "./search/searchReducer";

const RootReducer = combineReducers({
  book: bookReducer,
  editBook: editBookReducer,
  searchBook: searchBookReducer,
});

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
