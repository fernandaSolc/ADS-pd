import HeaderStore from "../components/headerStore/headerStore.jsx";
import { Box } from "@mui/material";
import ProductGrid from "../components/productGrid/productGrid.jsx";

const PaginaLoja = () => {
  return (
    <Box
      width={"80%"}
      height={"80vh"}
      margin={"auto"}
      bgcolor={"white"}
      sx={{
        borderBottomRightRadius: "15px",
        borderBottomLeftRadius: "15px",
      }}
    >
      <HeaderStore />
      <ProductGrid />
    </Box>
  );
};

export default PaginaLoja;
