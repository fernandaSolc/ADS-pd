import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CardSocial from "../cardSocial/cardSocial";

const HomeNavegation = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  const renderComponent = (tabValue) => {
    switch (tabValue) {
      case 0:
        return <h1>Agenda</h1>;

      case 1:
        return <CardSocial />;

      case 2:
        return <h1>Tarefas</h1>;

      case 3:
        return <h1>Ferramentas</h1>;
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
          width: "100%",
          height: "80vh",
        }}
      >
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontFamily: "Raleway, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#292929",
              },

              "& .Mui-selected": {
                color: "#292929",
              },

              "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                color: "#292929",
              },

              "& .MuiTabs-indicator": {
                backgroundColor: "#292929",
              },
            }}
          >
            <Tab label="Agenda" />
            <Tab label="Social" />
            <Tab label="Tarefas" />
            <Tab label="Ferramentas" />
          </Tabs>
        </Box>

        <Box>{renderComponent(tabValue)}</Box>
      </Paper>
    </Box>
  );
};

export default HomeNavegation;
