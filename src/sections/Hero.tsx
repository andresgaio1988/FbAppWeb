import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-green" />
        <div className="hero__bg-gray" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__badge">Sistema de gestión industrial</span>
          <h1 className="hero__title">
            Control total de pesajes con <span>FBApp</span>
          </h1>
          <p className="hero__description">
            Software profesional para balanza LR22: lectura en tiempo real por RS232,
            gestión de clientes y tarjetas RFID, pesaje en dos etapas y recibos digitales.
            Diseñado por Fabio Balanzas para operación confiable en planta.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar información
            </a>
            <a href="#funcionalidades" className="btn btn-ghost">
              Ver funcionalidades
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>RS232</dt>
              <dd>Protocolo EL05 LR22</dd>
            </div>
            <div>
              <dt>Offline</dt>
              <dd>Base SQLite cifrada</dd>
            </div>
            <div>
              <dt>2 etapas</dt>
              <dd>Pesaje inicial y final</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <span className="hero__dot hero__dot--green" />
              <span>FBApp — Pesaje en curso</span>
            </div>
            <div className="hero__weight">
              <span className="hero__weight-value">12.450,00</span>
              <span className="hero__weight-unit">kg</span>
            </div>
            <div className="hero__status hero__status--stable">
              <span className="hero__status-dot" />
              Peso estable
            </div>
            <div className="hero__card-row">
              <div>
                <small>Cliente</small>
                <strong>Transportes del Sur S.A.</strong>
              </div>
              <div>
                <small>Etapa</small>
                <strong>Pesada final</strong>
              </div>
            </div>
          </div>

          <div className="hero__card hero__card--float">
            <span className="hero__float-icon">✓</span>
            <div>
              <strong>Recibo generado</strong>
              <p>PDF enviado por email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
