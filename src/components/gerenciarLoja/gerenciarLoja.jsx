// GerenciarPessoas.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabela from './tabelaLoja.jsx';
import axios from 'axios'; // Certifique-se de instalar axios com `npm install axios`
import Adicionar from './adicionarProduto.jsx';

const GerenciarLoja = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data'); // URL do seu backend
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box component="main" sx={{ padding: 1, marginLeft: 0 }}>
      <Tabela data={data} />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Adicionar/>
      </Box>
    </Box>
  );
};

export default GerenciarLoja;
