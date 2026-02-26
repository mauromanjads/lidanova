export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#inicio" className="logo">LIDANOVA</a>
          <ul className="nav-links">
            <li><a href="#confianza">Experiencia</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}