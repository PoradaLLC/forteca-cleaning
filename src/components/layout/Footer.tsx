import Image from "next/image";

const socials = [
  { href: "https://www.facebook.com/FortecaEstate/", label: "Facebook" },
  { href: "https://www.instagram.com/fortecaestate/", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UC7VRaZDHymQho2eE9v___kQ", label: "YouTube" },
];

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
              <Image
                src="/images/logo.png"
                alt="Forteca Cleaning"
                width={34}
                height={34}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span>
                <b>Forteca</b>Cleaning
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(243,236,223,0.6)" }}>
              Premium property cleaning across the Pocono region. Residential, commercial, and
              vacation rental specialists — built by the Forteca Estate family.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {socials.map((s, i) => (
                <span key={s.label} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  {i > 0 && (
                    <span style={{ color: "rgba(243,236,223,0.25)" }}>·</span>
                  )}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foot-social"
                  >
                    {s.label}
                  </a>
                </span>
              ))}
            </div>
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

          <FooterCol title="Legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </FooterCol>

          <FooterCol title="Hours">
            <span>Mon – Fri · 7am – 6pm</span>
            <span>Saturday · 8am – 4pm</span>
            <span>Sunday · Closed</span>
            <a href="tel:+13475560089" style={{ color: "var(--gold)", marginTop: 12 }}>
              (347) 556-0089
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
        </div>
      </div>

      <style>{`
        .foot-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--line-on-dark);
        }
        @media (max-width: 860px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
          .foot-bottom { flex-direction: column; gap: 16px; }
        }
        .foot-social {
          color: rgba(243,236,223,0.45);
          transition: color 0.2s;
        }
        .foot-social:hover { color: var(--gold); }
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
