import { Box, Grid } from "@mui/material";
import CardProfile from "../components/cardProfile/cardProfile";
import CardTaskBoard from "../components/cardTaskBoard/cardTaskBoard";
import HomeNavegation from "../components/homeNav/homeNav";

const PaginaInicial = () => {
  return (
    <Box marginX={2} marginY={2}>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <Grid item xs={12} sm={12} md={2}>
          <CardProfile />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <HomeNavegation />
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <CardTaskBoard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaginaInicial;
