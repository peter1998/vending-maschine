const products = [
  {
    id: 1,
    name: "Coca Cola",
    price: 1.5,
    quantity: 500,
    image: "img/coca-cola.png",
  },
  {
    id: 2,
    name: "White Water",
    price: 3.5,
    quantity: 450,
    image: "img/white-water.jpg",
  },
  {
    id: 3,
    name: "Pepsi",
    price: 1.4,
    quantity: 400,
    image: "img/pepsi.png",
  },
  {
    id: 4,
    name: "Mountain Dew",
    price: 1.8,
    quantity: 380,
    image: "img/mountain-dew.png",
  },
  {
    id: 5,
    name: "Sprite",
    price: 1.5,
    quantity: 420,
    image: "img/sprite.png",
  },
  {
    id: 6,
    name: "Fanta",
    price: 1.6,
    quantity: 470,
    image: "img/fanta.png",
  },
  {
    id: 7,
    name: "Red Bull",
    price: 2.0,
    quantity: 350,
    image: "img/red-bull.png",
  },
  {
    id: 8,
    name: "Monster Energy",
    price: 2.2,
    quantity: 300,
    image: "img/monster-energy.png",
  },
  {
    id: 9,
    name: "Gatorade",
    price: 1.9,
    quantity: 375,
    image: "img/gatorade.png",
  },
  {
    id: 10,
    name: "Diet Coke",
    price: 1.5,
    quantity: 500,
    image: "img/diet-coke.png",
  },
  {
    id: 11,
    name: "Orange Juice",
    price: 2.5,
    quantity: 450,
    image: "img/orange-juice.png",
  },
  {
    id: 12,
    name: "Apple Juice",
    price: 2.6,
    quantity: 430,
    image: "img/apple-juice.png",
  },
  {
    id: 13,
    name: "Iced Coffee",
    price: 3.0,
    quantity: 300,
    image: "img/iced-coffee.png",
  },
  {
    id: 14,
    name: "Green Tea",
    price: 2.8,
    quantity: 410,
    image: "img/green-tea.png",
  },
  {
    id: 15,
    name: "Lemonade",
    price: 1.7,
    quantity: 460,
    image: "img/lemon.png",
  },
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS", payload: products });
};

export const buyProduct = (productId) => ({
  type: "BUY_PRODUCT",
  payload: productId,
});
