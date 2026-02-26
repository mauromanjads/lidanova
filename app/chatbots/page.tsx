import Header from "@/components/Header";
import ChatbotHero from "./components/ChatbotHero";
import ChatbotSolucion from "./components/ChatbotSolucion";

import ChatbotCTA from "./components/ChatbotCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Chatbots() {
  return (
    <>
      <Header />
      <ChatbotHero />
      <ChatbotSolucion />
      <ChatbotCTA />     
      <Footer />
      <ClientScripts />
    </>
  );
}