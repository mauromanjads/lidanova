"use client";

import Image from "next/image";
import styles from "./Chatbot.module.css";
import ChatbotIllustration from "@/public/lidabot.png"; // reemplaza con tu imagen

export default function ChatbotSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={styles.solucionContainer}>
        <div className={styles.solucionTextWrapper}>
          <h2 className={styles.solucionTitle}>
            Cómo nuestros Agentes de IA transforman tu negocio
          </h2>
          <p className={styles.solucionText}>
            Nuestros agentes inteligentes centralizan datos, automatizan tareas y entregan respuestas rápidas para ventas, inventarios, compras, clientes y proveedores.
          </p>
          <a href="#contacto" className={styles.primaryBtn}>
            Quiero probarlo
          </a>
        </div>

        <div className={styles.solucionDetails}>
          <div className={styles.solucionFirstRow}>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>💬</span>
              <h3>Inteligencia empresarial en tiempo real</h3>
              <p>Accede a la información estratégica mediante consultas en lenguaje natural.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>⚡</span>
              <h3>Automatización inteligente</h3>
              <p>Analiza el contexto, toma decisiones y ejecuta procesos de forma autónoma para optimizar la operación de tu empresa.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>🔗</span>
              <h3>Integración con sistemas</h3>
              <p>Conecta ERP, CRM, APIs y bases de datos sin reemplazar tu infraestructura actual.</p>
            </article>
            <div className={styles.solucionImageWrapper}>
              <Image
                src={ChatbotIllustration}
                alt="Agente de IA solución"
                width={420}
                height={420}
                style={{ borderRadius: "24px" }}
              />
            </div>
          </div>

          <div className={styles.solucionSecondRow}>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📊</span>
              <h3>Dashboards e indicadores</h3>
              <p>Visualiza métricas y gráficos interactivos (DataStudios/PowerBI) para tomar decisiones más rápidas.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>📄</span>
              <h3>Reportes inteligentes</h3>
              <p>Genera informes ejecutivos, resúmenes estratégicos y análisis en tiempo real para facilitar la toma de decisiones.</p>
            </article>
            <article className={styles.solucionCard}>
              <span className={styles.cardIcon}>🔒</span>
              <h3> Seguridad y control</h3>
              <p>Accede a la información y ejecuta procesos de forma segura, con permisos, perfiles y trazabilidad según las políticas de tu empresa.</p>
            </article>
          </div>

          <div className={styles.solucionPreviewRow}>
            <article className={styles.solucionPreviewCard}>
              <Image
                src="/lidabot1.png"
                alt="LidaBot preview 1"
                width={560}
                height={360}
                className={styles.previewImage}
              />
              <p className={styles.previewCaption}>Pantalla de ventas y preguntas del cliente respondiéndose al instante.</p>
            </article>
            <article className={styles.solucionPreviewCard}>
              <Image
                src="/lidabot2.png"
                alt="LidaBot preview 2"
                width={560}
                height={360}
                className={styles.previewImage}
              />
              <p className={styles.previewCaption}>Vista de inventario y alertas automáticas para reposición.</p>
            </article>
            <article className={styles.solucionPreviewCard}>
              <Image
                src="/lidabot3.png"
                alt="LidaBot preview 3"
                width={560}
                height={360}
                className={styles.previewImage}
              />
              <p className={styles.previewCaption}>Panel de control con resúmenes de compras y proveedores.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}