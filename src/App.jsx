import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/fonts/fonts.css";
import CustomAppBar from "./components/customAppBar/customAppBar";
import PaginaInicial from "./pages/pagInicial.jsx";
import PaginaLogin from "./pages/pagLogin.jsx";
import PaginaPerfil from "./pages/pagPerfil.jsx";
import PagCadastro from "./pages/pagCadastro.jsx";
import PaginaLoja from "./pages/pagLoja.jsx";
import PaginaIntegrantes from "./pages/pagIntegrantes";

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<PaginaLogin />} />
          <Route path="/inicio" element={<PaginaInicial />} />
          <Route path="/cadastro" element={<PagCadastro />} />
          <Route path="/perfil" element={<PaginaPerfil />} />
          <Route path="/integrantes" element={<PaginaIntegrantes />} />
          <Route path="/loja" element={<PaginaLoja />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
