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
            height={"0.5vh"}
          >
            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"0.9rem"}
              fontWeight={"bold"}
              color={"#7D7D7D"}
              paddingBottom={"0.5em"}
            >
              Mannelz
            </Typography>

            <Typography
              variant="subtitle1"
              fontFamily={"Raleway, sans-serif"}
              fontSize={"0.75rem"}
              color={"#464646"}
              paddingBottom={"0.5rem"}
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
                marginTop: "0.5rem",
              }}
            />
          </Box>

          <Typography
            marginTop={"0.8rem"}
            fontFamily={"Raleway, sans-serif"}
            fontSize={"1.08rem"}
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
