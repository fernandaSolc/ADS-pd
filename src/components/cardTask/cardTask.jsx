import { Box, Divider, IconButton, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const CardTask = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      paddingX={1}
      paddingY={3}
      borderRadius={"14px"}
      sx={{ backgroundColor: "#F0F0F0" }}
    >
      <Box
        id="task-header"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" sx={{ flex: 1, textAlign: "center" }}>
          Task Category
        </Typography>

        <IconButton edge="end">
          <FilterListIcon />
        </IconButton>
      </Box>

      <Box width={"100%"}>
        <Divider variant="fullWidth" sx={{ backgroundColor: "#000" }} />
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
        <input type="checkbox" style={{ width: "30px", height: "30px" }} />

        <Typography>Task Title</Typography>
      </Box>
    </Box>
  );
};

export default CardTask;
