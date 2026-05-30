import ScrollReveal from '../components/ScrollReveal';
import { featureIcons } from '../components/Icons';
import './Features.css';

const features = [
  {
    title: 'Lectura en tiempo real',
    description:
      'Conexión RS232 directa con su balanza. Captura automática del peso estable con protocolo EL05 y simulador para pruebas.',
    tag: 'Core',
  },
  {
    title: 'Gestión de clientes',
    description:
      'Base de clientes con búsqueda instantánea, tarjetas RFID, saldos prepago e historial completo de pesajes por cliente.',
    tag: 'CRM',
  },
  {
    title: 'Pesaje en dos etapas',
    description:
      'Flujo inicial y final con número de movimiento único. Cálculo automático de bruto, tara y neto sin intervención manual.',
    tag: 'Flujo',
  },
  {
    title: 'Recibos y reportes',
    description:
      'Generación de recibos, impresión directa, envío por email y reportes de pesajes exportables para contabilidad.',
    tag: 'Docs',
  },
  {
    title: 'Seguridad empresarial',
    description:
      'Base de datos cifrada con SQLCipher, usuarios con roles Admin/Operador y licenciamiento RSA por equipo.',
    tag: 'Seguro',
  },
  {
    title: 'Totalmente configurable',
    description:
      'Puertos COM, tarifas por kg o fijas, pesaje manual, lector de tarjetas y ajustes de decimal — todo desde la app.',
    tag: 'Flex',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="features">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Funcionalidades</span>
            <h2 className="section-title">Una plataforma, todo incluido</h2>
            <p className="section-subtitle">
              Olvídese de combinar planillas, impresoras y sistemas separados.
              FBApp integra cada etapa del ciclo de pesaje en un solo lugar.
            </p>
          </div>
        </ScrollReveal>

        <div className="features__grid">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <article className="features__card">
                  <div className="features__card-top">
                    <span className="features__icon">
                      <Icon />
                    </span>
                    <span className="features__tag">{feature.tag}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
