import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/fonts/fonts.css";
import CustomAppBar from "./components/customAppBar/customAppBar";
import PaginaInicial from "./pages/pagInicial.jsx";
import PaginaLogin from "./pages/pagLogin.jsx";
import PaginaPerfil from "./pages/pagPerfil.jsx";
import PagCadastro from "./pages/pagCadastro.jsx";
import PaginaLoja from "./pages/pagLoja.jsx";
import PaginaIntegrantes from "./pages/pagIntegrantes";
import PaginaADM from "./pages/pagADM.jsx";
import ProtectedRoute from "./components/protectedRoute/protectedRoute.jsx";
import { AuthProvider } from "./components/authProvider/authProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<PaginaLogin />} />
          <Route path="/cadastro" element={<PagCadastro />} />
          <Route
            path="/inicio"
            element={
              <ProtectedRoute>
                <PaginaInicial />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <PaginaPerfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/integrantes"
            element={
              <ProtectedRoute>
                <PaginaIntegrantes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/loja"
            element={
              <ProtectedRoute>
                <PaginaLoja />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adm"
            element={
              <ProtectedRoute>
                <PaginaADM />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;
