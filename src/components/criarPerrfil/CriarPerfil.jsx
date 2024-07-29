import React, { useState } from "react";
import "./criarPerfil.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import data from "./data.js";

function CriarPerfil() {
  const [file, setFile] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cargo, setCargo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImageUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleNomeChange = (event) => {
    setNomeUsuario(event.target.value);
  };

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
      profileImage: profileImageUrl,
    };
    data.push(novoPerfil);
    console.log("Perfil criado:", novoPerfil);
  };

  return (
    <div className="quadradoRegistro">
      <h2>Criar Perfil</h2>
      <div className="fileProfile">
        <label
          id="estilizarImg"
          htmlFor="perfil"
          style={{
            backgroundImage: `url(${profileImageUrl})`,
          }}
        >
          {!profileImageUrl && "Upload"}
        </label>
        <input type="file" id="perfil" name="perfil" onChange={onFileChange} />
        {message && <p>{message}</p>}
      </div>
      <div>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <TextField
            label="Nome"
            id="string"
            value={nomeUsuario}
            onChange={handleNomeChange}
          />
        </FormControl>
      </div>
      <div>
        <FormControl required sx={{ m: 2, minWidth: 223 }}>
          <InputLabel id="cargo-label">Cargo</InputLabel>
          <Select
            labelId="cargo-label"
            id="cargo-select"
            value={cargo}
            label="Cargo"
            onChange={handleCargoChange}
          >
            <MenuItem value="">
              <em>Selecione</em>
            </MenuItem>
            <MenuItem value="Estagiário(a) Psicologia">
              Estagiário(a) Psicologia
            </MenuItem>
            <MenuItem value="Estagiário(a) Programação">
              Estagiário(a) Programação
            </MenuItem>
            <MenuItem value="Desenvolvedor Fullstack">
              Desenvolvedor Fullstack
            </MenuItem>
            <MenuItem value="Líder de Atendimento">
              Líder de Atendimento
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl required sx={{ m: 2, minWidth: 223 }}>
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
        </FormControl>
      </div>
      <div>
        <Button
          id="botaoAvancar"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
}

export default CriarPerfil;
