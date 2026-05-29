import './Features.css';

const features = [
  {
    icon: '⚖',
    title: 'Lectura en tiempo real',
    description:
      'Conexión RS232 con balanza LR22, parser EL05 y simulador integrado para pruebas sin hardware.',
  },
  {
    icon: '👥',
    title: 'Gestión de clientes',
    description:
      'Alta, edición y búsqueda de clientes con tarjetas RFID, saldos y historial de pesajes.',
  },
  {
    icon: '↔',
    title: 'Pesaje en dos etapas',
    description:
      'Flujo inicial y final con número de movimiento, cálculo de bruto, tara y neto automático.',
  },
  {
    icon: '📄',
    title: 'Recibos y reportes',
    description:
      'Generación de PDF con marca Fabio Balanzas, impresión y envío por email vía SMTP.',
  },
  {
    icon: '🔒',
    title: 'Seguridad y licencias',
    description:
      'Base cifrada, usuarios con roles, licenciamiento RSA por equipo (Standard / Premium).',
  },
  {
    icon: '⚙',
    title: 'Configuración flexible',
    description:
      'Puertos COM, tarifas por kg, pesaje manual y ajustes de lector de tarjetas desde la app.',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="features">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Funcionalidades</span>
          <h2 className="section-title">Todo lo que necesita su planta de pesaje</h2>
          <p className="section-subtitle">
            FBApp reúne en una sola aplicación las herramientas que antes requerían
            múltiples sistemas desconectados.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="features__card">
              <span className="features__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
