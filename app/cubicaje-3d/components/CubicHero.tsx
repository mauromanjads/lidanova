import styles from "./CubicSoft.module.css";

export default function CubicHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Texto */}
        <div className={styles.text}>

          <h1 className={styles.title}>
           CUBICAJE 3D Maximiza el espacio de tus contenedores
          </h1>
        

          <p className={styles.description}>
            Calcula automáticamente el cubicaje de tu mercancía y distribúyela en contenedores optimizados. 
            Ajusta dimensiones, ordena productos y reduce costos de transporte gracias a nuestro sistema 
            inteligente de gestión de espacio.
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
              Cubicaje · Optimización de Contenedor 3D
            </h3>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1167919618?autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0"
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