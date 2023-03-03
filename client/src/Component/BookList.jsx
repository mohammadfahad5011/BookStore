import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/book/thunk/fetchBooks";
import SingleBook from "./SingleBook";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  const query = useSelector((state) => state.searchBook);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  const [showFeatured, setShowFeatured] = useState(false);

  const handleFilterClick = (isFeatured) => {
    setShowFeatured(isFeatured);
  };

  //For filter
  // const filteredBooks = showFeatured
  //   ? books.filter((book) => book.featured)
  //   : books;

  //For search
  // const filteredBooks = books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));

  //For filter and search both
  const filteredBooks = books.filter((book) => {
    if (showFeatured && !book.featured) {
      return false;
    }

    if (query && !book.name.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div class="order-2 xl:-order-1">
      <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Book List</h4>
        {/* <Featured /> */}
        <div class="flex items-center space-x-4">
          <button
            className={`filter-btn ${!showFeatured ? "active-filter" : ""}`}
            id="lws-filterAll"
            onClick={() => handleFilterClick(false)}
          >
            All
          </button>
          <button
            className={`filter-btn ${showFeatured ? "active-filter" : ""}`}
            id="lws-filterFeatured"
            onClick={() => handleFilterClick(true)}
          >
            Featured
          </button>
        </div>
      </div>
      <div class="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {filteredBooks.map((book) => {
          return <SingleBook book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
