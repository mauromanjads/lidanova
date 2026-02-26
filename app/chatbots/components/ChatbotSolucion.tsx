"use client";

import Image from "next/image";
import styles from "./Chatbot.module.css";
import ChatbotIllustration from "@/public/lidabot.png"; // reemplaza con tu imagen

export default function ChatbotSolucion() {
  return (
    <section className={styles.solucion}>
      <div className={styles.solucionContainer}>
        {/* Texto */}
        <div className={styles.solucionTextWrapper}>
          <h2 className={styles.solucionTitle}>
            Cómo nuestro Chatbot transforma tu negocio
          </h2>
          <p className={styles.solucionText}>
            Nuestro asistente virtual automatiza tareas repetitivas, responde
            preguntas al instante y aprende de cada interacción. Así, tu equipo
            se enfoca en lo importante y tus clientes reciben atención de
            calidad 24/7.
          </p>
          <p className={styles.solucionText}>
            Integración sencilla, configuración rápida y resultados medibles:
            descubre cómo la inteligencia artificial puede impulsar tus ventas
            y mejorar la experiencia de tus usuarios.
          </p>
          <a href="#contacto" className={styles.primaryBtn}>
              Quiero probarlo
            </a>
        </div>

        {/* Imagen */}
        <div className={styles.solucionImageWrapper}>
          <Image
            src={ChatbotIllustration}
            alt="Chatbot solución"
            width={450}
            height={450}
            style={{ borderRadius: "24px" }}
          />
        </div>
      </div>
    </section>
  );
}