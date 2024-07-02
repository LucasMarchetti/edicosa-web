
//React Routes
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home.js"
import QuienesSomos from "./pages/QuienesSomos.js"
import Marcas from "./pages/Marcas.js";
import Contacto from "./pages/Contacto.js";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quienes-somos" element={<QuienesSomos />} />
        <Route exact path="/marcas" element={<Marcas />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
