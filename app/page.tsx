import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Confianza from "@/components/Confianza";
import Servicios from "@/components/Servicios";
import Productos from "@/components/Productos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Confianza />
      <Servicios />
      <Productos />
      <Contacto />
      <Footer />
      <ClientScripts />
    </>
  );
}