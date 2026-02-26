export const metadata = {
  title: "Gracias | Lidanova",
};

export default function GraciasPage() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Sora, sans-serif",
        background: "linear-gradient(135deg,#0f172a,#020617)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, padding: 40 }}>

        <div style={{ fontWeight: 700, letterSpacing: 2, marginBottom: 20 }}>
          LIDANOVA
        </div>

        <h1 style={{ fontSize: "2.4rem", marginBottom: 10 }}>
          ¡Mensaje recibido! 🚀
        </h1>

        <p style={{ color: "#cbd5e1", marginBottom: 30 }}>
          Gracias por contactarnos. Hemos recibido tu solicitud y te
          responderemos muy pronto.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: 10,
            background: "linear-gradient(90deg,#6366f1,#22d3ee)",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Volver al sitio
        </a>

      </div>
    </div>
  );
}