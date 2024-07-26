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
    <Box width={"80%"}>
      <Grid container rowSpacing={3}>
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
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Teste1
              </Typography>

              <IconButton>
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
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Teste2
              </Typography>

              <IconButton>
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
              borderRadius={"8px"}
            >
              <Typography flex={1} textAlign={"center"}>
                Teste3
              </Typography>

              <IconButton>
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
