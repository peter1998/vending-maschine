const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      state.push(action.payload); // With Redux Toolkit, we can write "mutating" logic.
      break;
    default:
      return state;
  }
};

export default productReducer;
