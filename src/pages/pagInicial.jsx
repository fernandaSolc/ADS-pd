import { Box, Grid } from "@mui/material";
import CardProfile from "../components/cardProfile/cardProfile";
import CardTaskBoard from "../components/cardTaskBoard/cardTaskBoard";
import HomeNavigation from "../components/homeNav/homeNav";
import CustomAppBar from "../components/customAppBar/customAppBar";

const PaginaInicial = () => {
  return (
    <>
      <CustomAppBar />

      <Box marginX="1rem">
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
            <HomeNavigation />
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <CardTaskBoard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PaginaInicial;