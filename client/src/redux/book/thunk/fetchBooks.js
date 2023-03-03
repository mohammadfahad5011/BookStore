import { loadedBooksAction } from "../bookAction";

export const fetchBooks = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  dispatch(loadedBooksAction(books));
};


