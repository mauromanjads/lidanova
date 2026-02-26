export default function Contacto() {
  return (
    <section id="contacto" className="cta-section fade-in-section">
      <div className="container">
        <div className="cta-box">

          <h2>Hablemos de tu proyecto</h2>

          <p>
            Agenda una asesoría sin costo y evaluamos cómo automatizar tus procesos.
          </p>

          <a
            href="https://wa.me/573017447947?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Contactar ahora
          </a>

          <form
            action="https://formsubmit.co/mauromanja@gmail.com"
            method="POST"
            className="lead-form"
          >
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="empresa" placeholder="Empresa" />
            <textarea name="mensaje" placeholder="Cuéntanos qué necesitas" required />
            <button type="submit" className="btn btn-primary">
              Solicitar contacto
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo Lead Lidanova 🚀" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="lidanova.com/gracias" />
            <input type="hidden" name="_autoresponse" value="Gracias por escribirnos 🚀" />
          </form>

        </div>
      </div>
    </section>
  );
}