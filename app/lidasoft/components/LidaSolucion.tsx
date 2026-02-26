import styles from "./LidaSoft.module.css";

export default function LidaSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={`${styles.container} ${styles.solucionContainer}`}>
        
        <h2 className={styles.solucionTitle}>
          La solución: Software diseñado exactamente para tu empresa
        </h2>

        <p className={styles.solucionText}>
          <strong>LIDASOFT</strong> simplifica la emisión de facturas electrónicas aprobadas 
          por la DIAN en segundos. Con un sistema rápido, seguro y automático, 
          tendrás el control total de tu facturación y la tranquilidad de 
          cumplir siempre con la normativa vigente.
        </p>

      </div>
    </section>
  );
}