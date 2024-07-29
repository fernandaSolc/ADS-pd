import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import "./App.css";
import "./assets/fonts/fonts.css";
import PagCriarPerfil from "./pages/pagCriarPerfil.jsx";
import Perfil from "./pages/pagPerfil.jsx";
import PaginaInicial from "./pages/pagInicial.jsx";

function App() {
  return (
    <div className="App">
      {/* <Perfil /> */}
      <PaginaInicial />
      {/* <BrowserRouter>
        <RoutesApp />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
