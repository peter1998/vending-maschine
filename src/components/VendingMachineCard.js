import { Card, CardContent } from "@mui/material";

const VendingMachineCard = ({ children }) => (
  <Card style={{ maxWidth: "500px", margin: "2rem auto" }}>
    <CardContent>{children}</CardContent>
  </Card>
);

export default VendingMachineCard;
