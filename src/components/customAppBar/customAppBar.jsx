import { useState } from "react";
import { AppBar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CustomAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box marginY="1rem" marginX="0.5rem">
      <AppBar position="static" color="transparent">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* TODO Deixar o Arrow Icon visível apenas nas telas necessárias (renderização condicional) */}
          <IconButton>
            <ArrowBackIosNewIcon
              sx={{ width: "30px", height: "30px", color: "white" }}
            />
          </IconButton>

          <img
            width={"50vw"}
            height={"50vh"}
            src="src/assets/icons/pd-icon.png"
            alt="Ícone do Projeto Desenvolve"
          />

          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ width: "30px", height: "30px", color: "white" }} />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Teste1</MenuItem>
            <MenuItem onClick={handleClose}>Teste2</MenuItem>
            <MenuItem onClick={handleClose}>Teste3</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
