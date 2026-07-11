"use client";

import Image from "next/image";
import styles from "./Agente.module.css";
import ChatbotIllustration from "@/public/agente.png"; // reemplaza con tu imagen

export default function AgenteSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={styles.solucionContainer}>
        <div className={styles.solucionTextWrapper}>
          <h2 className={`${styles.solucionTitle} ${styles.mainTitle}`}>
            Soluciones a la Medida del Litigio Administrativo
          </h2>
          <p className={`${styles.solucionText} ${styles.mainDescription}`}>
            Nuestros agentes inteligentes centralizan datos, automatizan tareas y entregan respuestas rápidas para análisis de expedientes, redacción jurídica, vigilancia judicial y mucho más.
          </p>
          <a href="#contacto" className={styles.primaryBtn}>
            Quiero probarlo
          </a>
        </div>

         <div className={styles.solucionDetails}>
        
          <div className={styles.solucionFirstRow}>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📂</span>
              <h3 className={styles.cardTitle}>Análisis Inteligente de Expedientes</h3>
              <p>Analiza demandas, contestaciones, anexos y demás documentos procesales para identificar hechos relevantes, contradicciones y generar resúmenes ejecutivos en cuestión de minutos.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>⚖️</span>
              <h3 className={styles.cardTitle}>Copiloto para Redacción Jurídica</h3>
              <p>Asiste en la elaboración de alegatos, recursos, tutelas, conceptos jurídicos y otros documentos, respetando el estilo de la organización y fundamentando cada respuesta en la normatividad y jurisprudencia aplicable.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>👁️</span>
              <h3 className={styles.cardTitle}>Vigilancia Judicial Inteligente (SAMAI)</h3>
              <p>Monitorea automáticamente procesos judiciales, consulta estados electrónicos y genera alertas oportunas sobre actuaciones, traslados y vencimiento de términos.</p>
            </article>
          </div>

          <div className={styles.imageRow}>
            <div className={styles.solucionImageWrapper}>
              <Image
                src={ChatbotIllustration}
                alt="Agente de IA solución"
                width={500}
                height={500}
                className={styles.roundedImage}
              />
            </div>
          </div>

          <div className={styles.solucionSecondRow}>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📚</span>
              <h3 className={styles.cardTitle}>Investigación Jurídica Asistida</h3>
              <p>Consulta legislación, jurisprudencia, doctrina y documentos internos mediante lenguaje natural, entregando respuestas respaldadas por las fuentes correspondientes.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>⏱️</span>
              <h3 className={styles.cardTitle}>Automatización de Procesos Legales</h3>
              <p>Optimiza tareas repetitivas como clasificación documental, gestión de expedientes, seguimiento de actuaciones y elaboración de informes jurídicos.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>🤝</span>
              <h3 className={styles.cardTitle}>Integración con Plataformas Jurídicas</h3>
              <p>Integra los Agentes Inteligentes con sistemas documentales, gestores jurídicos, bases de datos y plataformas institucionales para centralizar toda la información.</p>
            </article>
          </div>

          <div className={styles.securityHeader}>
            <h2 className={styles.securityTitle}>🔐 Seguridad y Confidencialidad Jurídica</h2>
            <p className={styles.securityDescription}>
              La información jurídica exige los más altos estándares de seguridad. Nuestra plataforma garantiza confidencialidad, integridad y trazabilidad de cada documento y consulta.
            </p>
          </div>

          <div className={styles.solucionSecondRow}>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>🔒</span>
              <h3 className={styles.cardTitle}>Aislamiento Seguro de la Información</h3>
              <p>Cada organización opera en un entorno independiente, garantizando que la información de sus expedientes permanezca completamente aislada.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>🛡️</span>
              <h3 className={styles.cardTitle}>Confidencialidad Garantizada</h3>
              <p>Los documentos procesados nunca se utilizan para entrenar modelos públicos de Inteligencia Artificial, preservando el secreto profesional y la privacidad de la información.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📖</span>
              <h3 className={styles.cardTitle}>Respuestas Fundamentadas</h3>
              <p>Cada respuesta generada por el Agente Inteligente se encuentra respaldada por la normativa, jurisprudencia o documento de origen, reduciendo el riesgo de información no sustentada.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📜</span>
              <h3 className={styles.cardTitle}>Trazabilidad Completa</h3>
              <p>Todas las consultas y acciones quedan registradas, permitiendo verificar el origen de la información y fortalecer la seguridad jurídica.</p>
            </article>
          </div>

        </div>

      </div>
    </section>
  );
}