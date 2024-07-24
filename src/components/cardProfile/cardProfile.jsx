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
        borderRadius: "40px",
      }}
    ></Paper>
  );
};

export default CardProfile;
