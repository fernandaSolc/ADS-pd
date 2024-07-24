import "./App.css";
import "./assets/fonts/fonts.css";
import PaginaInicial from "./pages/pagInicial.jsx";
import PaginaLogin from "./pages/pagLogin.jsx";
import Perfil from "./pages/pagPerfil.jsx";
import PagCriarPerfil from "./pages/pagCriarPerfil.jsx";

function App() {
  return (
    <div className="App">
      <PaginaInicial />
      <PaginaLogin />
      <PagCriarPerfil />
      {/* <Perfil /> */}
    </div>
  );
}

export default App;
