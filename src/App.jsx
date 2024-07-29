import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import "./App.css";
import "./assets/fonts/fonts.css";
import PaginaADM from "./pages/pagADM.jsx";

function App() {
  return (
    <div className="App">
      <PaginaADM />
      {/* <PaginaLogin /> */}
    </div>
  );
}
export default App;
