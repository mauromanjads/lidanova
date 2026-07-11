import styles from "./Agente.module.css";

export default function AgenteHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Texto */}
        <div className={styles.text}>

          <h1 className={styles.title}>
         Agentes Inteligentes especializados en el ámbito legal
          </h1>
          
          <p className={styles.description}>
           Optimice el análisis de expedientes, acelere la elaboración de documentos jurídicos y automatice el seguimiento de procesos judiciales con Agentes Inteligentes diseñados para el ejercicio del derecho. Una solución que comprende el contexto legal, razona sobre la información y fundamenta cada respuesta en fuentes verificables.
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

       

      </div>
    </section>
  );
}