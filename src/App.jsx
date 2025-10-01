import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import Carta from "./pages/Carta";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
