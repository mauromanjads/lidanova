import styles from "./LidaSoft.module.css";

export default function LidaServicios() {
  return (
    <section className={styles.servicios}>
      <div className={`${styles.container} ${styles.serviciosContainer}`}>
        
        <h2 className={styles.serviciosTitle}>
          ¿Qué tipo de sistemas desarrollamos?
        </h2>

       <div className={styles.serviciosGrid}>

          <div className={styles.servicioCard}>
            <h3>Conformidad con la DIAN</h3>
            <p>Cumplimiento DIAN garantizado.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>XML Automático</h3>
            <p>Generación automática de XML.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Gestión Integral de Clientes</h3>
            <p>Gestión centralizada de clientes y productos.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Facturación Conectada</h3>
            <p>Soporte para SKU, referencias y variantes.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Integración Empresarial Total</h3>
            <p>Con facturación electrónica, inventarios y más.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Reportes y Analítica</h3>
            <p>Facturación en múltiples formatos.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Actualizaciones Normativas</h3>
            <p>Continuas según la legislación vigente.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Soporte Experto</h3>
            <p>Asistencia confiable para tu operación.</p>
          </div>

        </div>

      </div>
    </section>
  );
}