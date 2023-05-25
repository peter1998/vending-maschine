import React from "react";
import VendingMachine from "./components/VendingMachine ";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="parent-container">
        <VendingMachine />
      </div>
    </div>
  );
};

export default App;
