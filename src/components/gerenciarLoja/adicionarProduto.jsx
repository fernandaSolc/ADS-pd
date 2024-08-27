// AddDataForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const AddDataForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data', {
        nome: name,
        preco: price,
        categoria: category
      });
      setSuccess('Dados adicionados com sucesso!');
      setName('');
      setPrice('');
      setCategory('');

    } catch (err) {
      setError('Erro ao adicionar dados: ' + err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "60vw", marginTop: '3vh' }}>
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Adicionar Produto
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Preço"
          variant="outlined"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextField
          label="Categoria"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Adicionar
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Box>
    </Box>
  );
};

export default AddDataForm;
