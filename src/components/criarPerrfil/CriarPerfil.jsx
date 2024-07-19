import React, { useState } from 'react';
import './criarPerfil.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import data from './data';

function CriarPerfil({ nomeUsuario }) {
  const [cargo, setCargo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  
  const handleCargoChange = (event) => {
    setCargo(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const handleSubmit = () => {
    const novoPerfil = {
      name: nomeUsuario,
      cargo: cargo,
      age: dataNascimento,
      profileImage: 'kcscs' // Pode ser ajustado conforme necessário
    };
    data.push(novoPerfil);
    console.log('Perfil criado:', novoPerfil);
  };

  return (
    <div className="quadradoRegistro">
      <h2>Criar Perfil</h2>
      <div>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Nome"
          value={nomeUsuario}
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>
      </div>
      <div>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="cargo-label">Cargo</InputLabel>
        <Select
          labelId="cargo-label"
          id="cargo-select"
          value={cargo}
          label="Cargo *"
          onChange={handleCargoChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Estagiária">Estagiária</MenuItem>
          <MenuItem value="Desenvolvedora Junior">Desenvolvedora Junior</MenuItem>
          <MenuItem value="Desenvolvedora Pleno">Desenvolvedora Pleno</MenuItem>
          <MenuItem value="Desenvolvedora Senior">Desenvolvedora Senior</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      </div>
      <div>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <TextField
          id="data-nascimento"
          label="Data de Nascimento"
          type="date"
          value={dataNascimento}
          onChange={handleDataNascimentoChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormHelperText>Obrigatorio</FormHelperText>
      </FormControl>
      </div>
      <div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Avançar
      </Button>
      </div>
    </div>
  );
}

export default CriarPerfil;
