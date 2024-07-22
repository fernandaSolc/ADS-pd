import { Box, Paper, Tab, Tabs } from "@mui/material";

const HomeNavegation = () => {
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
        src="src/assets/pd-icon.png"
        alt="Ícone do Projeto Desenvolve"
      ></img>

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
        <Tabs value={"1"} onChange={() => console.log("Opa")} centered>
          <Tab label="Agenda"></Tab>
          <Tab label="Social"></Tab>
          <Tab label="Tarefas"></Tab>
          <Tab label="Ferramentas"></Tab>
        </Tabs>
      </Paper>
    </Box>
  );
};

export default HomeNavegation;
