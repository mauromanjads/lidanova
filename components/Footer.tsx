import ClientScripts from "@/components/ClientScripts";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-col">
            <a href="#inicio" className="logo">LIDANOVA</a>
            <p className="footer-description">
              Desarrollo de software a medida para empresas.
              Automatizamos procesos, optimizamos ventas y digitalizamos operaciones.
            </p>
          </div>

          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Software a medida</a></li>
              <li><a href="#">Sistemas POS</a></li>
              <li><a href="#">Optimización logística 3D</a></li>
              <li><a href="#">Facturación electrónica</a></li>
              <li><a href="#">Desarrollo Web</a></li>
            </ul>
          </div>

          
          <div className="footer-col">
              <h4>Enlaces</h4>
              <ul>
              <li><a href="./">Inicio</a></li>
              <li><a href="./lirasoft">Lirasoft</a></li>
              <li><a href="./lidasoft">Lidasoft</a></li>               
              <li><a href="./cubicaje-3d">Cubicaje</a></li>               
              <li><a href="./chatbots">Agentes de IA</a></li>
              </ul>
          </div>

         <div className="footer-col">
            <h4>Contactos</h4>

            <div className="contact-item">
              <p>admin@lidanova.com</p>
              <p><strong>Tel:</strong> +57 301 744 7947</p>
            </div>

            <br />

            <div className="contact-item">
              <p>ventas@lidanova.com</p>
              <p><strong>Tel:</strong> +57 318 402 5381</p>
            </div>

            <br />

            <p><strong>Ciudad:</strong> Barranquilla, Colombia</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lidanova. Todos los derechos reservados.</p>
        </div>

      </div>
       <ClientScripts />
    </footer>
  );
}