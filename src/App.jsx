import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"
import "./App.css";
import "./assets/fonts/fonts.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
