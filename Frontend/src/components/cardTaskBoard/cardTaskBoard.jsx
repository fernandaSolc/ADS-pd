import { Paper, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import CardTask from "../cardTask/cardTask";

const CardTaskBoard = () => {
  const [tarefas, setTarefas] = useState([]);

  // Carregar tarefas do localStorage
  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1.5rem",
        backgroundColor: "#F9F9F9",
        borderRadius: "1.5rem",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Raleway, sans-serif"
        fontWeight="bold"
        marginBottom="1.5rem"
        color="#333"
      >
        Minhas Tarefas
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        overflow="auto"
        maxHeight="60vh"
        paddingX="0.5rem"
      >
        {tarefas.length > 0 ? (
          tarefas.map((tarefa) => <CardTask key={tarefa.id} tarefa={tarefa} />)
        ) : (
          <Typography
            textAlign="center"
            color="#666"
            fontSize="0.9rem"
            fontFamily="Raleway, sans-serif"
          >
            Nenhuma tarefa disponível.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default CardTaskBoard;
