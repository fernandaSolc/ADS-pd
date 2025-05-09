import { Box, Typography, Card, Avatar, Stack, Divider } from "@mui/material";
import SocialFeedback from "../socialFeedback/socialFeedback";
import SocialNotification from "../socialNotification/socialNotification";
import { useState, useEffect } from "react";

const CardSocial = () => {
  const messages = [
    "Hoje a Larissa completa 1 ano de empresa. Deixe sua mensagem de parabenização",
  ];

  const [historicoTrocas, setHistoricoTrocas] = useState([]);

  // Carregar histórico do localStorage ao iniciar
  useEffect(() => {
    const historicoSalvo =
      JSON.parse(localStorage.getItem("historicoTrocas")) || [];
    setHistoricoTrocas(historicoSalvo);
  }, []);

  return (
    <Box>
      {/* Notificações */}
      {messages.map((message, index) => (
        <SocialNotification key={index} message={message} />
      ))}

      {/* Histórico de Trocas */}
      <Typography variant="h6" sx={{ marginY: 3, fontWeight: "bold" }}>
        Histórico de Trocas
      </Typography>
      {historicoTrocas.length > 0 ? (
        historicoTrocas.map((troca, index) => (
          <Card
            key={index}
            sx={{
              padding: "15px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Avatar sx={{ marginRight: "10px" }} />
            <Box>
              <Typography fontWeight="bold">
                {troca.remetente} enviou {troca.quantidade} moedas para{" "}
                {troca.destinatario}.
              </Typography>
              <Typography fontSize="14px" color="gray">
                {new Date(troca.data).toLocaleString()}
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <Typography>{troca.mensagem}</Typography>
            </Box>
          </Card>
        ))
      ) : (
        <Typography color="gray" fontSize="14px">
          Nenhuma troca registrada ainda.
        </Typography>
      )}

      {/* Feedback */}
      <SocialFeedback />
    </Box>
  );
};

export default CardSocial;
