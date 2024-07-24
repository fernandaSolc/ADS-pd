import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const CardFeedback = () => {
  return (
    <Card>
      <CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            fontFamily={"Raleway, sans-serif"}
            fontSize={"30px"}
            fontWeight={"bold"}
            color={"#7D7D7D"}
          >
            Mannelz
          </Typography>

          <Typography
            variant="subtitle1"
            fontFamily={"Raleway, sans-serif"}
            fontSize={"16px"}
            color={"#464646"}
          >
            3 moedas
          </Typography>
        </Box>

        <Box width={"100%"}>
          <Divider
            variant="fullWidth"
            sx={{
              height: "2px",
              backgroundColor: "#E4E4E4",
              borderRadius: "1rem",
            }}
          />
        </Box>

        <Typography
          marginTop={"1rem"}
          fontFamily={"Raleway, sans-serif"}
          fontSize={"24px"}
          color={"black"}
        >
          Lorem ipsum dolor sit amet
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFeedback;
