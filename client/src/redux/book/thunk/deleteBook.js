import { deleteBooksAction } from "../bookAction";

export const deleteBooksThunk = (bookId) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });

    dispatch(deleteBooksAction(bookId));
  };
};
