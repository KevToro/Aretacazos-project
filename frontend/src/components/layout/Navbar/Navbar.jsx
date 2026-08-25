import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">

        <a href="/" className="navbar__logo">
           ARETACAZOS
        </a>

        <ul className="navbar__links">
          <li>
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="#menu">Menú</a>
          </li>

          <li>
            <a href="#nosotros">Nosotros</a>
          </li>

          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <button className="navbar__button">
          Registrarme
        </button>

      </nav>
    </header>
  );
}

export default Navbar;