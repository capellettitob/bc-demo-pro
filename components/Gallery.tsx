// Edge-to-edge mosaic gallery. Hover overlay on desktop, static label on mobile.
// Each tile links to "#" for now — treatment subpages come in a later phase.

// Each label describes what's actually visible in the photo. The four
// treatment-specific shots get treatment names; the two atmospheric studio
// shots get space-of-the-salon labels instead of misleading treatment names.
const TILES = [
  {
    label: 'Manicure',
    img: '/images/nails-ombre-close-up.jpg',
    alt: 'Manicure semipermanente in tonalità ombré chiare',
    cls: 'tile-1',
  },
  {
    label: "L'ambiente",
    img: '/images/studio-hallway.jpg',
    alt: 'Ingresso del centro estetico, atmosfera calda e luminosa',
    cls: 'tile-2',
  },
  {
    label: 'Pedicure',
    img: '/images/studio-pedicure-bar.jpg',
    alt: 'Postazioni pedicure con poltrone in bouclé e bacinelle dedicate',
    cls: 'tile-3',
  },
  {
    label: 'Sala trattamenti',
    img: '/images/studio-treatment-room.jpg',
    alt: 'Sala trattamenti in stile minimale, luminosa',
    cls: 'tile-4',
  },
  {
    label: 'Ceretta',
    img: '/images/waxing-treatment.jpg',
    alt: 'Trattamento di ceretta professionale',
    cls: 'tile-5',
  },
  {
    label: 'Massaggio Viso',
    img: '/images/skincare-serum-editorial.jpg',
    alt: 'Trattamento viso con siero, dettaglio editoriale',
    cls: 'tile-6',
  },
];

export default function Gallery() {
  return (
    <section id="trattamenti" className="gallery">
      <span id="galleria" className="anchor-offset" aria-hidden="true" />
      <div className="gallery-head reveal">
        <span className="eyebrow">Trattamenti & Galleria</span>
        <h2>Il nostro mondo, <em>in dettaglio.</em></h2>
      </div>

      <div className="mosaic" role="list">
        {TILES.map((t) => (
          // No .reveal class on the tiles themselves — they need to be
          // visible immediately, not depend on an observer firing.
          <a key={t.label} href="#" className={`tile ${t.cls}`} role="listitem">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.img} alt={t.alt} loading="lazy" />
            <div className="tile-overlay" aria-hidden="true">
              <span className="label">{t.label}</span>
              <span className="scopri">Scopri</span>
            </div>
            <span className="tile-mobile-label">{t.label}</span>
          </a>
        ))}

        {/* Branded strip closing the mosaic — full-width, not a link. */}
        <div className="tile tile-logo" role="listitem">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo-brown-mark.png" alt="Beauty Concept" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
