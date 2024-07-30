import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const HeaderStore = () => {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            sx={{
              bgcolor: "white",
              marginRight: "5px",
              width: "50px",
              height: "45px",
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                width: "30px",
                height: "30px",
                color: "black",
              }}
            />
          </IconButton>
          <Typography variant="h6" color="#565151" sx={{ flexGrow: 1 }}>
            Loja de Produtos
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" sx={{ marginRight: 2 }}>
              Meu saldo: $30
            </Typography>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderStore;
