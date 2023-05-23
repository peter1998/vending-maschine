import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import Product from "./Product";
import { Grid } from "@mui/material";

const ProductList = ({ onSelectProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Product product={product} onSelectProduct={onSelectProduct} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
