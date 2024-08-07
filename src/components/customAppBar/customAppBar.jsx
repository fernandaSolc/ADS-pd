import { useState, useEffect } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";

const CustomAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curLocation, setCurLocation] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);

  // Função para lidar com a ancoragem do menu
  const handleAnchorEl = (e) => {
    setAnchorEl(e.currentTarget);
  };

  // Função para lidar com a seleção de uma página no menu hambúrguer
  const handleSelectPage = (e) => {
    switch (e.currentTarget.tabIndex) {
      case 0:
        navigate("/adm");
        break;

      case 1:
        navigate("integrantes");
        break;

      case 2:
        navigate("/loja");
        break;

      case 3:
        navigate("/perfil");
        break;
    }

    setAnchorEl(null);
  };

  const handleIconClick = () => {
    location.pathname !== "/inicio" ? navigate("inicio") : null;
  };

  useEffect(() => {
    setCurLocation(location.pathname);
  }, []);

  return (
    <Box
      marginY="1rem"
      marginX="0.5rem"
      display={() => (location.pathname === "/" ? "none" : "flex")}
    >
      <AppBar
        position="static"
        color="transparent"
        sx={{
          "&.MuiAppBar-root": {
            border: "none",
            boxShadow: 0,
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={"1rem"}
        >
          {/* TODO Deixar o Arrow Icon visível apenas nas telas necessárias (renderização condicional) */}
          {curLocation !== "/inicio" && (
            <IconButton onClick={handleIconClick}>
              <ArrowBackIosNewIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                }}
              />
            </IconButton>
          )}

          <IconButton onClick={() => navigate("/inicio")}>
            <img
              width={"50vw"}
              height={"50vh"}
              src="src/assets/icons/pd-icon.png"
              alt="Ícone do Projeto Desenvolve"
            />
          </IconButton>

          <IconButton onClick={handleAnchorEl}>
            <MenuIcon
              sx={{
                width: "30px",
                height: "30px",
                color: "white",
              }}
            />
          </IconButton>

          {/* TODO Criar um componente a parte */}
          <Menu anchorEl={anchorEl} open={open} onClose={handleSelectPage}>
            <MenuList>
              {/* TODO Renderização condicional somente para administradores */}
              <MenuItem tabIndex={0} onClick={handleSelectPage}>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"#515151"}>
                    Administrador
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem tabIndex={1} onClick={handleSelectPage}>
                <ListItemIcon>
                  <Groups3Icon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"#515151"}>
                    Integrantes
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem tabIndex={2} onClick={handleSelectPage}>
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"#515151"}>
                    PD Store
                  </Typography>
                </ListItemText>
              </MenuItem>

              <Divider variant="middle" color="black" />

              <MenuItem tabIndex={3} onClick={handleSelectPage}>
                <ListItemIcon>
                  <PermIdentityIcon sx={{ color: "black" }} />
                </ListItemIcon>

                <ListItemText>
                  <Typography fontWeight={"bold"} color={"#515151"}>
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
