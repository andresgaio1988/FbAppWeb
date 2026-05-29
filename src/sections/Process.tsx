import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Identificar',
    description: 'El operador identifica al cliente con tarjeta RFID o búsqueda manual.',
  },
  {
    number: '02',
    title: 'Pesar',
    description: 'FBApp captura el peso estable de la balanza LR22 en la etapa inicial.',
  },
  {
    number: '03',
    title: 'Completar',
    description: 'En la segunda etapa se registra la pesada final y se calcula el neto.',
  },
  {
    number: '04',
    title: 'Documentar',
    description: 'Se genera el recibo PDF, se imprime o envía por email al cliente.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="process">
      <div className="container">
        <div className="process__header">
          <span className="section-label">Proceso</span>
          <h2 className="section-title">Flujo de pesaje simplificado</h2>
          <p className="section-subtitle">
            Cuatro pasos claros para operadores de planta, sin fricción ni doble carga de datos.
          </p>
        </div>

        <ol className="process__steps">
          {steps.map((step, index) => (
            <li key={step.number} className="process__step">
              <div className="process__number">{step.number}</div>
              {index < steps.length - 1 && <div className="process__connector" aria-hidden="true" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
