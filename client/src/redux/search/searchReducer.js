export const searchBookReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCHQUARY":
      return action.payload
    default:
      return state;
  }
};
