import {
  Box,
  Card,
  CardHeader,
  Fab,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const GerenciarTarefas = () => {
  // Estado do modal e dados da nova tarefa
  const [open, setOpen] = useState(false);
  const [modalTipo, setModalTipo] = useState("");
  const [novaTarefa, setNovaTarefa] = useState({
    titulo: "",
    participante: "",
    prazo: "",
    status: "",
    prioridade: "",
    tipo: "",
  });

  // Estados para editar tarefas
  const [editando, setEditando] = useState(false);
  const [tarefaEditandoId, setTarefaEditandoId] = useState(null);

  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Estado para o menu de três pontinhos
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  // Função para abrir o modal com o tipo apropriado
  const handleClickOpen = (tipo) => {
    setModalTipo(tipo);
    setEditando(false); // Novo modo
    setOpen(true);
  };

  // Função para abrir o menu
  const handleMenuOpen = (event, tarefa) => {
    setMenuAnchor(event.currentTarget);
    setTarefaSelecionada(tarefa);
  };

  // Função para fechar o menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setTarefaSelecionada(null);
  };

  // Função para editar uma tarefa
  const handleEditar = () => {
    setEditando(true);
    setTarefaEditandoId(tarefaSelecionada.id);
    setNovaTarefa({
      ...tarefaSelecionada,
    });
    setMenuAnchor(null); // Fecha o menu
    setOpen(true); // Abre o modal com os dados para edição
  };

  // Função para excluir uma tarefa
  const handleApagar = () => {
    const tarefasAtualizadas = tarefas.filter(
      (tarefa) => tarefa.id !== tarefaSelecionada.id,
    );
    setTarefas(tarefasAtualizadas);
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    handleMenuClose(); // Fecha o menu
  };

  // Função para fechar o modal
  const handleClose = () => {
    setOpen(false);
    setNovaTarefa({
      titulo: "",
      participante: "",
      prazo: "",
      status: "",
      prioridade: "",
      tipo: "",
    });
    setEditando(false);
    setTarefaEditandoId(null);
  };

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovaTarefa({ ...novaTarefa, [name]: value });
  };

  // Função para salvar a nova ou editar uma tarefa
  const handleSave = () => {
    if (editando) {
      // Atualiza a tarefa existente
      const tarefasAtualizadas = tarefas.map((tarefa) =>
        tarefa.id === tarefaEditandoId
          ? { ...tarefa, ...novaTarefa } // Atualiza apenas os campos editados
          : tarefa,
      );
      setTarefas(tarefasAtualizadas);
      localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    } else {
      // Adiciona uma nova tarefa
      const novaTarefaComId = {
        ...novaTarefa,
        tipo: modalTipo,
        id: Date.now(),
      };
      const tarefasAtualizadas = [...tarefas, novaTarefaComId];
      setTarefas(tarefasAtualizadas);
      localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    }
    handleClose(); // Fecha o modal
  };

  // Carregar as tarefas do localStorage quando o componente for montado
  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  // Função para formatar data no formato DD-MM-YYYY
  const formatarData = (dataISO) => {
    if (!dataISO) return ""; // Verifica se a data existe
    const [ano, mes, dia] = dataISO.split("-"); // Divide a data no formato YYYY-MM-DD
    return `${dia}-${mes}-${ano}`; // Retorna no formato DD-MM-YYYY
  };

  return (
    <Box component="main">
      <Box style={{ padding: 10, marginLeft: 35, marginBottom: 20 }}>
        <Typography sx={{ fontSize: 20 }}>
          <strong>Gerenciar Tarefas</strong>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", padding: 3 }}>
        {/* Card Tarefas Gerais */}
        <Card
          elevation={3}
          sx={{
            width: "20vw",
            height: "70vh",
            marginLeft: 2,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardHeader
              sx={{ marginTop: 1 }}
              title="Tarefas Gerais"
              titleTypographyProps={{ variant: "h6", fontSize: "0.875rem" }}
            />
            <Fab
              sx={{
                position: "absolute",
                right: 10,
                maxWidth: 35,
                maxHeight: 35,
                backgroundColor: "lime",
                margin: 1,
              }}
              aria-label="add"
              onClick={() => handleClickOpen("Tarefas Gerais")}
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>

          {/* Exibe as tarefas gerais */}
          {tarefas
            .filter((tarefa) => tarefa.tipo === "Tarefas Gerais")
            .map((tarefa) => (
              <Box
                key={tarefa.id}
                sx={{
                  backgroundColor: "#D4D4D4",
                  margin: 1,
                  borderRadius: "6px",
                  padding: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    {tarefa.titulo}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Prazo:</strong> {formatarData(tarefa.prazo)}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Status:</strong> {tarefa.status}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Prioridade:</strong> {tarefa.prioridade}
                  </Typography>
                </Box>
                <IconButton onClick={(e) => handleMenuOpen(e, tarefa)}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            ))}
        </Card>

        {/* Card Tarefas Individuais */}
        <Card
          elevation={3}
          sx={{
            width: "20vw",
            height: "70vh",
            marginLeft: 5,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardHeader
              sx={{ marginTop: 1 }}
              title="Tarefas Individuais"
              titleTypographyProps={{ variant: "h6", fontSize: "0.875rem" }}
            />
            <Fab
              sx={{
                position: "absolute",
                right: 10,
                maxWidth: 35,
                maxHeight: 35,
                backgroundColor: "lime",
                margin: 1,
              }}
              aria-label="add"
              onClick={() => handleClickOpen("Tarefas Individuais")}
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>

          {/* Exibe as tarefas individuais */}
          {tarefas
            .filter((tarefa) => tarefa.tipo === "Tarefas Individuais")
            .map((tarefa) => (
              <Box
                key={tarefa.id}
                sx={{
                  backgroundColor: "#D4D4D4",
                  margin: 1,
                  borderRadius: "6px",
                  padding: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    {tarefa.titulo}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Participante:</strong>{" "}
                    {tarefa.participante || "N/A"}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Prazo:</strong> {formatarData(tarefa.prazo)}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Status:</strong> {tarefa.status}
                  </Typography>
                  <Typography sx={{ fontSize: 10 }}>
                    <strong>Prioridade:</strong> {tarefa.prioridade}
                  </Typography>
                </Box>
                <IconButton onClick={(e) => handleMenuOpen(e, tarefa)}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            ))}
        </Card>

        {/* Card Histórico Semanal */}
        <Card
          elevation={3}
          sx={{
            width: "20vw",
            height: "70vh",
            marginLeft: 5,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardHeader
              sx={{ marginTop: 1 }}
              title="Histórico Semanal"
              titleTypographyProps={{ variant: "h6", fontSize: "0.875rem" }}
            />
          </Box>

          {/* Exibe todas as tarefas no histórico semanal */}
          {tarefas.map((tarefa) => (
            <Box
              key={tarefa.id}
              sx={{
                backgroundColor: "#D4D4D4",
                margin: 1,
                borderRadius: "6px",
                padding: 1,
              }}
            >
              <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                {tarefa.titulo}
              </Typography>
              <Typography sx={{ fontSize: 10 }}>
                <strong>Tipo:</strong> {tarefa.tipo}
              </Typography>
              {tarefa.participante && (
                <Typography sx={{ fontSize: 10 }}>
                  <strong>Participante:</strong> {tarefa.participante}
                </Typography>
              )}
              <Typography sx={{ fontSize: 10 }}>
                <strong>Prazo:</strong> {formatarData(tarefa.prazo)}
              </Typography>
              <Typography sx={{ fontSize: 10 }}>
                <strong>Status:</strong> {tarefa.status}
              </Typography>
              <Typography sx={{ fontSize: 10 }}>
                <strong>Prioridade:</strong> {tarefa.prioridade}
              </Typography>
            </Box>
          ))}
        </Card>
      </Box>

      {/* Menu de opções */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEditar}>Editar</MenuItem>
        <MenuItem onClick={handleApagar}>Apagar</MenuItem>
      </Menu>

      {/* Modal de Adicionar/Editar Tarefa */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editando ? "Editar Tarefa" : "Adicionar Nova Tarefa"}
        </DialogTitle>
        <DialogContent>
          {/* Campos comuns */}
          <TextField
            autoFocus
            margin="dense"
            label="Título"
            fullWidth
            variant="outlined"
            name="titulo"
            value={novaTarefa.titulo}
            onChange={handleChange}
          />
          {modalTipo === "Tarefas Individuais" && (
            <TextField
              margin="dense"
              label="Participante"
              fullWidth
              variant="outlined"
              name="participante"
              value={novaTarefa.participante}
              onChange={handleChange}
            />
          )}
          <TextField
            margin="dense"
            label="Prazo"
            fullWidth
            variant="outlined"
            name="prazo"
            type="date"
            value={novaTarefa.prazo}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={novaTarefa.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="Pendente">Pendente</MenuItem>
              <MenuItem value="Em andamento">Em andamento</MenuItem>
              <MenuItem value="Concluído">Concluído</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Prioridade</InputLabel>
            <Select
              name="prioridade"
              value={novaTarefa.prioridade}
              onChange={handleChange}
              label="Prioridade"
            >
              <MenuItem value="Baixa">Baixa</MenuItem>
              <MenuItem value="Média">Média</MenuItem>
              <MenuItem value="Alta">Alta</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GerenciarTarefas;
