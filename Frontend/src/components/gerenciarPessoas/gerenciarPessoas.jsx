import * as React from 'react';
import Box from '@mui/material/Box';
import Tabela from './tabelaPessoas.jsx';
import { Typography } from '@mui/material';
const GerenciarPessoas = () => {



  return (

<Box component="main" >
<Box
        style={{
          padding: 10,
          marginLeft: 35,
          marginBottom: 20,

        }}
      >
        <Typography sx={{ fontSize: 20, marginTop: 0, marginBottom: 2 }}>
          <strong>Gerenciar Pessoas</strong>
        </Typography>

      </Box> 
<Tabela />



<Box sx={{ display: 'flex', flexDirection: 'row' }}>

</Box>
</Box>

);
};

export default GerenciarPessoas;