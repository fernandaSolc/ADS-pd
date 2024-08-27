import {
  Box,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardHeader,
} from "@mui/material";
import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import GerenciarTarefas from "../gerenciarTarefas/gerenciarTarefas.jsx";
import GerenciarPessoas from "../gerenciarPessoas/gerenciarPessoas.jsx";
import GerenciarLoja from "../gerenciarLoja/gerenciarLoja.jsx";
import GerenciarCalendario from "../gerenciarCalendario/cardAgenda.jsx";

const HomeNavegation = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <Paper
        elevation={3}
        sx={{
          paddingX: 1,
          paddingY: 3,
          backgroundColor: "#FFF",
          borderRadius: "40px",
          width: "auto",
          height: "auto",
          minWidth: "85vw",
          minHeight: "95vh",
          display: "flex",
        }}
      >
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 300,
            "& .MuiDrawer-paper": {
              position: "relative",
              fontSize: "16px",
            },
          }}
        >
          <List sx={{ marginTop: 10 }}>
            <ListItem
              button
              onClick={() => handleItemClick("gerenciarTarefas")}
            >
              <AppsIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Gerenciar tarefas" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("GerenciarPessoas")}
            >
              <PermIdentityIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Pessoas" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("GerenciarCalendario")}
            >
              <CalendarMonthIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Eventos" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("GerenciarLoja")}>
              <StorefrontIcon sx={{ margin: 1 }} />
              <ListItemText primary="Loja de prêmios" />
            </ListItem>
          </List>
        </Drawer>

        <Box component="main">
          {selectedComponent === "gerenciarTarefas" && <GerenciarTarefas />}
          {selectedComponent === "GerenciarPessoas" && <GerenciarPessoas />}
          {selectedComponent === "GerenciarLoja" && <GerenciarLoja />}
          {selectedComponent === "GerenciarCalendario" && (
            <GerenciarCalendario />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default HomeNavegation;
