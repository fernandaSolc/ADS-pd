import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import CustomAvatar from "../customAvatar/customAvatar";

const SocialFeedback = () => {
  //TODO Tornar dinâmico a orientação do comentário

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={1.5}
        marginLeft={5}
        marginBottom={2}
      >
        <CustomAvatar />

        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#F6F6F6",
            borderRadius: "20px",
            minWidth: "70%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={1}
            padding={"1rem 0.5rem 0.5rem 2rem"}
          >
            <Box>
              <Typography
                fontFamily={"Raleway, sans-serif"}
                fontSize={"14px"}
                fontWeight={"bold"}
                color={"#7D7D7D"}
              >
                <span style={{ color: "#814BA2" }}>Elon Musk</span> enviou 3
                moedas para <span style={{ color: "#814BA2" }}>Fernanda</span>
              </Typography>

              <Divider
                sx={{
                  height: "2px",
                  backgroundColor: "#D8D8D8",
                  borderRadius: "1rem",
                }}
              />
            </Box>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"16px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Não teria finalizado aquele projeto no prazo se não fosse pela sua
              ajuda!!!
            </Typography>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"12px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Enviado há 2 horas atrás
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={1.5}
        marginRight={5}
        marginBottom={2}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#F6F6F6",
            borderRadius: "20px",
            minWidth: "70%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={1}
            padding={"1rem 0.5rem 0.5rem 2rem"}
          >
            <Box>
              <Typography
                fontFamily={"Raleway, sans-serif"}
                fontSize={"14px"}
                fontWeight={"bold"}
                color={"#7D7D7D"}
              >
                <span style={{ color: "#814BA2" }}>Elon Musk</span> enviou 3
                moedas para <span style={{ color: "#814BA2" }}>Fernanda</span>
              </Typography>

              <Divider
                sx={{
                  height: "2px",
                  backgroundColor: "#D8D8D8",
                  borderRadius: "1rem",
                }}
              />
            </Box>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"16px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Não teria finalizado aquele projeto no prazo se não fosse pela sua
              ajuda!!!
            </Typography>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"12px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Enviado há 2 horas atrás
            </Typography>
          </Box>
        </Paper>

        <CustomAvatar agent_name="Mannelz" agent_role="Teste" />
      </Box>

      {/* <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={1.5}
        marginLeft={5}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={0.5}
        >
          <Avatar
            src=""
            alt="Foto de Perfil do Agente"
            variant="circular"
            sx={{ width: "50px", height: "50px" }}
          />

          <Typography
            fontFamily={"Roboto, sans-serif"}
            fontSize={"12px"}
            fontWeight={"medium"}
            color={"#212121"}
          >
            Elon Musk
          </Typography>

          <Typography
            fontFamily={"Roboto, sans-serif"}
            fontSize={"10px"}
            fontWeight={"light"}
            color={"#212121"}
          >
            CEO of SpaceX
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{ backgroundColor: "#F6F6F6", borderRadius: "20px" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={1}
            padding={"1rem 0.5rem 0.5rem 2rem"}
          >
            <Box>
              <Typography
                fontFamily={"Raleway, sans-serif"}
                fontSize={"12px"}
                fontWeight={"bold"}
                color={"#7D7D7D"}
              >
                <span style={{ color: "#814BA2" }}>Elon Musk</span> enviou 3
                moedas para <span style={{ color: "#814BA2" }}>Fernanda</span>
              </Typography>

              <Divider
                sx={{
                  height: "2px",
                  backgroundColor: "#D8D8D8",
                  borderRadius: "1rem",
                }}
              />
            </Box>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"12px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Não teria finalizado aquele projeto no prazo se não fosse pela sua
              ajuda!!!
            </Typography>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"10px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Enviado há 2 horas atrás
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={1.5}
        marginRight={5}
      >
        <Paper
          elevation={3}
          sx={{ backgroundColor: "#F6F6F6", borderRadius: "20px" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={1}
            padding={"1rem 0.5rem 0.5rem 2rem"}
          >
            <Box>
              <Typography
                fontFamily={"Raleway, sans-serif"}
                fontSize={"12px"}
                fontWeight={"bold"}
                color={"#7D7D7D"}
              >
                <span style={{ color: "#814BA2" }}>Elon Musk</span> enviou 3
                moedas para <span style={{ color: "#814BA2" }}>Fernanda</span>
              </Typography>

              <Divider
                sx={{
                  height: "2px",
                  backgroundColor: "#D8D8D8",
                  borderRadius: "1rem",
                }}
              />
            </Box>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"12px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Não teria finalizado aquele projeto no prazo se não fosse pela sua
              ajuda!!!
            </Typography>

            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"10px"}
              fontWeight={"semiBold"}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              Enviado há 2 horas atrás
            </Typography>
          </Box>
        </Paper>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={0.5}
        >
          <Avatar
            src=""
            alt="Foto de Perfil do Agente"
            variant="circular"
            sx={{ width: "50px", height: "50px" }}
          />

          <Typography
            fontFamily={"Roboto, sans-serif"}
            fontSize={"12px"}
            fontWeight={"medium"}
            color={"#212121"}
          >
            Elon Musk
          </Typography>

          <Typography
            fontFamily={"Roboto, sans-serif"}
            fontSize={"10px"}
            fontWeight={"light"}
            color={"#212121"}
          >
            CEO of SpaceX
          </Typography>
        </Box>
      </Box> */}
    </>
  );
};

export default SocialFeedback;
