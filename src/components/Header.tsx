import { useEffect, useState } from 'react';
import './Header.css';
import { logoUrl } from '../config/assets';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#producto', label: 'Producto' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#sectores', label: 'Sectores' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" onClick={closeMenu}>
          <img src={logoUrl} alt="Fabio Balanzas" className="header__logo" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Principal">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn-primary header__cta" onClick={closeMenu}>
            Demo gratuita
          </a>
        </nav>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
