import React, { useState, useEffect } from "react";
import "./perfil.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import avatar from '../../assets/Avatar.png';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

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
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center',}}>
      <Box sx={{ width: '90vw', height: '80vh', maxWidth: '1400px', padding: 8, borderRadius: '8px', backgroundColor: 'rgba(99, 99, 102, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#4D5F73',
                color: '#FFF',
                borderRadius: '8px',
                height: '100%',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                opacity: 1,
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
              <Typography variant="h6">
                Fulano de Tal
              </Typography>
              <Typography variant="body2">
                email@email.com
              </Typography>
              <Typography variant="body2">
                Dev Pleno
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, background: 'linear-gradient(145deg, #4D5F73 4%, #7B93AD 64%, #4D5F73)', color: '#FFF', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', height: '100%', minHeight: '200px', opacity: 1 }}>
              <Typography variant="body2">
                Placeholder 1
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, backgroundColor: '#4D5F73', color: '#FFF', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', marginTop: 2, height: 'calc(100% - 220px)', minHeight: '300px', opacity: 1 }}>
              <Typography variant="body2">
                Placeholder 3
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
