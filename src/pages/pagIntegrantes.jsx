import { Box, Typography } from "@mui/material";
import MembersList from "../components/membersList/membersList";

const PaginaIntegrantes = () => {
  return (
    <Box
      bgcolor={"white"}
      width={"80vw"}
      height={"80vh"}
      borderRadius={"42px"}
      margin={"auto"}
      paddingX={5}
      paddingY={3}
    >
      <Typography
        variant="h1"
        fontFamily={"Lato, sans-serif"}
        fontSize={"1.5rem"}
        fontWeight={"extraBold"}
        color={"#292929"}
        textAlign={"center"}
      >
        Integrantes
      </Typography>

      <MembersList />
    </Box>
  );
};

export default PaginaIntegrantes;
