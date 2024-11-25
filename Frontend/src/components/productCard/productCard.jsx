import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ minWidth: 215 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ paddingX: "8px" }}>
        <Box display="flex" justifyContent={"space-around"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Typography variant="h6" fontSize={"15px"}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton sx={{ bgcolor: "#D6ECAC" }}>
              <ShoppingCartIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton color="secondary">
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
