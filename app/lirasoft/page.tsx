import Header from "@/components/Header";
import LiraHero from "./components/LiraHero";
import LiraProblema from "./components/LiraProblema";
import LiraSolucion from "./components/LiraSolucion";
import LiraServicios from "./components/LiraServicios";
import LiraProceso from "./components/LiraProceso";

import LiraCTA from "./components/LiraCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
 

export default function Lirasoft() {
  return (
    <>
      <Header />
      <LiraHero />
      <LiraProblema />
      <LiraSolucion />
      <LiraServicios />
      <LiraProceso />    
      <LiraCTA />
      <Footer />
      <ClientScripts />
    </>
  );
}

