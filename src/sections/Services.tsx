import ScrollReveal from '../components/ScrollReveal';
import './Services.css';

const services = [
  {
    icon: '⚖️',
    title: 'Pesajes y gestión',
    description:
      'Software FBApp para balanza LR22: registro de pesadas, clientes, recibos e historial en planta.',
    link: '#producto',
    linkLabel: 'Ver FBApp',
  },
  {
    icon: '🔧',
    title: 'Reparaciones',
    description:
      'Diagnóstico y reparación de balanzas industriales. Restauramos el correcto funcionamiento de su equipo.',
  },
  {
    icon: '🏗️',
    title: 'Instalaciones',
    description:
      'Montaje e instalación de balanzas en su planta, con conexión al indicador y puesta en marcha.',
  },
  {
    icon: '📐',
    title: 'Calibraciones',
    description:
      'Calibración y ajuste de balanzas para garantizar mediciones precisas y confiables.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Servicios</span>
            <h2 className="section-title">Más que software: su balanza, de punta a punta</h2>
            <p className="section-subtitle">
              Fabio Balanzas acompaña todo el ciclo de vida de su equipo: instalación,
              calibración, reparación y gestión de pesajes con FBApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="services__grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <article className="services__card">
                <span className="services__icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.link && (
                  <a href={service.link} className="services__link">
                    {service.linkLabel} →
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
