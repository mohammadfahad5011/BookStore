import { addBooksAction } from "../bookAction";

export const addBooksThunk = (bookInfo) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        ...bookInfo,
      }),
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
      },
    });
    const books = await response.json();
    dispatch(addBooksAction(books));
  };
};
