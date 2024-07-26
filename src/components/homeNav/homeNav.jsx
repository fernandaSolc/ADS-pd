import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CardSocial from "../cardSocial/cardSocial";
import CardTools from "../cardTools/tools";

const HomeNavigation = () => {
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
        return <CardTools />;
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "40px",
          width: "65vw",
          height: "80vh",
        }}
      >
        <Box marginBottom={3}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontFamily: "Raleway, sans-serif",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#292929",
                paddingX: "0",
                marginX: "2.3rem",
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

        <Box
          maxHeight={"80vh"}
          overflow={"auto"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {renderComponent(tabValue)}
        </Box>
      </Paper>
    </Box>
  );
};

export default HomeNavigation;
