const products = [
  {
    id: 1,
    name: "Coca Cola",
    price: 1.5,
    quantity: 500,
    image: "img/coca-cola.png",
    inventory: 15,
  },
  {
    id: 2,
    name: "White Water",
    price: 3.5,
    quantity: 450,
    image: "img/white-water.jpg",
    inventory: 15,
  },
  {
    id: 3,
    name: "Pepsi",
    price: 1.4,
    quantity: 400,
    image: "img/pepsi.png",
    inventory: 15,
  },
  {
    id: 4,
    name: "Mountain Dew",
    price: 1.8,
    quantity: 380,
    image: "img/mountain-dew.png",
    inventory: 15,
  },
  {
    id: 5,
    name: "Sprite",
    price: 1.9,
    quantity: 420,
    image: "img/sprite.png",
    inventory: 15,
  },
  {
    id: 6,
    name: "Fanta",
    price: 1.6,
    quantity: 470,
    image: "img/fanta.png",
    inventory: 15,
  },
  {
    id: 7,
    name: "Red Bull",
    price: 2.0,
    quantity: 350,
    image: "img/red-bull.png",
    inventory: 15,
  },
  {
    id: 8,
    name: "Monster Energy",
    price: 2.2,
    quantity: 300,
    image: "img/monster-energy.png",
    inventory: 15,
  },
  {
    id: 9,
    name: "Gatorade",
    price: 2.3,
    quantity: 375,
    image: "img/gatorade.png",
    inventory: 15,
  },
  {
    id: 10,
    name: "Diet Coke",
    price: 1.3,
    quantity: 500,
    image: "img/diet-coke.png",
    inventory: 15,
  },
  {
    id: 11,
    name: "Orange Juice",
    price: 2.5,
    quantity: 450,
    image: "img/orange-juice.png",
    inventory: 15,
  },
  {
    id: 12,
    name: "Apple Juice",
    price: 2.6,
    quantity: 430,
    image: "img/apple-juice.png",
    inventory: 15,
  },
  {
    id: 13,
    name: "Iced Coffee",
    price: 3.0,
    quantity: 300,
    image: "img/iced-coffee.png",
    inventory: 15,
  },
  {
    id: 14,
    name: "Green Tea",
    price: 2.8,
    quantity: 410,
    image: "img/green-tea.png",
    inventory: 15,
  },
  {
    id: 15,
    name: "Lemonade",
    price: 1.7,
    quantity: 460,
    image: "img/lemon.png",
    inventory: 15,
  },
];

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS", payload: products });
};

export const buyProduct = (productId) => ({
  type: "BUY_PRODUCT",
  payload: productId,
});

export const updateProductInventory = (productId) => {
  return {
    type: "UPDATE_PRODUCT_INVENTORY",
    payload: productId,
  };
};
