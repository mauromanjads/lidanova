import styles from "./LiraSoft.module.css";

export default function LiraProblema() {
  return (
    <section className={styles.problema}>
      <div className={`${styles.container} ${styles.problemaContainer}`}>
        
        <h2 className={styles.problemaTitle}>
          ¿Tu empresa aún depende de Excel y procesos manuales?
        </h2>

        <div className={styles.problemaGrid}>
          
          <ul className={styles.problemaList}>
            <li>Información duplicada en diferentes áreas</li>
            <li>Errores humanos constantes</li>
            <li>Procesos lentos y repetitivos</li>
            <li>Falta de control en tiempo real</li>
          </ul>

          <ul className={styles.problemaList}>
            <li>Sistemas que no se adaptan a tu operación</li>
            <li>Dificultad para escalar</li>
            <li>Reportes manuales e incompletos</li>
            <li>Pérdida de oportunidades por falta de datos</li>
          </ul>

        </div>
      </div>
    </section>
  );
}