import { Paper, Typography } from "@mui/material";
import CardTask from "../cardTask/cardTask";

const CardTaskBoard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 3,
        paddingY: 3,
        width: "15.5vw",
        backgroundColor: "rgba(142, 142, 142, 0.3)",
        borderRadius: "1.2rem",
      }}
    >
      <Typography
        marginBottom={"0.5rem"}
        variant="h3"
        textAlign={"center"}
        fontFamily={"Righteous, sans-serif"}
        fontSize={"1.3rem"}
        color={"white"}
      >
        TAREFAS
      </Typography>

      <CardTask />
    </Paper>
  );
};

export default CardTaskBoard;
