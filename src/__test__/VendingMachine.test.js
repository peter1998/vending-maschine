import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import VendingMachine from "../components/VendingMachine "; // Updated the import path
import productReducer from "../store/reducers/productReducer";
import userEvent from "@testing-library/user-event";

// A store for tests using the same reducers structure as real store
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

test("renders vending machine", () => {
  render(
    <Provider store={store}>
      <VendingMachine />
    </Provider>
  );
  const vendingMachineElement = screen.getByText(/Vending Machine/i);
  expect(vendingMachineElement).toBeInTheDocument();
});

// test("select a product", async () => {
//   // Note the async keyword
//   render(
//     <Provider store={store}>
//       <VendingMachine />
//     </Provider>
//   );

//   // Simulate a user clicking on a product
//   userEvent.click(screen.getByText("coca-cola"));

//   // Use findByText to wait for the selection message to appear
//   const selectedProductElement = await screen.findByText("coca-cola selected");

//   // Check that the product has been selected
//   expect(selectedProductElement).toBeInTheDocument();
// });
