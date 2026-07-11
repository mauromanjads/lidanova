"use client";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            gap: "30px",
          }}
        >
          

          {/* Título */}
          <h1 style={{ fontSize: "38px", lineHeight: "1.2", fontWeight: 800 }}>
            Impulsa tu negocio con{" "}
            <span className="gradient-text">
              Lidasoft, Lirasoft y agentes de IA a medida
            </span>
          </h1>

          {/* Descripción */}
          <p style={{ fontSize: "18px", color: "#f1f1f1", lineHeight: 1.7 }}>
            Optimiza ventas, cartera, inventario y cubicaje con soluciones
            digitales integradas. Nuestro agente de IA automatiza la
            atención al cliente mientras tu empresa escala procesos de manera
            eficiente y confiable.
          </p>

          {/* CTA */}
          <div style={{ marginTop: "20px" }}>
            <a
              href="https://wa.me/573017447947?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "16px 36px", fontWeight: 700 }}
            >
              Solicitar asesoría gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}