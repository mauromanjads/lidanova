import styles from "./LiraSoft.module.css";

export default function LiraServicios() {
  return (
    <section className={styles.servicios}>
      <div className={`${styles.container} ${styles.serviciosContainer}`}>
        
        <h2 className={styles.serviciosTitle}>
          ¿Qué tipo de sistemas desarrollamos?
        </h2>

        <div className={styles.serviciosGrid}>

          <div className={styles.servicioCard}>
            <h3>Sistemas Administrativos</h3>
            <p>Control total de operaciones, inventarios y finanzas.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>ERP Personalizados</h3>
            <p>Plataformas adaptadas a procesos específicos.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Sistemas Logísticos</h3>
            <p>Automatización de distribución y trazabilidad.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Plataformas Web Internas</h3>
            <p>Herramientas internas seguras y escalables.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Integraciones</h3>
            <p>Con facturación electrónica, inventarios y más.</p>
          </div>

          <div className={styles.servicioCard}>
            <h3>Dashboards y Reportes</h3>
            <p>Paneles de control en tiempo real.</p>
          </div>

        </div>
      </div>
    </section>
  );
}