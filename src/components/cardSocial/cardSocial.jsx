import { Alert, Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import SocialFeedback from "../socialFeedback/socialFeedback";
import SocialNotification from "../socialNotification/socialNotification";

const CardSocial = () => {
  const messages = [
    "Hoje a Larissa completa 1 ano de empresa. Deixe sua mensagem de parabenização",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nihil ea dolorum doloremque molestias, neque repellat saepe suscipit illum inventore maxime error libero, maiores sint sapiente odit non labore hic.",
  ];

  return (
    <Box marginTop={7}>
      {messages.map((message) => (
        <SocialNotification message={message} />
      ))}

      <SocialFeedback />
    </Box>
  );
};

export default CardSocial;
