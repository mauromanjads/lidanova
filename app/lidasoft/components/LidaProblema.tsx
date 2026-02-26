import styles from "./LidaSoft.module.css";

export default function LidaProblema() {
  return (
    <section className={styles.problema}>
      <div className={`${styles.container} ${styles.problemaContainer}`}>
        
        <h2 className={styles.problemaTitle}>
         ¿Tu empresa pierde tiempo y oportunidades con la facturación electrónica?
        </h2>

        <div className={styles.problemaGrid}>
          
          <ul className={styles.problemaList}>
            <li>Errores al generar o enviar XML a la DIAN</li>
            <li>Información duplicada entre sistemas y áreas</li>
            <li>Falta de control en tiempo real</li>
            <li>Reportes incompletos o difíciles de extraer</li>
          </ul>

          <ul className={styles.problemaList}>
            <li>Retrasos que afectan el cumplimiento normativo</li>
            <li>Sistemas que no se adaptan a cambios de la DIAN</li>
            <li>Pérdida de oportunidades por datos dispersos</li>
            <li>Procesos manuales que consumen demasiado tiempo</li>
          </ul>

        </div>
      </div>
    </section>
  );
}