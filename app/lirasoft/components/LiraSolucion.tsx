import styles from "./LiraSoft.module.css";

export default function LiraSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={`${styles.container} ${styles.solucionContainer}`}>
        
        <h2 className={styles.solucionTitle}>
          La solución: Software diseñado exactamente para tu empresa
        </h2>

        <p className={styles.solucionText}>
          <strong>LiraSoft</strong> es nuestra línea de desarrollo de software 
          empresarial personalizado. No vendemos sistemas genéricos. 
          Analizamos tu operación y construimos una solución que se adapta 
          a tu flujo real de trabajo, no al revés.
        </p>

      </div>
    </section>
  );
}