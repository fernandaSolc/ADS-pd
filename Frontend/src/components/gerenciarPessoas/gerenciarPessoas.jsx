import React, { useState, useEffect } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Menu,
  MenuItem,
  IconButton,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconHori from "@mui/icons-material/MoreHoriz";

const GerenciarPessoas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pessoas, setPessoas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    nascimento: "",
    inicio: "",
    skills: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const pessoasSalvas = JSON.parse(localStorage.getItem("pessoas")) || [];
    setPessoas(pessoasSalvas);
  }, []);

  // Salvar no localStorage sempre que `pessoas` mudar
  useEffect(() => {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }, [pessoas]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setEditIndex(index);
      setFormData(pessoas[index]);
    } else {
      setFormData({
        nome: "",
        cargo: "",
        nascimento: "",
        inicio: "",
        skills: "",
      });
      setEditIndex(null);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      nome: "",
      cargo: "",
      nascimento: "",
      inicio: "",
      skills: "",
    });
    setEditIndex(null);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      // Atualizar pessoa existente
      const novasPessoas = [...pessoas];
      novasPessoas[editIndex] = formData;
      setPessoas(novasPessoas);
    } else {
      // Adicionar nova pessoa
      setPessoas([...pessoas, formData]);
    }
    handleCloseModal();
  };

  const handleDelete = (index) => {
    const novasPessoas = pessoas.filter((_, i) => i !== index);
    setPessoas(novasPessoas);
  };

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  return (
    <Box
      sx={{
        padding: "30px 50px",
        width: "1000px",
      }}
    >
      {/* Título, Barra de busca e botão de adicionar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: 18, fontWeight: "bold", marginRight: "50px" }}
        >
          Gerenciar Pessoas
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "70px",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <TextField
            label="Buscar..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            sx={{ flexGrow: 1, maxWidth: "600px" }}
          />
          <Fab
            color="primary"
            size="medium"
            onClick={() => handleOpenModal()}
            sx={{ boxShadow: 3 }}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Box>

      {/* Tabela de pessoas */}
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Cargo</TableCell>
              <TableCell align="center">Data de Nascimento</TableCell>
              <TableCell align="center">Data de Início</TableCell>
              <TableCell align="center">Skills</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pessoas
              .filter((pessoa) =>
                Object.values(pessoa)
                  .join(" ")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
              )
              .map((pessoa, index) => (
                <TableRow key={index}>
                  <TableCell>{pessoa.nome}</TableCell>
                  <TableCell align="center">{pessoa.cargo}</TableCell>
                  <TableCell align="center">{pessoa.nascimento}</TableCell>
                  <TableCell align="center">{pessoa.inicio}</TableCell>
                  <TableCell align="center">
                    <Button
                      contained
                      sx={{
                        borderRadius: "30px",
                        backgroundColor: "orange",
                        color: "white",
                      }}
                    >
                      {pessoa.skills}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={(e) => handleOpenMenu(e, index)}
                      size="small"
                    >
                      <IconHori />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={menuIndex === index}
                      onClose={handleCloseMenu}
                    >
                      <MenuItem onClick={() => handleOpenModal(index)}>
                        Editar
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleDelete(index);
                          handleCloseMenu();
                        }}
                      >
                        Excluir
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal para Adicionar/Editar Pessoa */}
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>
          {editIndex !== null ? "Editar Pessoa" : "Adicionar Pessoa"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
          <TextField
            label="Cargo"
            fullWidth
            margin="normal"
            value={formData.cargo}
            onChange={(e) =>
              setFormData({ ...formData, cargo: e.target.value })
            }
          />
          <TextField
            label="Data de Nascimento"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={formData.nascimento}
            onChange={(e) =>
              setFormData({ ...formData, nascimento: e.target.value })
            }
          />
          <TextField
            label="Data de Início"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={formData.inicio}
            onChange={(e) =>
              setFormData({ ...formData, inicio: e.target.value })
            }
          />
          <TextField
            label="Skills"
            fullWidth
            margin="normal"
            value={formData.skills}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GerenciarPessoas;
