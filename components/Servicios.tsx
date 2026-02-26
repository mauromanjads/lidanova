export default function Servicios() {
  const servicios = [
    { icon: "🌐", title: "Desarrollo Web", desc: "Aplicaciones modernas optimizadas para rendimiento, seguridad y escalabilidad." },
    { icon: "🤖", title: "Automatización con IA", desc: "Chatbots y asistentes inteligentes que reducen costos y mejoran atención." },
    { icon: "⚙️", title: "Software a Medida", desc: "Sistemas empresariales adaptados a procesos reales de negocio." },
    { icon: "☁️", title: "Cloud & DevOps", desc: "Infraestructura confiable, despliegue continuo y optimización." },
    { icon: "🔗", title: "Integraciones", desc: "Conectamos plataformas, APIs y sistemas existentes." },
    { icon: "🧭", title: "Consultoría", desc: "Te guiamos estratégicamente en decisiones tecnológicas." },
  ];

  return (
    <section id="servicios" className="services fade-in-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag">Servicios</div>
          <h2 className="section-title">
            Soluciones diseñadas para empresas
          </h2>
          <p className="section-description">
            Desde automatización operativa hasta plataformas empresariales completas.
          </p>
        </div>

        <div className="services-grid">
          {servicios.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}