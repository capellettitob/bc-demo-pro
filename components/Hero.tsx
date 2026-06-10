'use client';

import { useEffect, useRef, useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/393801481472?text=Ciao%20Beauty%20Concept,%20vorrei%20prenotare%20un%20appuntamento';

// First 4 photos from public/images, in folder order. Alt text in Italian.
// NOTE: studio-clinic-room.jpg currently shows a foreign brand on the wall
// ("New Beginnings Clinic"). [PLACEHOLDER] — replace with a real photo of
// Beauty Concept's interior before going live.
type Slide = { src: string; alt: string; brand?: boolean };

const SLIDES: Slide[] = [
  {
    src: '/images/nails-ombre-close-up.jpg',
    alt: 'Mani con manicure semipermanente in tonalità ombré chiare',
  },
  {
    src: '/images/skincare-serum-editorial.jpg',
    alt: 'Trattamento viso editoriale con siero e petali',
  },
  {
    src: '/images/studio-clinic-room.jpg',
    alt: 'Sala trattamenti luminosa con dettagli minimali',
  },
  {
    src: '/images/studio-hallway.jpg',
    alt: 'Ingresso del centro estetico, atmosfera calda e luminosa',
  },
  {
    src: '/logos/logo-gold-mark.png',
    alt: 'Logo Beauty Concept by Andreea Maxim',
    brand: true,
  },
];

const INTERVAL_MS = 3000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    tickRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
    };
  }, [reducedMotion]);

  const activeIndex = reducedMotion ? 0 : index;

  return (
    <section
      id="home"
      className="hero"
      aria-label="Apertura"
    >
      {/* Photo column — anchored to the right edge of the viewport, clean
          rectangular cut, no mask fade. */}
      <div
        className="hero-photo"
        aria-roledescription="carousel"
        aria-label="Galleria immagini di apertura"
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`hero-media-slide${i === activeIndex ? ' is-active' : ''}${
              s.brand ? ' is-brand' : ''
            }`}
            aria-hidden={i !== activeIndex}
          >
            {/* All 4 hero images load eagerly — they're tiny relative to
                the page weight, and pre-loading avoids a decode hiccup on
                the first carousel cycle that reads as a "twitch." */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} loading="eager" decoding="async" />
          </div>
        ))}
      </div>

      {/* Text column — contained, sits on the left half of the page. */}
      <div className="hero-text-wrap">
        <div className="hero-text">
          <h1 className="hero-headline">
            <span>Spazio</span>
            <span>alla</span>
            <span>bellezza.</span>
          </h1>
          <p className="hero-subhead">Centro estetico</p>
          <p className="hero-sub">
            Unghie, viso e cura della persona, in uno spazio luminoso e
            minimale nel cuore di Cesena.
          </p>
          <div className="hero-actions">
            <a
              className="btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prenota su WhatsApp
            </a>
            {!reducedMotion && (
              <div
                className="hero-dots"
                role="tablist"
                aria-label="Indicatori slide"
              >
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Vai alla slide ${i + 1}`}
                    className={`hero-dot${i === activeIndex ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
