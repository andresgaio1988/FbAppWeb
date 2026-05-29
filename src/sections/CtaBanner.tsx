import { IconArrowRight } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Llamada a la acción">
      <div className="container">
        <ScrollReveal>
          <div className="cta-banner__inner">
            <div className="cta-banner__text">
              <h2>¿Quiere ver FBApp en acción en su planta?</h2>
              <p>
                Agende una demostración sin compromiso. Le mostramos el flujo completo
                de pesaje con su balanza LR22.
              </p>
            </div>
            <a href="#contacto" className="btn btn-primary btn-lg cta-banner__btn">
              Agendar demo gratuita
              <IconArrowRight />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
