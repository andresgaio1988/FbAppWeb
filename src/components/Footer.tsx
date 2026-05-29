import './Footer.css';
import { logoUrl } from '../config/assets';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logoUrl} alt="Fabio Balanzas" className="footer__logo" />
          <p>Sistema de gestión de pesajes industriales para balanza LR22.</p>
        </div>

        <nav className="footer__nav" aria-label="Pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#producto">Producto</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {year} Fabio Balanzas. Todos los derechos reservados.</span>
          <span>FBApp · Balanza LR22</span>
        </div>
      </div>
    </footer>
  );
}
