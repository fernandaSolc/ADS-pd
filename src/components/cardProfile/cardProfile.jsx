import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import CardFeedback from "../cardFeedback/cardFeedback";

const CardProfile = () => {
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
        borderRadius: "40px",
      }}
    >
      <Box sx={flexStyle}>
        <Box sx={flexStyle} gap={0.5}>
          <Avatar
            src=""
            alt="Foto de Perfil do Agente"
            variant="rounded"
            sx={{ width: "150px", height: "150px" }}
          />

          <Typography
            variant="h3"
            fontFamily={"Raleway, sans-serif"}
            fontSize={"40px"}
            fontWeight={"bold"}
            color={"white"}
          >
            Nome
          </Typography>

          <Typography
            variant="h5"
            fontFamily={"Raleway, sans-serif"}
            fontSize={"16px"}
            fontWeight={"bold"}
            color={"white"}
          >
            Cargo
          </Typography>
        </Box>

        {/* Map para percorrer todas as medalhas do Agente */}
        <Box marginBottom={"2rem"}>
          <h1>BADGES AQUI!</h1>
        </Box>

        <Box width={"100%"}>
          <Divider
            variant="fullWidth"
            sx={{
              height: "3px",
              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          />
        </Box>

        {/* Map para percorrer todos os comentários do Agente */}
        <Box marginTop={"1rem"} sx={flexStyle} gap={"3rem"}>
          <Typography
            variant="h3"
            textAlign={"center"}
            fontFamily={"Raleway, sans-serif"}
            fontSize={"32px"}
            fontWeight={"bold"}
            color={"white"}
          >
            Comentários recentes
          </Typography>

          <CardFeedback />
        </Box>
      </Box>
    </Paper>
  );
};

export default CardProfile;
