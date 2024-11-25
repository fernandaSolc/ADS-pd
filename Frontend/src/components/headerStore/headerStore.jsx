import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const HeaderStore = () => {
  return (
    <AppBar
      position="static"
      sx={{
        "&.MuiAppBar-root": {
          backgroundColor: "lightgray",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="#565151" sx={{ flexGrow: 1 }}>
          Loja de Produtos
        </Typography>
        <Box display="flex" alignItems="center">
          <Box marginRight={2}>
            <Typography variant="h6" sx={{ color: "black" }}>
              Meu saldo:
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={0.5}
            >
              <MonetizationOnIcon sx={{ color: "green" }} />
              <Typography color={"black"}>30</Typography>
            </Box>
          </Box>
          <IconButton>
            <ShoppingBagOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderStore;
