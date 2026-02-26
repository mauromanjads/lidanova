import styles from "./LiraSoft.module.css";

export default function LiraHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Texto */}
        <div className={styles.text}>

          <h1 className={styles.title}>
            LIRASOFT - Sistemas diseñados para optimizar y escalar tu operación
          </h1>
         <p className={styles.description}>

            <a
              href="https://lirasoft-7u1z1h1.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Conoce LiraSoft →
            </a>
          </p>

          <p className={styles.description}>
            Automatizamos procesos, centralizamos información y construimos
            soluciones tecnológicas que se adaptan a tu empresa, no al revés.
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
              LiraSoft en acción · Sistema Empresarial Integral
            </h3>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1167919184?autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0"
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