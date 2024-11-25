import { Avatar, Box, Typography } from "@mui/material";

const CustomAvatar = ({
  src,
  alt = "Foto de Perfil do Agente",
  agent_name = "Elon Musk",
  agent_role = "CEO of SpaceX",
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={0.5}
    >
      <Avatar
        src={src}
        alt={alt}
        variant="circular"
        sx={{ width: "50px", height: "50px" }}
      />

      <Typography
        fontFamily={"Roboto, sans-serif"}
        fontSize={"12px"}
        fontWeight={"medium"}
        color={"#212121"}
      >
        {agent_name}
      </Typography>

      <Typography
        fontFamily={"Roboto, sans-serif"}
        fontSize={"10px"}
        fontWeight={"light"}
        color={"#212121"}
      >
        {agent_role}
      </Typography>
    </Box>
  );
};

export default CustomAvatar;
