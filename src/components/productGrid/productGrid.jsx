import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/productCard.jsx";

const products = [
  {
    name: "Moletom PD",
    price: "$25",
    image: "https://via.placeholder.com/140",
  },
  {
    name: "Vale cashback",
    price: "$10",
    image: "https://via.placeholder.com/140",
  },
  {
    name: "Vale 50 reais",
    price: "$50",
    image: "https://via.placeholder.com/140",
  },
];

const ProductGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
