import { Box, Checkbox, Divider, IconButton, Typography } from "@mui/material";

const CardTask = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      paddingX={2}
      paddingY={2}
      borderRadius={"0.6rem"}
      sx={{ backgroundColor: "#F0F0F0" }}
    >
      <Box
        id="task-header"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="h5"
          flex={1}
          marginBottom={"0.5rem"}
          textAlign={"center"}
          fontFamily={"Raleway, sans-serif"}
          fontSize={"1rem "}
          fontWeight={"bold"}
          color={"#292929"}
        >
          Geral
        </Typography>
      </Box>

      <Box width={"100%"}>
        <Divider
          variant="fullWidth"
          sx={{
            height: "0.3vh",
            backgroundColor: "#464646",
            borderRadius: "1rem",
          }}
        />
      </Box>

      {/* Map para percorrer as tarefas do Agente */}
      <Box
        id="task-body"
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={0.5}
        paddingTop={2}
      >
        <Checkbox
          color="default"
          sx={{
            transform: "scale(1.0)",
          }}
        />

        <Typography
          fontFamily={"Raleway, sans-serif"}
          fontSize={"0.9rem"}
          color={"#171717"}
        >
          Tarefa 1
        </Typography>
      </Box>
      <Box
        id="task-body"
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={0.5}
        paddingTop={2}
      >
        <Checkbox color="default" />

        <Typography
          fontFamily={"Raleway, sans-serif"}
          fontSize={"0.9rem"}
          color={"#171717"}
        >
          Tarefa 2
        </Typography>
      </Box>
      <Box
        id="task-body"
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={0.5}
        paddingTop={2}
      >
        <Checkbox color="default" />

        <Typography
          fontFamily={"Raleway, sans-serif"}
          fontSize={"0.9rem"}
          color={"#171717"}
        >
          Tarefa 3
        </Typography>
      </Box>
    </Box>
  );
};

export default CardTask;
