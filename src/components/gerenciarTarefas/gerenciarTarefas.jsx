import { Box, Paper, Drawer, List, ListItem, ListItemText, Card, CardHeader } from '@mui/material';
import { useState } from "react";
import AppsIcon from '@mui/icons-material/Apps';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import HoriIcon from '@mui/icons-material/MoreHoriz';

const GerenciarTarefas = () => {



  return (




<Box component="main">
<Box
        style={{
          padding: 10,
          marginLeft: 35,
          marginBottom: 20,

        }}
      >
        <Typography sx={{ fontSize: 20}}>
          <strong>Gerenciar Tarefas</strong>
        </Typography>

      </Box> 
<Box sx={{ display: 'flex', flexDirection: 'row', padding: 3 }}>
  <Card elevation={3} sx={{ width: "20vw", height: "70vh", marginLeft: 2, position: 'relative' }}>

    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      
      <CardHeader
        sx={{marginTop: 1}}
        title="Tarefas Gerais"
        titleTypographyProps={{ variant: 'h6', fontSize: '0.875rem' }}
      />
      <HoriIcon sx={{position:'relative', marginTop: '6px', right: 5}}/>
      <Fab
        sx={{
          position: 'absolute',
          right: 10,
          maxWidth: 35,
          maxHeight: 35,
          backgroundColor: 'lime',
          margin: 1
        }}
        aria-label="add"
      >
        <AddIcon sx={{ fontSize: 20 }} />
      </Fab>
    </Box>
  <Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Marcar reunião semanal</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 18/08/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Marcar reunião semanal</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 18/08/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Marcar reunião semanal</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 18/08/2024</Typography>
      </Box>
    </Box>
  </Box>
  </Card>
  <Card elevation={3} sx={{ width: "20vw", height: "70vh", marginLeft: 5, position: 'relative' }}>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CardHeader
      sx={{marginTop: 1}}
        title="Tarefas Individuais"
        titleTypographyProps={{ variant: 'h6', fontSize: '0.875rem' }}
      />
      <HoriIcon sx={{position:'relative', marginTop: '6px', right: 5}}/>
      <Fab
        sx={{
          position: 'absolute',
          right: 10,
          maxWidth: 35,
          maxHeight: 35,
          backgroundColor: 'lime',
          margin: 1
        }}
        aria-label="add"
      >
        <AddIcon sx={{ fontSize: 20 }} />
      </Fab>
    </Box>

    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Informações Projeto X</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> Fernanda </Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 25/08/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Correção Python</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> João </Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 08/08/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Correção Projetos</strong></Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> Gustavo</Typography>
      </Box>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Prazo:</strong> 18/08/2024</Typography>
      </Box>
    </Box>
  </Card>
  <Card elevation={3} sx={{ width: "20vw", height: "70vh", marginLeft: 5, position: 'relative' }}>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CardHeader
      sx={{marginTop: 1}}
        title="Histórico Semanal"
        titleTypographyProps={{ variant: 'h6', fontSize: '0.875rem' }}
      />
      <HoriIcon sx={{position:'relative', marginTop: '6px', right: 5}}/>
      <Fab
        sx={{
          position: 'absolute',
          right: 10,
          maxWidth: 35,
          maxHeight: 35,
          backgroundColor: 'lime',
          margin: 1
        }}
        aria-label="add"
      >
        <AddIcon sx={{ fontSize: 20 }} />
      </Fab>
    </Box>

    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Marcar reunião semanal</strong></Typography>
      </Box>
      
      <Box sx={{display: 'flex', gap: 20}}>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> João </Typography>
      </Box>
      <Typography sx={{ fontSize: 10}}><strong>Status:</strong> Concluído </Typography>
      </Box>
      
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Adicionado:</strong> 25/07/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Correção Python</strong></Typography>
      </Box>
      
      <Box sx={{display: 'flex', gap: 20}}>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> João </Typography>
      </Box>
      <Typography sx={{ fontSize: 10 }}><strong>Status:</strong> Concluído </Typography>
      </Box>
      
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Adicionado:</strong> 25/07/2024</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#D4D4D4', margin: 1, borderRadius: '6px' }}>
      <Box sx={{ height: 50, marginLeft: 1, paddingTop: '0.5px' }}>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}><strong>Correção Projetos</strong></Typography>
      </Box>
      
      <Box sx={{display: 'flex', gap: 20}}>
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Participante:</strong> João </Typography>
      </Box>
      <Typography sx={{ fontSize: 10 }}><strong>Status:</strong> Concluído </Typography>
      </Box>
      
      <Box sx={{ height: 25, marginLeft: 1 }}>
        <Typography sx={{ fontSize: 10 }}><strong>Adicionado:</strong> 25/07/2024</Typography>
      </Box>
    </Box>
  </Card>
</Box>
</Box>

);
};

export default GerenciarTarefas;