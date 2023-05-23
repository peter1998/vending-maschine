import { Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const CoinButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  backgroundColor: "#FFD700",
  color: "black",
  margin: "5px",
  "&:hover": {
    backgroundColor: "#C0C0C0",
    transform: "scale(1.1)",
  },
}));

const CoinInsertion = ({ onInsertCoin }) => {
  return (
    <div>
      <Typography variant="h6">Insert Coin:</Typography>
      <Grid container spacing={2}>
        {[0.01, 0.05, 0.1, 0.25, 0.5, 1].map((coin, index) => (
          <Grid item xs={6} key={index}>
            <CoinButton onClick={() => onInsertCoin(coin)}>${coin}</CoinButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CoinInsertion;
