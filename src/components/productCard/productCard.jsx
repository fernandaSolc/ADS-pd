import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton color="secondary">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
