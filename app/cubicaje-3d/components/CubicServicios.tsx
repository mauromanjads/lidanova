import styles from "./CubicSoft.module.css";

export default function CubicServicios() {
  return (
    <section className={styles.servicios}>
      <div className={styles.serviciosContainer}>
        {/* Texto */}
        <div className={styles.servicioTexto}>
          <h2 className={styles.serviciosTitle}>
            Sistema de cubicaje 3D inteligente
          </h2>
          <p className={styles.serviciosDescripcion}>
            Una plataforma que calcula y optimiza el espacio de tus contenedores en tiempo real. Redimensiona
            contenedores, organiza mercancía y visualiza la distribución en 3D para envíos más eficientes
            y económicos.
          </p>
        </div>

        {/* Imagen / SVG */}
        <div className={styles.sistemaImage}>
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="20" width="180" height="180" rx="12" stroke="#4CAF50" strokeWidth="4" fill="#C8E6C9" />
            <rect x="40" y="40" width="60" height="60" fill="#81C784" />
            <rect x="120" y="40" width="60" height="60" fill="#66BB6A" />
            <rect x="40" y="120" width="60" height="60" fill="#A5D6A7" />
            <rect x="120" y="120" width="60" height="60" fill="#4CAF50" />
          </svg>
        </div>
      </div>
    </section>
  );
}