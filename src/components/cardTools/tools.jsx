import { Box, Grid, IconButton, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CardTools = () => {
  return (
    // <Box display={"flex"} flexWrap={"wrap"} width={"80%"}>
    //   <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    //     <Typography textAlign={"center"}>Teste1</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>

    //   <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    //     <Typography>Teste2</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>

    //   <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    //     <Typography>Teste3</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>
    // </Box>
    // <Box
    //   display="flex"
    //   justifyItems={"center"}
    //   alignItems={"center"}
    //   flexWrap="wrap"
    //   gap={2}
    //   width="80%"
    //   bgcolor={"red"}
    // >
    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     flexBasis="33%"
    //     bgcolor={"#7B93AD"}
    //   >
    //     <Typography textAlign="center">Teste1</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>

    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     flexBasis="33%"
    //     bgcolor={"#7B93AD"}
    //   >
    //     <Typography>Teste2</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>

    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     flexBasis="33%"
    //     bgcolor={"#7B93AD"}
    //   >
    //     <Typography>Teste3</Typography>

    //     <IconButton>
    //       <OpenInNewIcon />
    //     </IconButton>
    //   </Box>
    // </Box>
    <Box width={"100%"}>
      <Grid container rowSpacing={5}>
        {/* TODO Componentizar e criar um map para percorrer todas as ferramentas */}

        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Monitoria
              </Typography>

              <IconButton
                href="https://docs.google.com/spreadsheets/d/18ZIS_edNXyGgP0-jRQ_-5Ikvi_SwQi1AzY4RsRrnSTA/edit?gid=62481219#gid=62481219"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Cadastro de alunos
              </Typography>

              <IconButton
                href="https://dadosalunos.netlify.app/"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Alunos Itabira
              </Typography>

              <IconButton
                href="https://docs.google.com/spreadsheets/d/1SlSr59cWVKjHfYWKRSwkmTBs8WEatpR5NorefV3pkiM/edit?gid=1966860445#gid=1966860445"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        
        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Lançamento de notas
              </Typography>

              <IconButton
                href="https://postagem-notas.vercel.app/"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Alunos BD
              </Typography>

              <IconButton
                href="https://docs.google.com/spreadsheets/d/18ZIS_edNXyGgP0-jRQ_-5Ikvi_SwQi1AzY4RsRrnSTA/edit?gid=1671759979#gid=1671759979"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={5}
              width={"60%"}
              bgcolor={"#7B93AD"}
              color={"white"}
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Notas de alunos
              </Typography>

              <IconButton
                href="https://avaliacoespd.vercel.app/"
                target="_blank"
              >
                <OpenInNewIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardTools;
