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
          <Typography>Mannelz</Typography>

          <Typography variant="subtitle1">3 moedas</Typography>
        </Box>

        <Divider variant="middle" sx={{ backgroundColor: "#FF0" }} />

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          voluptates voluptas est quidem quasi! Obcaecati, suscipit laborum at
          reprehenderit cum neque numquam voluptatibus doloribus, sapiente
          libero, porro aliquid dignissimos consequuntur?
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardFeedback;
