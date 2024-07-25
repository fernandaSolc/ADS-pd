import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const CardFeedback = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"0.9rem"}
              fontWeight={"bold"}
              color={"#7D7D7D"}
            >
              Mannelz
            </Typography>

            <Typography
              variant="subtitle1"
              fontFamily={"Raleway, sans-serif"}
              fontSize={"0.75rem"}
              color={"#464646"}
            >
              3 moedas
            </Typography>
          </Box>

          <Box width={"100%"}>
            <Divider
              variant="fullWidth"
              sx={{
                height: "0.2vh",
                backgroundColor: "#E4E4E4",
                borderRadius: "1rem",
              }}
            />
          </Box>

          <Typography
            marginTop={"1rem"}
            fontFamily={"Raleway, sans-serif"}
            fontSize={"1.2rem"}
            color={"black"}
          >
            Lorem ipsum dolor sit amet
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardFeedback;
