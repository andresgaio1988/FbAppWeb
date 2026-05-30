import { useState, type FormEvent } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { IconCheck } from '../components/Icons';
import './Contact.css';

const perks = [
  'Instalación y calibración de balanzas',
  'Reparaciones con servicio técnico local',
  'Demo de FBApp para su operación',
  'Planes Standard y Premium disponibles',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container contact__layout">
        <ScrollReveal className="contact__info">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Hablemos de su planta</h2>
          <p className="section-subtitle">
            Complete el formulario y un especialista de Fabio Balanzas se comunicará
            con usted para coordinar una demostración de FBApp adaptada a su su operación.
          </p>

          <ul className="contact__perks">
            {perks.map((perk) => (
              <li key={perk}>
                <IconCheck />
                {perk}
              </li>
            ))}
          </ul>

          <div className="contact__meta">
            <div>
              <strong>Empresa</strong>
              <span>Fabio Balanzas</span>
            </div>
            <div>
              <strong>Producto</strong>
              <span>FBApp — Gestión de pesaje</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>¡Gracias por contactarnos!</h3>
                <p>Un especialista de Fabio Balanzas se comunicará con usted a la brevedad.</p>
                <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Solicitar demo gratuita</h3>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" required placeholder="Su nombre" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="company">Empresa</label>
                    <input id="company" name="company" type="text" required placeholder="Nombre de la empresa" />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="correo@empresa.com" />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Cuéntenos sobre su operación</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Ej: tenemos 2 balanzas, 50 clientes diarios, necesitamos recibos por email..."
                  />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Enviar solicitud
                </button>
                <p className="contact__disclaimer">Sin compromiso · Respuesta en 24–48 hs hábiles</p>
              </>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
