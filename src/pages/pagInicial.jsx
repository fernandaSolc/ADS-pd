import { Box, Grid } from "@mui/material";
import CardProfile from "../components/cardProfile/cardProfile";
import CardTaskBoard from "../components/cardTaskBoard/cardTaskBoard";
import HomeNavegation from "../components/homeNav/homeNav";

const PaginaInicial = () => {
  return (
    <Box marginX={3} marginY={5}>
      <Grid container spacing={2} direction={"row"}>
        <Grid item xs>
          
        </Grid>

        <Grid item xs={8}>
          <HomeNavegation />
        </Grid>

        <Grid item xs>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaginaInicial;
