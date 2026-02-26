import Header from "@/components/Header";
import CubicHero from "./components/CubicHero";
import CubicProblema from "./components/CubicProblema";
import CubicSolucion from "./components/CubicSolucion";
import CubicServicios from "./components/CubicServicios";
import CubicProceso from "./components/CubicProceso";

import CubicCTA from "./components/CubicCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Cubicaje() {
  return (
    <>
      <Header />
      <CubicHero />
      <CubicProblema />
      <CubicSolucion />
      <CubicServicios />
      <CubicProceso />    
      <CubicCTA />
      <Footer />
      <ClientScripts />
    </>
  );
}