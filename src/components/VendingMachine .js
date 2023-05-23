import { useState } from "react";

const VendingMachine = () => {
  const [coinsInserted, setCoinsInserted] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [change, setChange] = useState(0);

  return (
    <div>
      <h2>Vending Machine</h2>
      {/* We'll add more functionality here later */}
    </div>
  );
};

export default VendingMachine;
