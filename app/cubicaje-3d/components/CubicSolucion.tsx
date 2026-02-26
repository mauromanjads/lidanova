import styles from "./CubicSoft.module.css";

export default function CubicSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={`${styles.container} ${styles.solucionContainer}`}>
        
        <h2 className={styles.solucionTitle}>
         Cubicaje 3D y optimización de espacio al alcance de tu mano
        </h2>

        <p className={styles.solucionText}>
          Nuestro sistema permite redimensionar contenedores y organizar tus productos 
          de manera óptima en 3D. Visualiza el espacio ocupado, identifica áreas libres y maximiza la capacidad de tus envíos. 
          Con nuestra tecnología, cada contenedor trabaja al máximo, reduciendo costos y tiempo de logística.
        </p>

      </div>
    </section>
  );
}