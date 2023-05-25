import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Product = ({ product, onSelectProduct }) => {
  return (
    <StyledCard
      onClick={() => product.inventory > 0 && onSelectProduct(product)}
      style={{ opacity: product.inventory > 0 ? 1 : 0.5 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={process.env.PUBLIC_URL + product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h6">${product.price.toFixed(2)}</Typography>
        <Typography variant="body1">Inventory: {product.inventory}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Product;
