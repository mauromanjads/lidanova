import styles from "./LidaSoft.module.css";

export default function LidaHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Texto */}
        <div className={styles.text}>

          <h1 className={styles.title}>
           LIDASOFT La solución que transformará tu facturación electrónica            
          </h1>
         <p className={styles.description}>

            <a
              href="https://lidasoft-ujd07cu.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Conoce LidaSoft →
            </a>
          </p>

          <p className={styles.description}>
            Entra a una nueva era de control, cumplimiento y eficiencia 
            con un sistema integral diseñado para adaptarse a tu negocio.
          </p>

          <div className={styles.buttons}>
            <a href="#contacto" className={styles.primaryBtn}>
              Agendar diagnóstico estratégico
            </a>

            <a
              href="https://wa.me/573017447947"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Video */}
        <div className={styles.videoSection}>
          <div>
            <h3 className={styles.videoTitle}>
              LidaSoft en acción · Sistema POS Facturación / XML automático
            </h3>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1167918931?autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}