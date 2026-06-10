import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Reveal from '@/components/Reveal';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '@/components/Icons';

const PHONE_DISPLAY = '+39 380 148 1472';
const PHONE_TEL = 'tel:+393801481472';
const WHATSAPP_URL =
  'https://wa.me/393801481472?text=Ciao%20Beauty%20Concept,%20vorrei%20prenotare%20un%20appuntamento';

// [PLACEHOLDER] — confirm with Andreea before going live
const INSTAGRAM_HANDLE = '@beautyconcept.andreea';
const INSTAGRAM_URL = 'https://www.instagram.com/';

export default function HomePage() {
  return (
    <>
      {/* Utility bar — sits above the fixed header */}
      <div className="utility-bar" role="region" aria-label="Contatti rapidi">
        <a href={PHONE_TEL}>Prenota al telefono · {PHONE_DISPLAY}</a>
      </div>

      <Header />

      <main>
        <Hero />

        {/* ===== Concept section ===== */}
        <section className="concept">
          <div className="container concept-inner reveal">
            <span className="eyebrow">Il nostro concept</span>
            <h2>
              Bellezza autentica, <em>cura del dettaglio.</em>
            </h2>
            {/* [PLACEHOLDER] copy provided in brief — confirm with Andreea */}
            <p>
              Beauty Concept nasce dalla passione di Alina Andreea Maxim per la
              bellezza autentica e la cura del dettaglio. Un nuovo spazio nel
              cuore di Cesena, luminoso e minimale, dove ogni trattamento è
              pensato per farti sentire a tuo agio, coccolata e curata.
            </p>
            <span className="concept-mark" aria-hidden="true" />
          </div>
        </section>

        <Gallery />

        {/* ===== CTA band ===== */}
        <section className="cta-band">
          <div className="container reveal">
            <span className="eyebrow">Prenota</span>
            <p>Il tuo momento di bellezza, su appuntamento.</p>
            <a
              className="btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              Scrivici su WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="site-footer" id="contatti">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-wordmark">Beauty Concept</div>
              <div className="logo-sub">Centro estetico · Cesena</div>
              <p>
                Uno spazio luminoso e minimale dedicato alla cura della persona,
                nel cuore di Cesena.
              </p>
            </div>

            <div className="footer-col">
              <h4>Contatti</h4>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div className="footer-col">
              <h4>Dove siamo</h4>
              <p>Via Romea 119</p>
              <p>47522 Cesena (FC)</p>
            </div>

            <div className="footer-col">
              <h4>Orari</h4>
              <p>Lun–Sab 9:00–19:00</p>
              <p>Dom chiuso</p>
              <div className="footer-socials" aria-label="Social">
                <a
                  href={INSTAGRAM_URL}
                  aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook di Beauty Concept"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </div>
              {/* [PLACEHOLDER] — confirm real Instagram handle */}
              <p style={{ marginTop: 10, fontSize: 13, opacity: 0.7 }}>
                {INSTAGRAM_HANDLE}
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Beauty Concept by Andreea Maxim</span>
            <span>Sito dimostrativo — versione demo</span>
          </div>
        </div>
      </footer>

      {/* ===== Floating WhatsApp button ===== */}
      <a
        className="fab-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <Reveal />
    </>
  );
}
