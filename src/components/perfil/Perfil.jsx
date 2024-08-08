import React, { useState, useEffect } from "react";
import "./perfil.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import avatar from '../../assets/Avatar.png';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import csgoIcon from '../../assets/csgo-icon.png';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "50%", // make the image round
});

export default function PerfilCom() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Carregar a imagem do local storage quando o componente for montado
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setSelectedImage(base64String);
        localStorage.setItem("profileImage", base64String); // Salvar a imagem no local storage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Box sx={{ width: '90vw', height: '95vh', maxWidth: '1400px', padding: 8, borderRadius: '8px', backgroundColor: 'rgba(99, 99, 102, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#191A21',
                color: '#FFF',
                borderRadius: '8px',
                flexGrow: 1,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                opacity: 1,
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'relative', width: 80, height: 80, marginBottom: 2 }}>
                <Img
                  src={selectedImage || avatar}
                  alt="Foto de perfil"
                  width={80}
                  height={80}
                />
                <label className="label-avatar" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#FFF',
                  cursor: 'pointer',
                  borderRadius: '50%', // make the overlay round
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}>
                  <PhotoCameraIcon />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                </label>
              </Box>
              <Typography variant="h6">Dev Pleno</Typography>
              <Typography variant="body2">email@email.com</Typography>
              <Typography variant="body2">data de nascimento</Typography>
              <Box sx={{ mt: 2, width: '100%', position: 'absolute', bottom: 8, right: 8, textAlign: 'right' }}>
                <Button variant="contained" sx={{ backgroundColor: '#1D1E25', color: '#FFF' }}>Editar Perfil</Button>
              </Box>
            </Paper>
            <Paper
              sx={{
                p: 4,
                backgroundColor: '#191A21',
                color: '#FFF',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                mt: 2,
                opacity: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="body2">PD Coins</Typography>
              <Typography variant="h4" sx={{ color: '#00FF00' }}>$30</Typography>
              <Box sx={{ mt: 2, width: '100%', position: 'absolute', bottom: 8, right: 8, textAlign: 'right' }}>
                <Button variant="contained" sx={{ backgroundColor: '#1D1E25', color: '#FFF' }}>Enviar moedas</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Paper sx={{ p: 2, background: '#191A21', color: '#FFF', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', height: '110px', minHeight: '100px', opacity: 1 }}>
                  <Typography variant="body2">Placeholder 1</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row',mt: 2 }}>
                    <img src={csgoIcon} alt="CSGO Icon" width={50} height={50} />
                    <img src={csgoIcon} alt="CSGO Icon" width={50} height={50} />
                    <img src={csgoIcon} alt="CSGO Icon" width={50} height={50} />
                  </Box>
                </Paper>
              </Grid>
              
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, backgroundColor: '#191A21', color: '#FFF', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', height: '55vh', minHeight: 'calc(100% - 170px)', opacity: 1 }}>
                  <Typography variant="body2">Conquistas</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">React</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">Básico</Typography>
                      <Typography variant="body2">Intermediário</Typography>
                      <Typography variant="body2">Avançado</Typography>
                    </Box>
                    <Box sx={{ height: '5px', backgroundColor: '#FFF', mt: 1 }}>
                      <Box sx={{ width: '70%', height: '100%', backgroundColor: '#FF0000' }}></Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">Java</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">Básico</Typography>
                      <Typography variant="body2">Intermediário</Typography>
                      <Typography variant="body2">Avançado</Typography>
                    </Box>
                    <Box sx={{ height: '5px', backgroundColor: '#FFF', mt: 1 }}>
                      <Box sx={{ width: '50%', height: '100%', backgroundColor: '#FF0000' }}></Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
