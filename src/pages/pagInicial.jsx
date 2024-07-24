import { Box, Grid } from "@mui/material";
import CardProfile from "../components/cardProfile/cardProfile";
import CardTaskBoard from "../components/cardTaskBoard/cardTaskBoard";
import HomeNavegation from "../components/homeNav/homeNav";

const PaginaInicial = () => {
  return (
    <Box marginX={2} marginY={4}>
      <Grid container spacing={5} direction={"row"}>
        <Grid item xs={2}>
          <CardProfile />
        </Grid>

        <Grid item xs={8}>
          <HomeNavegation />
        </Grid>

        <Grid item xs={2}>
          <CardTaskBoard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaginaInicial;