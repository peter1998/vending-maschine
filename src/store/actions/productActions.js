const products = [
  { id: 1, name: "Coca Cola", price: 1.5, quantity: 500 },
  { id: 2, name: "White Water", price: 3.5, quantity: 450 },
  // Add other products.
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS", payload: products });
};
