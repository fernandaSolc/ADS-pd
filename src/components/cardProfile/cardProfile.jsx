import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import CardFeedback from "../cardFeedback/cardFeedback";
import Perfil from "../../pages/pagPerfil.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardProfile = () => {
  const navigate = useNavigate();

  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 1,
        paddingY: 3,
        backgroundColor: "rgba(142, 142, 142, 0.3)",
        borderRadius: "1.2rem",
        minWidth: "12vw", // Ajustar a largura mínima conforme necessário
        width: "auto", // Deixe o card ajustar automaticamente
        minHeight: "80vh", // Altura mínima
        height: "auto", // Altura automática para ajustar ao conteúdo
      }}
    >
      <Box sx={flexStyle}>
        <Box sx={flexStyle} gap="0.25rem">
          <Avatar
            src=""
            alt="Foto de Perfil do Agente"
            variant="rounded"
            sx={{ width: "5vw", height: "10vh" }}
            onClick={() => navigate("/perfil")}
            style={{ cursor: "pointer" }}
          />

          <Typography
            variant="h3"
            fontFamily={"Raleway, sans-serif"}
            fontSize={"1.3rem"}
            fontWeight={"bold"}
            color={"white"}
            onClick={() => navigate("/perfil")}
            style={{ cursor: "pointer" }}
          >
            Nome
          </Typography>

          <Typography
            variant="h5"
            fontFamily={"Raleway, sans-serif"}
            fontSize={"0.9rem"}
            fontWeight={"bold"}
            color={"white"}
            marginBottom={"1rem"}
          >
            Cargo
          </Typography>
        </Box>

        {/* Map para percorrer todas as medalhas do Agente */}
        <Box marginBottom={"1.5rem"} fontSize={"0.4rem"}>
          <h1>BADGES AQUI!</h1>
        </Box>

        <Box width={"100%"} sx={{ display: "flex", justifyContent: "center" }}>
          <Divider
            variant="fullWidth"
            sx={{
              height: "0.2vh",
              width: "8vw",
              backgroundColor: "white",
              borderRadius: "1rem",
            }}
          />
        </Box>

        {/* Map para percorrer todos os comentários do Agente */}
        <Box marginTop={"1rem"} sx={flexStyle} gap={"1.5rem"}>
          <Typography
            variant="h3"
            textAlign={"center"}
            fontFamily={"Raleway, sans-serif"}
            fontSize={"1rem"}
            fontWeight={"bold"}
            color={"white"}
          >
            Comentários
            <br /> recentes
          </Typography>

          <CardFeedback />
        </Box>
      </Box>
    </Paper>
  );
};

export default CardProfile;
