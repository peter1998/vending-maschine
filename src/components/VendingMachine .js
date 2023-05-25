import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogActions,
  Grid,
  Card,
  Box,
  Container,
  CardContent,
} from "@mui/material";
import { styled, alpha } from "@mui/system";

import CoinInsertion from "./CoinInsertion";
import ProductList from "./ProductList";
import ResetProcess from "./ResetProcess";
import VendingMachineCard from "./VendingMachineCard";
import {
  buyProduct,
  updateProductInventory,
} from "../store/actions/productActions";

const GridItemContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

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

  const successImage = process.env.PUBLIC_URL + "/img/mountain.png";

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

      dispatch(updateProductInventory(selectedProduct.id));

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
      const requiredMoney = selectedProduct
        ? Number((selectedProduct.price - coinsInserted).toFixed(2))
        : 0;
      setSnackbarMessage(
        `Not enough money! You need $${requiredMoney} more to buy ${selectedProduct?.name}.`
      );
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

  const StyledImage = styled("img")({
    maxWidth: "40%",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "1rem",
    marginBottom: "2rem",
  });

  const StyledTypography = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "darkblue",
  });

  const StyledProductGrid = styled(Grid)({
    backdropFilter: "blur(10px)",
    backgroundColor: alpha("#3f51b5", 0.8),
    borderRadius: "15px",
    padding: "15px",
  });

  return (
    <VendingMachineCard>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        <Box display="flex" justifyContent="center" marginBottom="1rem">
          <Typography variant="h4" align="center">
            Vending Machine
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="2rem">
          <StyledTypography align="center">
            Works with Dollars $
          </StyledTypography>
        </Box>
        <Box display="flex" justifyContent="center">
          <StyledImage src={successImage} alt="Success" />
        </Box>
        <Grid container spacing={3} style={{ marginTop: "2rem" }}>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" sx={{ backgroundColor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Inserted: ${coinsInserted.toFixed(2)}
                </Typography>
                {selectedProduct && (
                  <React.Fragment>
                    <Typography variant="h6">
                      Selected Product: {selectedProduct.name}
                    </Typography>
                    <img
                      src={process.env.PUBLIC_URL + selectedProduct.image}
                      alt={selectedProduct.name}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="h5" color="primary">
                      Price: ${selectedProduct.price.toFixed(2)}
                    </Typography>
                  </React.Fragment>
                )}
                <Typography variant="h6" style={{ marginTop: "1rem" }}>
                  Change: ${change.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
            <CoinInsertion
              onInsertCoin={handleInsertCoin}
              style={{ marginTop: "1rem" }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="1rem"
            >
              <ResetProcess onResetProcess={handleResetProcess} />
              <Button
                variant="contained"
                color="secondary"
                disabled={!selectedProduct}
                onClick={handleOpenConfirmPurchaseDialog}
              >
                Confirm Purchase
              </Button>
            </Box>
          </Grid>

          <StyledProductGrid item xs={12} sm={6}>
            <ProductList onSelectProduct={setSelectedProduct} />
          </StyledProductGrid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          If not working contact:
          <br />
          Peter Matov
          <br />
          pmatov@gmail.com
        </Box>
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
      </Container>
    </VendingMachineCard>
  );
};

export default VendingMachine;
