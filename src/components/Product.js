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
    <StyledCard onClick={() => onSelectProduct(product)}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h6">${product.price.toFixed(2)}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Product;
