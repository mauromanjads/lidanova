import styles from "./LidaSoft.module.css";

export default function LidaCTA() {
  return (
    <section id="contacto" className={styles.cta}>
      <div className={`${styles.container} ${styles.ctaContainer}`}>
        
        <h2 className={styles.ctaTitle}>
          Si tu empresa está creciendo, tu software también debe hacerlo
        </h2>

        <p className={styles.ctaText}>
          Agenda un diagnóstico gratuito y descubre cómo podemos automatizar tu operación.
        </p>

        <a
          href="https://wa.me/573017447947"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Solicitar asesoría ahora
        </a>

      </div>
    </section>
  );
}