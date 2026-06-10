// Lightweight inline SVG icons — no external icon library.
// All currentColor so they inherit ink/cream depending on context.

export const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 8h2V5h-2.2C12 5 11 6 11 8v2H9v3h2v6h3v-6h2.2l.3-3H14V8.5c0-.3.2-.5.5-.5H14z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 19l1-3.5A7.5 7.5 0 1 1 8.5 18L5 19z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M9 10c.3 1.6 1.4 2.7 3 3 .4.1.7 0 1-.3l.5-.5c.3-.3.7-.3 1 0l1 .9c.3.3.3.7 0 1l-.3.3c-.7.7-1.7.9-2.6.5-1.7-.7-3-2-3.7-3.7-.4-.9-.2-1.9.5-2.6l.3-.3c.3-.3.7-.3 1 0l.9 1c.3.3.3.7 0 1l-.5.5c-.3.3-.4.6-.3 1z"
      fill="currentColor"
    />
  </svg>
);
