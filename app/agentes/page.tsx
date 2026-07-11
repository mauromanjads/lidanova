import Header from "@/components/Header";
import AgenteHero from "./components/AgenteHero";
import AgenteSolucion from "./components/AgenteSolucion";

import AgenteCTA from "./components/AgenteCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Agentes() {
  return (
    <>
      <Header />
      <AgenteHero />
      <AgenteSolucion />
      <AgenteCTA />     
      <Footer />
      <ClientScripts />
    </>
  );
}