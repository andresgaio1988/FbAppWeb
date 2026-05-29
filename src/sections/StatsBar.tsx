import ScrollReveal from '../components/ScrollReveal';
import './StatsBar.css';

const stats = [
  { value: 'RS232', label: 'Conexión nativa LR22', sub: 'Protocolo EL05' },
  { value: '2', label: 'Etapas de pesaje', sub: 'Inicial y final' },
  { value: '100%', label: 'Operación offline', sub: 'Sin depender de internet' },
  { value: '0', label: 'Papeles perdidos', sub: 'Todo queda registrado' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Datos destacados">
      <div className="container">
        <ScrollReveal>
          <div className="stats-bar__grid">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stats-bar__item" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="stats-bar__value">{stat.value}</span>
                <strong>{stat.label}</strong>
                <span>{stat.sub}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
