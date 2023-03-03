import { updateBooksAction } from "../bookAction";

export const updateBooksThunk = (bookId, book) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
      }),
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
      },
    });

    const updateBooks = await response.json();
    console.log(updateBooks);
    dispatch(updateBooksAction(updateBooks.id , updateBooks ));
  };
};
