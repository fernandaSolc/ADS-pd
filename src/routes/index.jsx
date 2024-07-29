import { Routes, Route } from "react-router-dom";
import PaginaLogin from "../pages/pagLogin";
import PagCriarPerfil from "../pages/pagCriarPerfil";
import PaginaInicial from "../pages/pagInicial";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<PaginaLogin />} />
      <Route path="/CriarPerfil" element={<PagCriarPerfil />} />
      <Route path="/Home" element={<PaginaInicial />} />
    </Routes>
  );
}

export default RoutesApp;
