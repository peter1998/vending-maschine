import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import CoinInsertion from "./CoinInsertion";
import ProductList from "./ProductList";
import ResetProcess from "./ResetProcess";
import { buyProduct } from "../store/actions/productActions";

const VendingMachine = ({ onSelectProduct }) => {
  const [coinsInserted, setCoinsInserted] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [change, setChange] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleInsertCoin = (coin) => {
    setCoinsInserted((prevState) => prevState + coin);
  };

  const handleConfirmPurchase = () => {
    if (selectedProduct && coinsInserted >= selectedProduct.price) {
      dispatch(buyProduct(selectedProduct.id));
      const remainingChange = coinsInserted - selectedProduct.price;
      setChange(remainingChange);
      setCoinsInserted(0);
      setSelectedProduct(null);
    }
  };

  const handleResetProcess = () => {
    setChange(coinsInserted);
    setCoinsInserted(0);
    setSelectedProduct(null);
  };

  return (
    <div>
      <Typography variant="h4">Vending Machine</Typography>
      <Typography variant="h6">
        Total Inserted: ${coinsInserted.toFixed(2)}
      </Typography>
      <CoinInsertion onInsertCoin={handleInsertCoin} />
      <Button
        variant="contained"
        color="secondary"
        disabled={!selectedProduct || coinsInserted < selectedProduct.price}
        onClick={handleConfirmPurchase}
      >
        Confirm Purchase
      </Button>
      <ResetProcess onResetProcess={handleResetProcess} />
      <ProductList onSelectProduct={setSelectedProduct} />
    </div>
  );
};

export default VendingMachine;
