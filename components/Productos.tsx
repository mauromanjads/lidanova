export default function Productos() {
  const productos = [
    {
      icon: "🧾",
      title: "LidaSoft",
      desc: "Sistema completo de facturación electrónica integrado con la DIAN para automatizar procesos contables y administrativos.",
      link: "https://lidasoft-ujd07cu.gamma.site/",
      label: "Conocer más →",
    },
    {
      icon: "🏗️",
      title: "LiraSoft",
      desc: "Plataforma especializada para gestión comercial, cartera y contratos en proyectos inmobiliarios y urbanísticos.",
      link: "https://lirasoft-7u1z1h1.gamma.site/",
      label: "Conocer más →",
    },
    {
      icon: "🗺️",
      title: "Planos Interactivos",
      desc: "Visualización dinámica de proyectos mediante navegación interactiva que mejora la experiencia comercial y operativa.",
      link: "https://geoportal-kappa.vercel.app/plano",
      label: "Ver demo →",
    },
    {
      icon: "📦",
      title: "Cubicaje 3D",
      desc: "Optimización logística mediante simulación tridimensional para maximizar carga y reducir costos operativos.",
      link: "https://geoportal-kappa.vercel.app/contenedor",
      label: "Ver demo →",
    },
  ];

  return (
    <section id="productos" className="products fade-in-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag">Soluciones desarrolladas</div>
          <h2 className="section-title">
            Productos que ya están generando valor
          </h2>
          <p className="section-description">
            Estos sistemas reflejan nuestra experiencia construyendo soluciones empresariales reales en distintos sectores.
          </p>
        </div>

        <div className="services-grid">
          {productos.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="service-card product-card"
            >
              <div className="service-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="product-link">{p.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}