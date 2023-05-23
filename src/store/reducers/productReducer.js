const initialState = [];

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "BUY_PRODUCT":
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    default:
      return state;
  }
};

export default productReducer;
