export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "rgba(243,236,223,0.7)",
        padding: "80px 0 36px",
        borderTop: "1px solid var(--line-on-dark)",
      }}
    >
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ maxWidth: 340 }}>
            <div className="brand" style={{ color: "var(--cream)", marginBottom: 20 }}>
              <span className="brand-mark">F</span>
              <span>
                <b>Forteca</b>Cleaning
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(243,236,223,0.6)" }}>
              Premium property cleaning across the Pocono region. Residential, commercial, and
              vacation rental specialists — built by the Forteca Estate family.
            </p>
          </div>

          <FooterCol title="Services">
            <a href="#services">Vacation Turnover</a>
            <a href="#services">Residential</a>
            <a href="#services">Commercial</a>
            <a href="#services">Deep Cleaning</a>
            <a href="#services">Move-In / Out</a>
          </FooterCol>

          <FooterCol title="Company">
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="https://fortecaestate.com">Forteca Estate →</a>
          </FooterCol>

          <FooterCol title="Hours">
            <span>Mon – Fri · 7am – 6pm</span>
            <span>Saturday · 8am – 4pm</span>
            <span>Sunday · Closed</span>
            <a href="tel:+15705550123" style={{ color: "var(--gold)", marginTop: 12 }}>
              (570) 555-0123
            </a>
          </FooterCol>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            fontSize: 12,
            color: "rgba(243,236,223,0.45)",
            letterSpacing: "0.02em",
          }}
          className="foot-bottom"
        >
          <div>© {new Date().getFullYear()} Forteca Cleaning. A Forteca Estate company.</div>
          <div style={{ display: "flex", gap: 16 }}>
            <SocialIcon label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </SocialIcon>
          </div>
        </div>
      </div>

      <style>{`
        .foot-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--line-on-dark);
        }
        @media (max-width: 860px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
          .foot-bottom { flex-direction: column; gap: 16px; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontWeight: 500,
          margin: "0 0 20px",
        }}
      >
        {title}
      </h5>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
        {children}
      </div>
      <style>{`
        a { color: rgba(243,236,223,0.68); transition: color 0.2s; }
        a:hover { color: var(--gold); }
      `}</style>
    </div>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "1px solid var(--line-on-dark)",
        display: "grid",
        placeItems: "center",
        color: "rgba(243,236,223,0.6)",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {children}
      </svg>
    </a>
  );
}
