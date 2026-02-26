export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">

          <div className="hero-badge">
            Software Empresarial a Medida
          </div>

          <h1>
            Automatiza procesos y escala tu negocio con{" "}
            <span className="gradient-text">
              tecnología diseñada para ti
            </span>
          </h1>

          <p>
            En Lidanova ayudamos a empresas a optimizar ventas, cartera y operaciones
            mediante software personalizado, integraciones y soluciones digitales avanzadas.
          </p>

          <div className="cta-buttons">

            <a
              href="https://wa.me/573017447947?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Solicitar asesoría gratuita
            </a>

            <a href="#productos" className="btn btn-secondary">
              Ver soluciones
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}