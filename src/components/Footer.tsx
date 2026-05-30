import { logoUrl } from '../config/assets';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logoUrl} alt="Fabio Balanzas" className="footer__logo" />
          <p>
            Software de gestión de pesajes industriales para su planta.
            Desarrollado por Fabio Balanzas.
          </p>
        </div>

        <div className="footer__cols">
          <nav className="footer__col" aria-label="Navegación">
            <strong>Navegación</strong>
            <a href="#inicio">Inicio</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#producto">Producto</a>
            <a href="#funcionalidades">Funcionalidades</a>
          </nav>
          <nav className="footer__col" aria-label="Más información">
            <strong>Más</strong>
            <a href="#sectores">Sectores</a>
            <a href="#licencias">Licencias</a>
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="footer__col">
            <strong>Producto</strong>
            <span>FBApp v1</span>
            <span>Pesaje industrial</span>
            <span>Windows · .NET 8</span>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {year} Fabio Balanzas. Todos los derechos reservados.</span>
          <a href="#contacto" className="footer__cta-link">Solicitar demo →</a>
        </div>
      </div>
    </footer>
  );
}
