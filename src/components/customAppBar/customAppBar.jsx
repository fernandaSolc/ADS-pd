import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingsIcon from "@mui/icons-material/Settings";
import Groups3Icon from "@mui/icons-material/Groups3";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

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

          {/* TODO Criar um componente a parte */}
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuList>
              {/* TODO Renderização condicional somente para administradores */}
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"black"}>
                    Administrador
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Groups3Icon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"black"}>
                    Integrantes
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"black"}>
                    PD Store
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PermIdentityIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"black"}>
                    Perfil
                  </Typography>
                </ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
