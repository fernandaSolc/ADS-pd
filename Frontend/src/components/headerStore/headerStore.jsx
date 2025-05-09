import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Button,
  Badge,
} from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Store = () => {
  const [saldo, setSaldo] = useState(30);
  const [carrinho, setCarrinho] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const produtos = [
    { id: 1, nome: "Moletom PD", preco: 25, imagem: "/moletom.jpg" },
    { id: 2, nome: "Vale cashback", preco: 10, imagem: "/cashback.jpg" },
    { id: 3, nome: "Vale 50 reais", preco: 50, imagem: "/vale.jpg" },
    { id: 4, nome: "Vale 50 reais", preco: 50, imagem: "/vale.jpg" },
  ];

  const adicionarAoCarrinho = (produto) => {
    if (saldo >= produto.preco) {
      const itemExistente = carrinho.find((item) => item.id === produto.id);
      if (itemExistente) {
        setCarrinho(
          carrinho.map((item) =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item,
          ),
        );
      } else {
        setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
      }
      setSaldo(saldo - produto.preco);
    } else {
      alert("Saldo insuficiente para comprar este item!");
    }
  };

  const aumentarQuantidade = (produto) => {
    if (saldo >= produto.preco) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        ),
      );
      setSaldo(saldo - produto.preco);
    } else {
      alert("Saldo insuficiente!");
    }
  };

  const diminuirQuantidade = (produto) => {
    const itemExistente = carrinho.find((item) => item.id === produto.id);
    if (itemExistente.quantidade > 1) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item,
        ),
      );
      setSaldo(saldo + produto.preco);
    } else {
      removerDoCarrinho(produto.id);
    }
  };

  const removerDoCarrinho = (id) => {
    const item = carrinho.find((item) => item.id === id);
    setSaldo(saldo + item.preco * item.quantidade);
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const esvaziarCarrinho = () => {
    const totalDevolvido = carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0,
    );
    setSaldo(saldo + totalDevolvido);
    setCarrinho([]);
  };

  const alternarFavorito = (produto) => {
    if (favoritos.some((fav) => fav.id === produto.id)) {
      setFavoritos(favoritos.filter((fav) => fav.id !== produto.id));
    } else {
      setFavoritos([...favoritos, produto]);
    }
  };

  const abrirModalCarrinho = () => setModalOpen(true);
  const fecharModalCarrinho = () => setModalOpen(false);

  return (
    <Box padding={3}>
      {/* Cabeçalho */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={3}
        sx={{
          backgroundColor: "#F9F9F0",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Loja de Produtos
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <MonetizationOnIcon sx={{ color: "green" }} />
            <Typography variant="h6" color="black">
              Saldo: ${saldo}
            </Typography>
          </Box>
          <IconButton onClick={abrirModalCarrinho}>
            <Badge
              badgeContent={carrinho.reduce(
                (total, item) => total + item.quantidade,
                0,
              )}
              color="primary"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  top: 4,
                  right: 4,
                  backgroundColor: "#4caf50",
                  color: "white",
                  fontSize: "0.65rem",
                  fontWeight: "bold",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                },
              }}
            >
              <ShoppingCartIcon sx={{ color: "#333" }} />
            </Badge>
          </IconButton>
        </Box>
      </Box>

      {/* Lista de produtos */}
      <Grid container spacing={3}>
        {produtos.map((produto) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={produto.id}>
            <Card
              sx={{
                width: "100%",
                maxWidth: "300px", // Largura máxima para os cards
                margin: "auto",
                padding: 2,
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease-in-out", // Efeito de hover
                ":hover": {
                  transform: "scale(1.05)", // Leve aumento ao passar o mouse
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={produto.imagem}
                alt={produto.nome}
                sx={{ borderRadius: "10px" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  textAlign="center"
                  marginBottom="0.5rem"
                >
                  {produto.nome}
                </Typography>
                <Typography textAlign="center" color="gray" marginBottom="1rem">
                  ${produto.preco}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <IconButton
                    onClick={() => alternarFavorito(produto)}
                    sx={{
                      color: favoritos.some((fav) => fav.id === produto.id)
                        ? "purple"
                        : "gray",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => adicionarAoCarrinho(produto)}
                    sx={{
                      color: "green",
                      backgroundColor: "#e0f7fa",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal do Carrinho */}
      <Modal open={modalOpen} onClose={fecharModalCarrinho}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            backgroundColor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: "15px",
          }}
        >
          <Typography variant="h6" marginBottom={2}>
            Carrinho de Compras
          </Typography>
          {carrinho.length > 0 ? (
            <>
              {carrinho.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding={1}
                  borderBottom="1px solid #ddd"
                >
                  <Typography>
                    {item.nome} (${item.preco} x {item.quantidade})
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      onClick={() => diminuirQuantidade(item)}
                      sx={{ color: "red" }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantidade}</Typography>
                    <IconButton
                      onClick={() => aumentarQuantidade(item)}
                      sx={{ color: "green" }}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => removerDoCarrinho(item.id)}
                      sx={{ color: "gray" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              ))}
              <Box display="flex" justifyContent="space-between" marginTop={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#d3d3d3",
                    color: "#333",
                    ":hover": { backgroundColor: "#c0c0c0" },
                  }}
                  onClick={esvaziarCarrinho}
                >
                  Esvaziar Carrinho
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#556b2f",
                    color: "white",
                    ":hover": { backgroundColor: "#6b8e23" },
                  }}
                  onClick={fecharModalCarrinho}
                >
                  Fechar
                </Button>
              </Box>
            </>
          ) : (
            <Typography color="gray">Seu carrinho está vazio.</Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Store;
