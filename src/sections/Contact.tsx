import { useState, type FormEvent } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">¿Listo para modernizar su balanza?</h2>
          <p className="section-subtitle">
            Solicite una demostración de FBApp o consulte por instalación, capacitación
            y planes de licencia para su planta.
          </p>

          <ul className="contact__details">
            <li>
              <strong>Empresa</strong>
              <span>Fabio Balanzas</span>
            </li>
            <li>
              <strong>Producto</strong>
              <span>FBApp — Sistema LR22</span>
            </li>
            <li>
              <strong>Plataforma</strong>
              <span>Windows 10+ · .NET 8</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>Mensaje recibido</h3>
              <p>Nos pondremos en contacto a la brevedad.</p>
              <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" required placeholder="Su nombre" />
              </div>
              <div className="contact__field">
                <label htmlFor="company">Empresa</label>
                <input id="company" name="company" type="text" required placeholder="Nombre de la empresa" />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="correo@empresa.com" />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntenos sobre su operación de pesaje..."
                />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                Enviar consulta
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
