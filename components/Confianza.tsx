export default function Confianza() {
  return (
    <section id="confianza" className="services fade-in-section">
      <div className="container">
        <div className="section-header">

          <div className="section-tag">Experiencia</div>

          <h2 className="section-title">
            Tecnología aplicada a problemas reales
          </h2>

          <p className="section-description">
            Desarrollamos soluciones usadas en facturación electrónica,
            gestión inmobiliaria, visualización interactiva y optimización logística.
          </p>

          <div className="video-row">

            {[
              {
                title: "Sistema Empresarial Integral",
                url: "1167919184",
              },
              {
                title: "Sistema POS Facturación / XML automático",
                url: "1167918931",
              },
              {
                title: "Chatbot Inteligente para Ventas",
                url: "1167919498",
              },
              {
                title: "Optimización de Contenedor 3D",
                url: "1167919618",
              },
            ].map((video, index) => (
              <div className="video-col" key={index}>
                <h3 className="video-title">{video.title}</h3>
                <div className="video-wrapper">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.url}`}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}