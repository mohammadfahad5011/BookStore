export const editBookReducer = (state = null, action) => {
  switch (action.type) {
    case "EDIT_BOOK_DATA":
      return { ...action.payload.book };
    default:
      return state;
  }
};
