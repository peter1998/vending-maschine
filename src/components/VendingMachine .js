import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import CoinInsertion from "./CoinInsertion";
import ProductList from "./ProductList";
import ResetProcess from "./ResetProcess";
import { buyProduct } from "../store/actions/productActions";
import VendingMachineCard from "./VendingMachineCard";

const VendingMachine = ({ onSelectProduct }) => {
  const [coinsInserted, setCoinsInserted] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [change, setChange] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [confirmPurchaseDialogOpen, setConfirmPurchaseDialogOpen] =
    useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  const handleInsertCoin = (coin) => {
    setCoinsInserted((prevState) => prevState + coin);
  };

  const handleOpenConfirmPurchaseDialog = () => {
    setConfirmPurchaseDialogOpen(true);
  };

  const handleCloseConfirmPurchaseDialog = () => {
    setConfirmPurchaseDialogOpen(false);
  };

  const handleOpenResetDialog = () => {
    setResetDialogOpen(true);
  };

  const handleCloseResetDialog = () => {
    setResetDialogOpen(false);
  };

  const handleConfirmPurchase = () => {
    if (selectedProduct && coinsInserted >= selectedProduct.price) {
      dispatch(buyProduct(selectedProduct.id));
      const remainingChange = Number(
        (coinsInserted - selectedProduct.price).toFixed(2)
      );
      setChange(remainingChange);
      setCoinsInserted(remainingChange);
      setSelectedProduct(null);
      setSnackbarMessage("Purchase successful!");
      setSnackbarOpen(true);
      handleCloseConfirmPurchaseDialog();
    } else {
      setSnackbarMessage("Not enough money!");
      setSnackbarOpen(true);
    }
  };

  const handleResetProcess = () => {
    setChange(coinsInserted);
    setCoinsInserted(0);
    setSelectedProduct(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <VendingMachineCard>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>
          Vending Machine
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "1rem" }}>
          Total Inserted: ${coinsInserted.toFixed(2)}
        </Typography>
        <CoinInsertion
          onInsertCoin={handleInsertCoin}
          style={{ marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            disabled={!selectedProduct || coinsInserted < selectedProduct.price}
            onClick={handleOpenConfirmPurchaseDialog}
          >
            Confirm Purchase
          </Button>
          <ResetProcess onResetProcess={handleResetProcess} />
        </div>
        <ProductList
          onSelectProduct={setSelectedProduct}
          style={{ marginBottom: "1rem" }}
        />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
        />
        <Dialog
          open={confirmPurchaseDialogOpen}
          onClose={handleCloseConfirmPurchaseDialog}
          aria-labelledby="confirm-purchase-dialog-title"
        >
          <DialogTitle id="confirm-purchase-dialog-title">
            Confirm Purchase
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseConfirmPurchaseDialog}>Cancel</Button>
            <Button onClick={handleConfirmPurchase}>Confirm</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={resetDialogOpen}
          onClose={handleCloseResetDialog}
          aria-labelledby="reset-dialog-title"
        >
          <DialogTitle id="reset-dialog-title">Confirm Reset</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseResetDialog}>Cancel</Button>
            <Button onClick={handleResetProcess}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
    </VendingMachineCard>
  );
};

export default VendingMachine;
