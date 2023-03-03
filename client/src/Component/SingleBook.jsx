import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteBooksThunk } from "../redux/book/thunk/deleteBook";
import { updateBooksThunk } from "../redux/book/thunk/updateBook";
import { editBooksAction } from "../redux/Edit/editAction";
import Rating from "./Rating";

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  const { id, name, author, thumbnail, price, rating, featured } = book;

  const deleteHandeler = (bookId) => {
    dispatch(deleteBooksThunk(bookId));
  };

  // update books
  // const[edit ,setEdit] =useState(false)
  // const [selectedBook , setSelectedBook] = useState({})
  // console.log(selectedBook);

  const editHandeler = (bookId, book) => {
    // dispatch(updateBooksThunk(bookId,book))
    // console.log(bookId, book);
    dispatch(editBooksAction(bookId, book));
  };
  return (
    <div class="book-card">
      <img
        class="h-[240px] w-[170px] object-cover lws-bookThumbnail"
        src={thumbnail}
        alt="book"
      />
      <div class="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div class="flex items-center justify-between">
          {featured && <span class="badge-success lws-Badge">featured</span>}

          <div class=" text-gray-500 space-x-2">
            <button class="lws-edit" onClick={() => editHandeler(id, book)}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button class="lws-delete" onClick={() => deleteHandeler(id)}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="space-y-2 mt-4 h-full">
          <h4 class="lws-bookName">{name}</h4>
          <p class="lws-author">{author}</p>        
            <Rating rating={rating} />
          <p class="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
