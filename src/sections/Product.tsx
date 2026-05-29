import ScrollReveal from '../components/ScrollReveal';
import { logoUrl } from '../config/assets';
import { IconCheck } from '../components/Icons';
import './Product.css';

const highlights = [
  'Compatible con balanza LR22 vía RS232',
  'Pesaje y registro local sin depender de la nube',
  'Recibos con su marca Fabio Balanzas',
  'Licencias Standard y Premium',
];

export default function Product() {
  return (
    <section id="producto" className="product">
      <div className="container product__layout">
        <ScrollReveal className="product__visual">
          <div className="product__logo-frame">
            <div className="product__logo-glow" aria-hidden="true" />
            <img src={logoUrl} alt="Fabio Balanzas" className="product__logo" />
            <div className="product__version">FBApp · v1</div>
          </div>
          <div className="product__chip-row">
            <span className="product__chip">Windows 10+</span>
            <span className="product__chip">.NET 8</span>
            <span className="product__chip">SQLite cifrado</span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="product__content" delay={150}>
          <span className="section-label">El producto</span>
          <h2 className="section-title">
            El software que su balanza LR22 necesitaba
          </h2>
          <p className="section-subtitle">
            FBApp es la aplicación de escritorio desarrollada por Fabio Balanzas que unifica
            pesaje, clientes, tarifas y documentación en una sola pantalla. Diseñada para
            operadores de planta, no para informáticos.
          </p>

          <ul className="product__highlights">
            {highlights.map((item) => (
              <li key={item}>
                <IconCheck />
                {item}
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary">
            Quiero una demo
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
