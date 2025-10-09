import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import Carta from "./pages/Carta";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />

      <div className={`flex-fill`} style={{
        backgroundColor: "var(--color-fondo)",
        color: "var(--color-texto)"
      }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;