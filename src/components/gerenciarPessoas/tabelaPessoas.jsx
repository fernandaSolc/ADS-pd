// tabelaLoja.jsx
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabela = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{width: "60vw"}}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Habilidades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.cargo}</TableCell>
              <TableCell>{item.idade}</TableCell>
              <TableCell>{item.habilidades}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabela;
