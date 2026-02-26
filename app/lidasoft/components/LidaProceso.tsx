import styles from "./LidaSoft.module.css";


export default function LidaProceso() {
  return (
    <section className={styles.proceso}>
      <div className={`${styles.container} ${styles.procesoContainer}`}>
        
        <h2 className={styles.procesoTitle}>
          Cómo trabajamos
        </h2>

        <div className={styles.procesoGrid}>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>01</span>
            <h4>Diagnóstico</h4>
            <p>Analizamos tus procesos actuales.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>02</span>
            <h4>Diseño</h4>
            <p>Proponemos la arquitectura ideal.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>03</span>
            <h4>Desarrollo</h4>
            <p>Construcción ágil y validaciones.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>04</span>
            <h4>Implementación</h4>
            <p>Puesta en marcha y capacitación.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>05</span>
            <h4>Soporte</h4>
            <p>Evolución y mejoras continuas.</p>
          </div>

        </div>
      </div>
    </section>
  );
}