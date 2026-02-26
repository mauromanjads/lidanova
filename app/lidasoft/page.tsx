import Header from "@/components/Header";
import LidaHero from "./components/LidaHero";
import LidaProblema from "./components/LidaProblema";
import LidaSolucion from "./components/LidaSolucion";
import LidaServicios from "./components/LidaServicios";
import LidaProceso from "./components/LidaProceso";

import LidaCTA from "./components/LidaCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Lidasoft() {
  return (
    <>
      <Header />
      <LidaHero />
      <LidaProblema />
      <LidaSolucion />
      <LidaServicios />
      <LidaProceso />    
      <LidaCTA />
      <Footer />
      <ClientScripts />
    </>
  );
}