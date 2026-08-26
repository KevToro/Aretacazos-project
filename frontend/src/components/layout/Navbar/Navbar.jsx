import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">

        <Link to="/" className="navbar__logo">
           ARETACAZOS
        </Link>

        <div className="navbar__links">
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menú</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <button className="navbar__button">
          Registrarme
        </button>

      </nav>
    </header>
  );
}

export default Navbar;