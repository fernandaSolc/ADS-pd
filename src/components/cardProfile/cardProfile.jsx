import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import CardFeedback from "../cardFeedback/cardFeedback";

const CardProfile = (agenteSucesso) => {
  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Paper
      elevation={3}
      sx={{
        paddingX: 1,
        paddingY: 3,
        backgroundColor: "rgba(142, 142, 142, 0.3)",
        borderRadius: "40px"
      }}
    >
      <Box sx={flexStyle}>
        <Box id="profile-info" sx={flexStyle} gap={0.5}>
          <Avatar
            src=""
            alt="Foto de Perfil do Agente"
            variant="rounded"
            sx={{ width: "250px", height: "250px" }}
          />

          <Typography variant="h3">Nome</Typography>

          <Typography variant="h5">Cargo</Typography>
        </Box>

        {/* Map para percorrer todas as medalhas do Agente */}
        <Box id="profile-badges">
          <h1>BADGES AQUI!</h1>
        </Box>

        <Box width={"100%"}>
          <Divider variant="middle" sx={{ backgroundColor: "#FF0" }} />
        </Box>

        {/* Map para percorrer todos os comentários do Agente */}
        <Box id="profile-feedback" sx={flexStyle}>
          <Typography variant="h3">Comentários recentes</Typography>

          <CardFeedback />
        </Box>
      </Box>
    </Paper>
  );
};

export default CardProfile;
