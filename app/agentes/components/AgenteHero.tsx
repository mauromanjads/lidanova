import styles from "./Agente.module.css";

export default function AgenteHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Texto */}
        <div className={styles.text}>

          <h1 className={styles.title}>
          LIDABOT es un Agente conversacional de Inteligencia Artificial
          </h1>
          
          <p className={styles.description}>
           La información de tu empresa está dispersa en múltiples sistemas, dificultando el acceso rápido y la toma de decisiones. Nuestros Agentes Inteligentes centralizan la información, automatizan procesos y optimizan tu operación con Inteligencia Artificial
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
              Agente de IA para Ventas
            </h3>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1167919498?autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0"
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