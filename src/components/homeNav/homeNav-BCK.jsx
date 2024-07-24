import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CardSocialFeedback from "../cardSocialFeedback/cardSocialFeedback";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HomeNavegation = () => {
  const [tabValue, setTabValue] = useState(0);
  const [monitores, setMonitores] = useState("");
  const [comment, setComment] = useState("");

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  const handleMonitores = (event) => {
    setMonitores(event.target.value);
  };

  const handleSubmitGrade = () => {
  };

  const renderComponent = (tabValue) => {
    switch (tabValue) {
      
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <img
        width={"100px"}
        height={"100px"}
        src="src/assets/icons/pd-icon.png"
        alt="Ícone do Projeto Desenvolve"
      />

      <Paper
        elevation={3}
        sx={{
          paddingX: 1,
          paddingY: 3,
          backgroundColor: "#FFF",
          borderRadius: "40px",
          width: "100%",
          height: "80vh",
        }}
      >
        <Box>
            <Box
              style={{
                boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .3)",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                border: "1px solid #ccc",
                borderRadius: "30px",
                height: '80vh',
                
              }}
            >
            <Box
                style={{
                  margin: 20,
                  fontFamily: "Rajdhani",
                  fontSize: 12,
                  marginTop: "3vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                Administrador <strong>Projeto Desenvolve (ALL CITIES)</strong>
              
              </Box>

             


              <Box>
                <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Monitores
                  </InputLabel>
                  <Select
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={monitores}
                    label="Disciplina"
                    onChange={handleMonitores}
                  >
                    <MenuItem value={1}>João </MenuItem>
                    <MenuItem value={2}>Rafael </MenuItem>
                    <MenuItem value={3}>Amatoshi </MenuItem>
                    <MenuItem value={4}>Emannuel </MenuItem>
                    <MenuItem value={5}>Fernanda </MenuItem>
                    <MenuItem value={6}>Nislayne </MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{marginTop: 1}}>
                  <InputLabel id="demo-simple-select-label">
                    Monitores
                  </InputLabel>
                  <Select
                    color="secondary"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={monitores}
                    label="Disciplina"
                    onChange={handleMonitores}
                  >
                    <MenuItem value={1}>João </MenuItem>
                    <MenuItem value={2}>Rafael </MenuItem>
                    <MenuItem value={3}>Amatoshi </MenuItem>
                    <MenuItem value={4}>Emannuel </MenuItem>
                    <MenuItem value={5}>Fernanda </MenuItem>
                    <MenuItem value={6}>Nislayne </MenuItem>
                  </Select>
                </FormControl>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Observação"
                    
                    color="secondary"
                    multiline
                    rows={3}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    sx={{
                      marginTop: 2,
                      
                      backgroundColor: "white",
                      boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .1)",
                    }}
                  />
                </Box>
                

                <Box style={{ display: "flex", gap: "2vw", alingItems: "center", justifyContent: "center", marginTop: "2vh" }}>
                
              </Box>





                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    gap: 5,
                  }}
                >
                  
                  <Tooltip title="Enviar notas">
                    <Button
                      style={{
                        maxWidth: 30,
                        fontSize: 12,
                        maxHeight: 30,
                        backgroundColor: "green",
                        color: "white",
                        border: "1px solid #ccc",
                        borderRadius: "30px",
                        fontFamily: "Rajdhani",
                        fontWeight: "bold",
                        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                      }}
                      variant="contained"
                      onClick={handleSubmitGrade}
                    >
                      Enviar
                    </Button>
                  </Tooltip>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 10,
                    }}
                  >
                    
                  </Box>
                </Box>
              </Box>

              
            
            </Box>
          </Box>

        
      </Paper>
    </Box>
  );
};

export default HomeNavegation;
