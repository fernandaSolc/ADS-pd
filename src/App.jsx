import "./App.css";
import "./assets/fonts/fonts.css";
import CustomAppBar from "./components/customAppBar/customAppBar";
import PaginaInicial from "./pages/pagInicial";
import PaginaIntegrantes from "./pages/pagIntegrantes";
import PaginaLogin from "./pages/pagLogin";

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      {/* <PaginaLogin />
      <PaginaInicial /> */}
      <PaginaIntegrantes />
    </div>
  );
}
export default App;
