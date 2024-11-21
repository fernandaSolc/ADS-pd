import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TextField,
  Modal,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import IconHori from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Store";

function createData(PRODUTO, QUANTIDADE, VALOR) {
  return { PRODUTO, QUANTIDADE, VALOR };
}

const initialRows = [
  createData("Moleton PD", "10", "50 Moedas"),
  createData("Garrafa de água PD", "10", "30 Moedas"),
  createData("Caneca PD", "10", "15 Moedas"),
];

export default function App() {
  const [rows, setRows] = useState(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [newProduct, setNewProduct] = useState({
    PRODUTO: "",
    QUANTIDADE: "",
    VALOR: "",
  });

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewProduct({ PRODUTO: "", QUANTIDADE: "", VALOR: "" });
    setEditingRowIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddOrUpdateProduct = () => {
    if (!newProduct.PRODUTO || !newProduct.QUANTIDADE || !newProduct.VALOR) {
      alert("Preencha todos os campos!");
      return;
    }

    if (editingRowIndex !== null) {
      // Atualiza a linha existente
      const updatedRows = [...rows];
      updatedRows[editingRowIndex] = { ...newProduct }; // Substitui a linha específica
      setRows(updatedRows);
    } else {
      // Adiciona uma nova linha
      setRows([...rows, { ...newProduct }]);
    }

    setOpenModal(false);
    setNewProduct({ PRODUTO: "", QUANTIDADE: "", VALOR: "" });
    setEditingRowIndex(null);
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setEditingRowIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setEditingRowIndex(null);
  };

  const handleEditRow = () => {
    const rowToEdit = rows[editingRowIndex];
    setNewProduct(rowToEdit); // Preenche o modal com os dados da linha
    setOpenModal(true);
    handleMenuClose();
  };

  const handleDeleteRow = () => {
    setRows(rows.filter((_, i) => i !== editingRowIndex));
    handleMenuClose();
  };

  return (
    <Box>
      {/* Cabeçalho */}
      <Box style={{ padding: 2, marginLeft: 35, marginBottom: 60 }}>
        <Typography sx={{ fontSize: 20 }}>
          <strong>Gerenciar Produtos</strong>
        </Typography>
      </Box>

      {/* Botões */}
      <Box sx={{ marginBottom: 5 }}>
        <Button
          onClick={handleOpenModal}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#B6B6B6",
            marginLeft: 5,
            color: "#FFFFFF",
            fontSize: "10px",
          }}
        >
          + Adicionar produto
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            backgroundColor: "#808080",
            marginLeft: 1,
            color: "#FFFFFF",
            fontSize: "10px",
          }}
        >
          Gerenciar resgates
        </Button>
      </Box>

      {/* Modal para Adicionar/Editar Produto */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            {editingRowIndex !== null ? "Editar Produto" : "Adicionar Produto"}
          </Typography>
          <TextField
            fullWidth
            label="Produto"
            name="PRODUTO"
            value={newProduct.PRODUTO}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Quantidade"
            name="QUANTIDADE"
            value={newProduct.QUANTIDADE}
            onChange={handleInputChange}
            margin="normal"
            type="number"
          />
          <TextField
            fullWidth
            label="Valor"
            name="VALOR"
            value={newProduct.VALOR}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button
            onClick={handleAddOrUpdateProduct}
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: "5px" }}
            fullWidth
          >
            {editingRowIndex !== null ? "Salvar Alterações" : "Adicionar"}
          </Button>
        </Box>
      </Modal>

      {/* Tabela */}
      <TableContainer
        component={Paper}
        style={{ maxHeight: "50vh", overflow: "auto", overflowX: "auto" }}
      >
        <Table stickyHeader aria-label="sticky table" style={{ minWidth: "65vw", maxWidth: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">PRODUTO</TableCell>
              <TableCell align="center">QUANTIDADE</TableCell>
              <TableCell align="center">VALOR</TableCell>
              <TableCell align="center">AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <PersonIcon sx={{ marginRight: 1, position: "relative", top: 5 }} />
                  {row.PRODUTO}
                </TableCell>
                <TableCell align="center">{row.QUANTIDADE}</TableCell>
                <TableCell align="center">{row.VALOR}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={(event) => handleMenuClick(event, index)}>
                    <IconHori />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Menu Dropdown */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditRow}>Editar</MenuItem>
        <MenuItem onClick={handleDeleteRow}>Deletar</MenuItem>
      </Menu>
    </Box>
  );
}
