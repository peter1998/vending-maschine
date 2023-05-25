import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "900px",
  margin: "2rem auto",
  borderRadius: "25px",
  background: "linear-gradient(to right, #11998e, #38ef7d)",
  boxShadow:
    "0 3px 5px 2px rgba(255, 105, 135, .3), 20px 20px 50px rgba(0, 0, 0, 0.5)",
  color: "white",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const VendingMachineCard = ({ children }) => (
  <StyledCard>
    <StyledCardContent>{children}</StyledCardContent>
  </StyledCard>
);

export default VendingMachineCard;
