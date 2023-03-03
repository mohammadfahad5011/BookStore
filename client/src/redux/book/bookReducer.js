import {
  LOADED_BOOKS,
  ADD_BOOKS,
  UPDATE_BOOKS,
  DELETE_BOOKS,
} from "./bookConstant";

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOADED_BOOKS:
      return action.payload;
    case ADD_BOOKS:
      return [...state, { ...action.payload }];
      
    case UPDATE_BOOKS:
      const updatedBook = action.payload.updatebook;
      const updatedState = state.map((book) =>
        book.id === updatedBook.id ? { ...book, ...updatedBook } : book
      );
      return updatedState;

    case DELETE_BOOKS:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
