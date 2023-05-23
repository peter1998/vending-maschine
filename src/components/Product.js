import { Button, Card, CardContent, Typography } from "@mui/material";

const Product = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <Button variant="contained" color="primary">
          Buy
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
