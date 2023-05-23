import { Button, Typography } from "@mui/material";

const CoinInsertion = ({ onInsertCoin }) => {
  return (
    <div>
      <Typography variant="h6">Insert Coin:</Typography>
      {[0.01, 0.05, 0.1, 0.25, 0.5, 1].map((coin, index) => (
        <Button key={index} onClick={() => onInsertCoin(coin)}>
          ${coin}
        </Button>
      ))}
    </div>
  );
};

export default CoinInsertion;
