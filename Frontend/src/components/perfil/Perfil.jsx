import {
  Avatar,
  Button,
  Card,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "./perfil.scss";
import { CavaloIcon } from "../../../public/icon/cavalo";
import PDLogoSimple from "../../assets/pd-icon.svg";
import * as Tabs from "@radix-ui/react-tabs";

export default function PerfilCom() {
  return (
    <Container className="background-container">
      <Stack direction="row" gap="20px" px="30px">
        <Stack
          direction="column"
          gap="20px"
          sx={{
            width: "100vh",
            maxWidth: "400px",
            py: "60px",
          }}
        >
          <Card
            className="card"
            sx={{
              width: "100%",
              height: "auto",
              padding: "25px 25px",
              background: "#191a21",
              borderRadius: "15px",
            }}
          >
            <Stack direction="column" alignItems="center">
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <Typography
                variant="h5"
                color="#F0E7E7"
                fontFamily={"Raleway, sans-serif"}
                sx={{
                  pb: "30px",
                }}
              >
                Dev Pleno
              </Typography>
              <Typography
                variant="body1"
                color="#F0E7E7"
                fontFamily={"Raleway, sans-serif"}
                sx={{
                  pb: "10px",
                }}
              >
                devpleno@exemplo.com
              </Typography>
              <Typography
                variant="body1"
                color="#F0E7E7"
                fontFamily={"Raleway, sans-serif"}
              >
                18/09/2001
              </Typography>
            </Stack>
            <Stack alignItems="end" pt="20px">
              <Button
                sx={{
                  color: "#F0E7E7",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  boxShadow: "2px 3px 2px 2px rgba(0,0,0,1);",
                  "&:active": {
                    transform: "scale(.9)",
                  },
                }}
              >
                Editar perfil
              </Button>
            </Stack>
          </Card>
          <Card
            className="card"
            sx={{
              width: "100%",
              height: "auto",
              padding: "20px 25px",
              background: "#191a21",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h5" color="#fff">
              PD Coins
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="end">
              <img src="/icon/moneyIcon.svg" width={60} height={60} />
              <Typography variant="h2" color="#fff" fontWeight={700}>
                30
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="end"
              justifyContent="space-between"
              sx={{ pt: 2 }}
            >
              <img
                src={PDLogoSimple}
                alt="Projeto desenvolve logotipo"
                width={30}
                heigh={30}
              />
              <Button
                sx={{
                  color: "#F0E7E7",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  boxShadow: "2px 3px 2px 2px rgba(0,0,0,1);",
                  "&:active": {
                    transform: "scale(.9)",
                  },
                }}
              >
                Enviar Moedas
              </Button>
            </Stack>
          </Card>
        </Stack>
        <Stack
          direction="column"
          gap="20px"
          sx={{
            width: "100%",
            padding: "60px 0",
          }}
        >
          <Card
            className="card"
            sx={{
              width: "100%",
              height: "auto",
              padding: "40px 25px",
              background: "#191a21",
              borderRadius: "15px",
            }}
          >
            <Stack direction="row" gap="20px">
              <CavaloIcon />
              <CavaloIcon />
              <CavaloIcon />
            </Stack>
          </Card>
          <Card
            className="card"
            sx={{
              width: "100%",
              height: "auto",
              padding: "40px 25px",
              background: "#191a21",
              borderRadius: "15px",
              flex: 1,
            }}
          >
            <Tabs.Root>
              <Tabs.List className="tabs-list">
                <Tabs.Trigger value="achievements" className="tabTrigger">
                  Conquistas
                </Tabs.Trigger>
                <Tabs.Trigger value="skills" className="tabTrigger">
                  Skills
                </Tabs.Trigger>
                <Tabs.Trigger value="interests" className="tabTrigger">
                  Interesses
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="achievements">
                <Typography>CONTEUDO DA ABA CONQUISTAS</Typography>
              </Tabs.Content>
              <Tabs.Content value="skills">
                <Typography>CONTEUDO DA ABA SKILLS</Typography>
              </Tabs.Content>
              <Tabs.Content value="interests">
                <Typography>CONTEUDO DA ABA INTERESSES</Typography>
              </Tabs.Content>
            </Tabs.Root>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
