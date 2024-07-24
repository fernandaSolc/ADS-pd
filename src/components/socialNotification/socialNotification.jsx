import { Alert, Box } from "@mui/material";

const SocialNotification = ({ message }) => {
  // TODO Estilizar o alerta

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={2}
      paddingX={"50%"}
    >
      <Alert sx={{ minWidth: "750px", textAlign: "justify" }}>{message}</Alert>
    </Box>
  );
};

export default SocialNotification;
