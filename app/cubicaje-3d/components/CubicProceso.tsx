import styles from "./CubicSoft.module.css";


export default function CubicProceso() {
  return (
    <section className={styles.proceso}>
      <div className={`${styles.container} ${styles.procesoContainer}`}>
        
        <h2 className={styles.procesoTitle}>
          Cómo optimizamos tus contenedores en 4 pasos
        </h2>

        <div className={styles.procesoGrid}>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>01</span>
            <h4>Sube productos</h4>
            <p>Ingresa dimensiones, peso y cantidad de cada artículo. Nuestro sistema reconoce automáticamente los datos para un cálculo preciso de cubicaje 3D.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>02</span>
            <h4>Elige contenedor</h4>
            <p>Escoge el tipo de contenedor o ajusta sus dimensiones dentro del sistema. Puedes redimensionarlo para adaptarlo a tus necesidades de transporte.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>03</span>
            <h4>Optimiza carga</h4>
            <p>Visualiza tus productos en 3D dentro del contenedor. El sistema organiza y acomoda cada pieza para maximizar el espacio disponible y minimizar huecos.</p>
          </div>

          <div className={styles.procesoCard}>
            <span className={styles.procesoNumber}>04</span>
            <h4>Genera reporte</h4>
            <p>Obtén un reporte detallado con el cubicaje final, espacio libre y recomendaciones de carga. Ahorra tiempo, reduce costos y asegura envíos eficientes.</p>
          </div>
    

        </div>
      </div>
    </section>
  );
}