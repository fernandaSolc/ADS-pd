import {
  Avatar,
  Button,
  Card,
  Container,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "./perfil.scss";
import { CavaloIcon } from "../../../public/icon/cavalo";
import PDLogoSimple from "../../assets/pd-icon.svg";
import * as Tabs from "@radix-ui/react-tabs";

export default function PerfilCom() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [nome, setNome] = useState("Dev Pleno");
  const [email, setEmail] = useState("devpleno@exemplo.com");
  const [dataNascimento, setDataNascimento] = useState("18/09/2001");
  const [novoNome, setNovoNome] = useState(nome);
  const [novoEmail, setNovoEmail] = useState(email);
  const [novaDataNascimento, setNovaDataNascimento] = useState(dataNascimento);

  const [destinatario, setDestinatario] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [historicoTrocas, setHistoricoTrocas] = useState([]);

  // Carregar histórico do localStorage ao iniciar
  useEffect(() => {
    const historicoSalvo =
      JSON.parse(localStorage.getItem("historicoTrocas")) || [];
    setHistoricoTrocas(historicoSalvo);
  }, []);

  // Função para enviar moedas
  const enviarMoedas = () => {
    const novaEntrada = {
      remetente: "Usuário Atual", // Pode ser substituído pelo nome real do usuário logado
      destinatario,
      quantidade,
      mensagem,
      data: new Date().toISOString(),
    };

    // Atualiza o histórico no estado e no localStorage
    const novoHistorico = [novaEntrada, ...historicoTrocas];
    setHistoricoTrocas(novoHistorico);
    localStorage.setItem("historicoTrocas", JSON.stringify(novoHistorico));

    // Fechar o modal e limpar os campos
    setModalOpen(false);
    setDestinatario("");
    setQuantidade("");
    setMensagem("");
  };

  // Função para salvar as edições no perfil
  const salvarEdicoes = () => {
    setNome(novoNome);
    setEmail(novoEmail);
    setDataNascimento(novaDataNascimento);
    setEditProfileModalOpen(false);
  };

  return (
    <Container className="background-container">
      <Stack direction="row" gap="20px" px="30px">
        <Stack
          direction="column"
          gap="20px"
          sx={{
            width: "100vw",
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
                  paddingTop: "20px",
                }}
              >
                {nome}
              </Typography>
              <Typography
                variant="body1"
                color="#F0E7E7"
                fontFamily={"Raleway, sans-serif"}
                sx={{
                  pb: "10px",
                }}
              >
                {email}
              </Typography>
              <Typography
                variant="body1"
                color="#F0E7E7"
                fontFamily={"Raleway, sans-serif"}
              >
                {dataNascimento}
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
                onClick={() => setEditProfileModalOpen(true)}
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
                onClick={() => setModalOpen(true)}
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

      {/* Modal para Editar Perfil */}
      <Dialog
        open={editProfileModalOpen}
        onClose={() => setEditProfileModalOpen(false)}
      >
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
          <TextField
            label="E-mail"
            fullWidth
            margin="normal"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
          <TextField
            label="Data de Nascimento"
            fullWidth
            margin="normal"
            value={novaDataNascimento}
            onChange={(e) => setNovaDataNascimento(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditProfileModalOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={salvarEdicoes}>Salvar</Button>
        </DialogActions>
      </Dialog>

      {/* Modal para Enviar Moedas */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Enviar Moedas</DialogTitle>
        <DialogContent>
          <TextField
            label="Destinatário"
            fullWidth
            margin="normal"
            value={destinatario}
            onChange={(e) => setDestinatario(e.target.value)}
          />
          <TextField
            label="Quantidade de Moedas"
            fullWidth
            margin="normal"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <TextField
            label="Mensagem"
            fullWidth
            margin="normal"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Cancelar</Button>
          <Button onClick={enviarMoedas}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
