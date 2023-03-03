import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooksThunk } from "../redux/book/thunk/addBook";
import { updateBooksThunk } from "../redux/book/thunk/updateBook";

const AddBooks = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(Number);
  const [featured, setFeatured] = useState(Boolean);
  // For Edit

  const [edit, setEditBook] = useState(false);
  const editBook = useSelector((state) => state.editBook);

  // console.log(editBook.featured);

  useEffect(() => {
    if (editBook) {
      setName(editBook.name);
      setAuthor(editBook.author);
      setThumbnail(editBook.thumbnail);
      setPrice(editBook.price);
      setRating(editBook.rating);
      setFeatured(editBook.featured);
      setEditBook(true);
    } else {
      setName("");
      setAuthor("");
      setThumbnail("");
      setPrice("");
      setRating("");
      setFeatured("");
      setEditBook(false);
    }
  }, [editBook]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(name,author,thumbnail,price,rating,featured);

    const bookInfo = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };
    if (edit) {
      dispatch(updateBooksThunk(editBook.id, bookInfo));
      setName("");
      setAuthor("");
      setThumbnail("");
      setPrice("");
      setRating("");
      setFeatured("");
      setEditBook(false);
    } else {
      dispatch(addBooksThunk(bookInfo));
      setName("");
      setAuthor("");
      setThumbnail("");
      setPrice("");
      setRating("");
      setFeatured("");
      setEditBook(false);
    }
    // setName("");
    // setAuthor("");
    // setThumbnail("");
    // setPrice("");
    // setRating("");
    // setFeatured("");
  };
  return (
    <div>
      <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form class="book-form" onSubmit={handelSubmit}>
          <div class="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="category">Author</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div class="grid grid-cols-2 gap-8 pb-4">
            <div class="space-y-2">
              <label for="price">Price</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div class="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              class="w-4 h-4"
              checked={featured}
              onChange={(e) => setFeatured(e.target.value)}
            />
            <label for="featured" class="ml-2 text-sm">
              This is a featured book
            </label>
          </div>
          {editBook && edit ? (
            <button type="submit" class="submit" id="submit">
              Update Book
            </button>
          ) : (
            <button type="submit" class="submit" id="submit">
              Add Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBooks;

// ============================================
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addBooksThunk } from "../redux/book/thunk/addBook";
// import { updateBooksThunk } from "../redux/book/thunk/updateBook";

// const AddBooks = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [author, setAuthor] = useState("");
//   const [thumbnail, setThumbnail] = useState("");
//   const [price, setPrice] = useState("");
//   const [rating, setRating] = useState(Number);
//   const [featured, setFeatured] = useState(Boolean);
//   // For Edit

//   // const [edit, setEditBook] = useState(true);
//   const editBook = useSelector((state) => state.editBook);
// console.log(editBook);
//   useEffect(() => {
//     if (editBook.edit) {
//       setName(editBook.name);
//       setAuthor(editBook.author);
//       setThumbnail(editBook.thumbnail);
//       setPrice(editBook.price);
//       setRating(editBook.rating);
//       setFeatured(editBook.featured);
//     }
//   }, [editBook]);

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     // console.log(name,author,thumbnail,price,rating,featured);

//     const bookInfo = {
//       name,
//       author,
//       thumbnail,
//       price,
//       rating,
//       featured,
//     };
//     if (editBook.edit) {
//       dispatch(updateBooksThunk(editBook.id, bookInfo));
//       setName("");
//       setAuthor("");
//       setThumbnail("");
//       setPrice("");
//       setRating("");
//       setFeatured("");
//       // setEditBook(false);
//     } else {
//       dispatch(addBooksThunk(bookInfo));
//       setName("");
//       setAuthor("");
//       setThumbnail("");
//       setPrice("");
//       setRating("");
//       setFeatured("");
//     }
//     // setName("");
//     // setAuthor("");
//     // setThumbnail("");
//     // setPrice("");
//     // setRating("");
//     // setFeatured("");
//   };
//   return (
//     <div>
//       <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
//         <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
//         <form class="book-form" onSubmit={handelSubmit}>
//           <div class="space-y-2">
//             <label for="name">Book Name</label>
//             <input
//               required
//               class="text-input"
//               type="text"
//               id="input-Bookname"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div class="space-y-2">
//             <label for="category">Author</label>
//             <input
//               required
//               class="text-input"
//               type="text"
//               id="input-Bookauthor"
//               name="author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//           </div>

//           <div class="space-y-2">
//             <label for="image">Image Url</label>
//             <input
//               required
//               class="text-input"
//               type="text"
//               id="input-Bookthumbnail"
//               name="thumbnail"
//               value={thumbnail}
//               onChange={(e) => setThumbnail(e.target.value)}
//             />
//           </div>

//           <div class="grid grid-cols-2 gap-8 pb-4">
//             <div class="space-y-2">
//               <label for="price">Price</label>
//               <input
//                 required
//                 class="text-input"
//                 type="number"
//                 id="input-Bookprice"
//                 name="price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>

//             <div class="space-y-2">
//               <label for="quantity">Rating</label>
//               <input
//                 required
//                 class="text-input"
//                 type="number"
//                 id="input-Bookrating"
//                 name="rating"
//                 min="1"
//                 max="5"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//               />
//             </div>
//           </div>

//           <div class="flex items-center">
//             <input
//               id="input-Bookfeatured"
//               type="checkbox"
//               name="featured"
//               class="w-4 h-4"
//               onChange={(e) => setFeatured(e.target.value)}
//               value={featured}
//             />
//             <label for="featured" class="ml-2 text-sm">
//               This is a featured book
//             </label>
//           </div>
//           {editBook.edit ? (
//             <button type="submit" class="submit" id="submit">
//               Update Book
//             </button>
//           ) : (
//             <button type="submit" class="submit" id="submit">
//               Add Book
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBooks;
