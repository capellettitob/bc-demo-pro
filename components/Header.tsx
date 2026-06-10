'use client';

import { useEffect, useRef, useState } from 'react';
import { InstagramIcon, FacebookIcon } from './Icons';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#trattamenti', label: 'Trattamenti' },
  { href: '#contatti', label: 'Contatti' },
];

// Height of the utility bar above the header. The header is fixed at
// `top: UTILITY_HEIGHT` initially; as the user scrolls the first
// UTILITY_HEIGHT pixels, we slide the header upward 1:1 so it ends up at
// `top: 0` — exactly closing the gap the utility bar leaves behind.
const UTILITY_HEIGHT = 36;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (headerRef.current) {
        // Direct DOM write — avoids re-rendering React on every scroll tick.
        headerRef.current.style.top = `${Math.max(0, UTILITY_HEIGHT - y)}px`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  // Close panel on Escape, for keyboard users
  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? ' is-scrolled' : ''}`}
        role="banner"
      >
        <div className="container header-inner">
          <div className="header-socials">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook di Beauty Concept"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram di Beauty Concept"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>

          <a href="#home" className="logo" aria-label="Beauty Concept by Andreea Maxim — home">
            <span className="logo-main">Beauty Concept</span>
            <span className="logo-script">by Andreea Maxim</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            aria-label={navOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="bars" aria-hidden="true" />
          </button>
        </div>
      </header>

      <nav
        id="primary-nav"
        className={`nav-panel${navOpen ? ' is-open' : ''}`}
        aria-label="Navigazione principale"
        aria-hidden={!navOpen}
      >
        <button
          className="nav-close"
          type="button"
          onClick={() => setNavOpen(false)}
          aria-label="Chiudi menu"
        >
          ×
        </button>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setNavOpen(false)}
                tabIndex={navOpen ? 0 : -1}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
