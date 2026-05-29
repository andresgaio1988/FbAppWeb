import './Product.css';
import { logoUrl } from '../config/assets';

export default function Product() {
  return (
    <section id="producto" className="product">
      <div className="container product__grid">
        <div className="product__image-wrap">
          <img src={logoUrl} alt="Fabio Balanzas" className="product__logo" />
          <div className="product__badge">FBApp v1</div>
        </div>
        <div className="product__content">
          <span className="section-label">El producto</span>
          <h2 className="section-title">FBApp — Gestión integral de balanza LR22</h2>
          <p className="section-subtitle">
            Aplicación de escritorio para Windows que centraliza todo el flujo de pesaje
            industrial: desde la lectura del indicador hasta el recibo y el reporte.
          </p>
          <ul className="product__list">
            <li>
              <strong>Comunicación RS232</strong>
              <span>Lectura continua con protocolo EL05 y detección de peso estable.</span>
            </li>
            <li>
              <strong>Operación offline</strong>
              <span>Base de datos SQLite cifrada con SQLCipher para uso sin conexión.</span>
            </li>
            <li>
              <strong>Identificación rápida</strong>
              <span>Clientes por búsqueda o tarjeta RFID con saldo prepago.</span>
            </li>
            <li>
              <strong>Documentación automática</strong>
              <span>Recibos PDF, envío por email y reportes de pesajes.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
