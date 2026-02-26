import styles from "./CubicSoft.module.css";

export default function CubicProblema() {
  return (
    <section className={styles.problema}>
      <div className={`${styles.container} ${styles.problemaContainer}`}>
        
        <h2 className={styles.problemaTitle}>
         Los desafíos del transporte y almacenamiento tradicional
        </h2>

        <div className={styles.problemaGrid}>
          
          <ul className={styles.problemaList}>
            <li>Subutilización del espacio en contenedores y camiones</li>
            <li>Dificultad para calcular el cubicaje exacto de la mercancía</li>         
          </ul>
          <ul className={styles.problemaList}>           
            <li>Incremento de costos por envíos incompletos o repetidos</li>
            <li>Falta de visibilidad sobre cómo los productos ocupan el espacio</li>
          </ul>


        </div>
      </div>
    </section>
  );
}