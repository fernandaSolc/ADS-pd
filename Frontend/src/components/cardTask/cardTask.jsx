import { Box, Divider, Typography } from "@mui/material";

const CardTask = ({ tarefa }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="1rem"
      borderRadius="1rem"
      sx={{
        backgroundColor: "#FFF",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E0E0E0",
      }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight="bold"
        color="#333"
        marginBottom="0.5rem"
        fontFamily="Raleway, sans-serif"
      >
        {tarefa.titulo || "Título da Tarefa"}
      </Typography>

      <Divider
        sx={{
          marginY: "0.5rem",
          backgroundColor: "#E0E0E0",
          height: "1px",
        }}
      />

      <Typography
        fontSize="0.9rem"
        fontFamily="Raleway, sans-serif"
        color="#555"
      >
        <strong>Prioridade:</strong> {tarefa.prioridade || "N/A"}
      </Typography>
      <Typography
        fontSize="0.9rem"
        fontFamily="Raleway, sans-serif"
        color="#555"
      >
        <strong>Status:</strong> {tarefa.status || "N/A"}
      </Typography>
      <Typography
        fontSize="0.9rem"
        fontFamily="Raleway, sans-serif"
        color="#555"
      >
        <strong>Prazo:</strong> {tarefa.prazo || "N/A"}
      </Typography>
    </Box>
  );
};

export default CardTask;
