import { Button } from "@mui/material";

const ResetProcess = ({ onResetProcess }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onResetProcess}>
      Return Coins
    </Button>
  );
};

export default ResetProcess;
