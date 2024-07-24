import {
  Box,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StorefrontIcon from "@mui/icons-material/Storefront";

const HomeNavegation = () => {
  const [tabValue, setTabValue] = useState(0);

  const renderComponent = (tabValue) => {
    switch (tabValue) {
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <img
        width={"100px"}
        height={"100px"}
        src="src/assets/icons/pd-icon.png"
        alt="Ícone do Projeto Desenvolve"
      />

      <Paper
        elevation={3}
        sx={{
          paddingX: 1,
          paddingY: 3,
          backgroundColor: "#FFF",
          borderRadius: "40px",
          width: "80vw",
          height: "80vh",
          display: "flex",
        }}
      >
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 200,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 200,
              boxSizing: "border-box",
              position: "relative",
            },
          }}
        >
          <List>
            <ListItem button>
              <AppsIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Gerenciar tarefas" />
            </ListItem>
            <ListItem button>
              <PermIdentityIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Pessoas" />
            </ListItem>
            <ListItem button>
              <CalendarMonthIcon sx={{ margin: 1 }} />{" "}
              <ListItemText primary="Eventos" />
            </ListItem>
            <ListItem button>
              <StorefrontIcon sx={{ margin: 1 }} />
              <ListItemText primary="Loja de prêmios" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Conteúdo principal aqui */}
          {renderComponent(tabValue)}
        </Box>
      </Paper>
    </Box>
  );
};

export default HomeNavegation;
