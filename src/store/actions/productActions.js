const products = [
  { id: 1, name: "Coca Cola", price: 1.5, quantity: 500 },
  { id: 2, name: "White Water", price: 3.5, quantity: 450 },
  { id: 3, name: "Pepsi", price: 1.4, quantity: 400 },
  { id: 4, name: "Mountain Dew", price: 1.8, quantity: 380 },
  { id: 5, name: "Sprite", price: 1.5, quantity: 420 },
  { id: 6, name: "Fanta", price: 1.6, quantity: 470 },
  { id: 7, name: "Red Bull", price: 2.0, quantity: 350 },
  { id: 8, name: "Monster Energy", price: 2.2, quantity: 300 },
  { id: 9, name: "Gatorade", price: 1.9, quantity: 375 },
  { id: 10, name: "Diet Coke", price: 1.5, quantity: 500 },
  { id: 11, name: "Orange Juice", price: 2.5, quantity: 450 },
  { id: 12, name: "Apple Juice", price: 2.6, quantity: 430 },
  { id: 13, name: "Iced Coffee", price: 3.0, quantity: 300 },
  { id: 14, name: "Green Tea", price: 2.8, quantity: 410 },
  { id: 15, name: "Lemonade", price: 1.7, quantity: 460 },
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS", payload: products });
};

export const buyProduct = (productId) => ({
  type: "BUY_PRODUCT",
  payload: productId,
});
