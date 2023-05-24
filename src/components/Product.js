// Product.js
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Styled Card for extra customization.
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
      style={{ opacity: product.inventory > 0 ? 1 : 0.5 }} // Reduce the opacity if the product is out of stock
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
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
