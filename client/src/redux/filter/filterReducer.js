
const initialState = {
    status: "All",
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STATUSCHANGED':
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

  