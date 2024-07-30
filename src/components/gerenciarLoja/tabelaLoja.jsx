import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";
import Button from "@mui/material/Button";
import IconHori from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Store";

function createData(PRODUTO, QUANTIDADE, VALOR, INICIO, BUY, OPTIONS) {
  return { PRODUTO, QUANTIDADE, VALOR, INICIO, BUY, OPTIONS };
}

const rows = [
  createData(
    "Moleton PD",
    "10",
    "50 Moedas",
    "30 Moedas",
    <Button contained sx={{ borderRadius: "30px", backgroundColor: "lime" }}>
      {" "}
      RESGATAR
    </Button>,
    <IconHori />
  ),
  createData(
    "Garrafa de água PD",
    "10",
    "30 Moedas",
    "30 Moedas",
    <Button contained sx={{ borderRadius: "30px", backgroundColor: "lime" }}>
      {" "}
      RESGATAR
    </Button>,
    <IconHori />
  ),
  createData(
    "Caneca PD",
    "10",
    "15 Moedas",
    "30 Moedas",
    <Button contained sx={{ borderRadius: "30px", backgroundColor: "lime" }}>
      {" "}
      RESGATAR
    </Button>,
    <IconHori />
  ),
  createData(
    "Vale Home-office",
    "-",
    "50 Moedas",
    "30 Moedas",
    <Button contained sx={{ borderRadius: "30px", backgroundColor: "lime" }}>
      {" "}
      RESGATAR
    </Button>,
    <IconHori />
  ),
  createData(
    "Vale 50% OFF iFood",
    "10",
    "10 Moedas",
    "30 Moedas",
    <Button contained sx={{ borderRadius: "30px", backgroundColor: "lime" }}>
      {" "}
      RESGATAR
    </Button>,
    <IconHori />
  ),

  ``,
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ position: "relative", top: -20 }}>
      <Box
        style={{
          padding: 10,
          marginLeft: 35,
          marginBottom: 20,

        }}
      >
        <Typography sx={{ fontSize: 20, marginTop: 5, marginBottom: 5 }}>
          <strong>Gerenciador de produtos</strong>
        </Typography>

      </Box> 

      <Button contained sx={{ borderRadius: "10px", backgroundColor: "#B6B6B6", marginLeft: 5, color: "#FFFFFF", fontSize: "10px" }}>
      + Adicionar produto
    </Button>

    <Button contained sx={{ borderRadius: "10px", backgroundColor: "#808080", marginLeft: 1, color: "#FFFFFF", fontSize: "10px" }}>
      Gerenciar resgates
    </Button>

      <TableContainer
        style={{ maxHeight: "50vh", overflow: "auto", overflowX: "auto" }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ minWidth: "65vw", maxWidth: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">PRODUTO</TableCell>
              <TableCell align="center">QUANTIDADE</TableCell>
              <TableCell align="center">VALOR</TableCell>
              <TableCell align="center"></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) => {
                const values = Object.values(row);
                return values.some((value) =>
                  value
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                );
              })
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <PersonIcon
                      sx={{ marginRight: 1, position: "relative", top: 5 }}
                    />
                    {row.PRODUTO}
                  </TableCell>

                  <TableCell align="center">{row.QUANTIDADE}</TableCell>
                  <TableCell align="center">{row.VALOR}</TableCell>
                  <TableCell align="center">{row.OPTIONS}</TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
