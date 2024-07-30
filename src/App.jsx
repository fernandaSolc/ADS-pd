import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/fonts/fonts.css";
import PaginaInicial from "./pages/pagInicial.jsx";
import PaginaLogin from "./pages/pagLogin.jsx";
import PaginaPerfil from "./pages/pagPerfil.jsx";
import PagCadastro from "./pages/pagCadastro.jsx";
import PaginaLoja from "./pages/pagLoja.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaLogin />} />
          <Route path="/inicio" element={<PaginaInicial />} />
          <Route path="/cadastro" element={<PagCadastro />} />
          <Route path="/perfil" element={<PaginaPerfil />} />
          <Route path="/loja" element={<PaginaLoja />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
