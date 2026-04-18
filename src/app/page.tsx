import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ContactForm";

const HERO_IMG =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&q=80";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";

const services = [
  {
    num: "01 — Featured",
    title: "Vacation Rental Turnover",
    body:
      "Fast, reliable turnovers between guests. Photo-checked, linen-swapped, inventory-logged — your five-star reviews, protected.",
    meta: "Same-day · Linens · Restock",
    featured: true,
  },
  {
    num: "02",
    title: "Residential Cleaning",
    body:
      "Regular home cleaning tailored to your schedule. Weekly, bi-weekly, or monthly rhythms that keep your home effortlessly fresh.",
    meta: "Weekly · Bi-weekly · Monthly",
  },
  {
    num: "03",
    title: "Commercial Cleaning",
    body:
      "Office and business cleaning that creates the professional environment your team and clients deserve. After-hours available.",
    meta: "Offices · Retail · Medical",
  },
  {
    num: "04",
    title: "Deep Cleaning",
    body:
      "Thorough, top-to-bottom cleaning that reaches every corner, baseboard, and appliance. Perfect for seasonal refreshes.",
    meta: "Seasonal · Detail · Whole-home",
  },
  {
    num: "05",
    title: "Move-In / Move-Out",
    body:
      "Start fresh in a new space, or leave the old one spotless for the next owner. We handle the heavy lifting — you focus on the move.",
    meta: "Listing-ready · Full prep",
  },
  {
    num: "06",
    title: "Post-Construction",
    body:
      "Dust, debris, and fine residue removed after renovations. We make your newly built or remodeled space genuinely move-in ready.",
    meta: "Dust · Debris · Detail",
  },
];

const stats = [
  { n: "500", em: "+", l: "Properties Cleaned" },
  { n: "100", em: "%", l: "Satisfaction Rate" },
  { n: "5", em: "+", l: "Years Experience" },
  { n: "24", em: "hr", l: "Response Time" },
];

const steps = [
  {
    n: "Step 01",
    h: "Walk-Through",
    p: "We visit or video-tour your property, note every detail, and build a tailored cleaning checklist around your standards.",
  },
  {
    n: "Step 02",
    h: "Schedule",
    p: "Book one-off, recurring, or same-day turnovers. Our calendar syncs with Airbnb, Vrbo, and direct-booking platforms.",
  },
  {
    n: "Step 03",
    h: "Clean & Document",
    p: "Our team executes the checklist and photographs every room on the way out — so you always know exactly what the guest will see.",
  },
  {
    n: "Step 04",
    h: "Report",
    p: "You receive a completion report with photos, restock notes, and any issues flagged — usually before you'd even think to ask.",
  },
];

const testimonials = [
  {
    quote:
      "Forteca transformed our vacation rental business. Every turnover is spotless and our guests consistently mention how clean the property is.",
    who: "Sarah M.",
    role: "Short-Term Rental Host · Lake Harmony",
  },
  {
    quote:
      "We've used Forteca for our office cleaning for over a year. Reliable, thorough, and always going above and beyond. Highly recommend.",
    who: "James R.",
    role: "Office Manager · Stroudsburg",
  },
  {
    quote:
      "The deep cleaning they did on our home was incredible. Areas I didn't even think about were sparkling clean. Attention to detail is remarkable.",
    who: "Linda K.",
    role: "Homeowner · East Stroudsburg",
  },
];

const marqueeItems = [
  "Spotless Turnovers",
  "Linen Service",
  "Eco-Friendly Products",
  "Same-Week Availability",
  "Photo-Documented",
  "Fully Insured",
  "Pocono-Based",
  "Trusted by Hosts",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Badges />
        <Services />
        <Marquee />
        <About />
        <Process />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        color: "var(--cream)",
        display: "grid",
        alignItems: "end",
        padding: "0 0 80px",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${HERO_IMG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.55) saturate(0.9)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14,22,34,0.7) 0%, rgba(14,22,34,0.2) 40%, rgba(14,22,34,0.9) 100%)",
        }}
      />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="eyebrow on-dark" style={{ marginBottom: 24 }}>
          Professional Property Cleaning
        </div>
        <h1
          className="h-display h1"
          style={{ color: "var(--cream)", maxWidth: "14ch", marginBottom: 28 }}
        >
          Your property,
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
            perfectly
          </em>{" "}
          clean.
        </h1>
        <p
          className="lead"
          style={{
            color: "rgba(243,236,223,0.85)",
            marginBottom: 36,
            maxWidth: "52ch",
          }}
        >
          Turnover, deep, and recurring cleaning across the Pocono region — built by Forteca
          Estate, trusted by hosts.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="tel:+15705550123" className="btn-gold">
            Call (570) 555-0123 →
          </a>
          <a href="#services" className="btn-ghost">
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}

function Badges() {
  const items = [
    "Insured & Bonded",
    "Flexible Scheduling",
    "Satisfaction Guaranteed",
    "5-Star Rated",
    "Eco-Friendly Options",
  ];
  return (
    <div
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "28px 0",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--ink)",
            }}
          >
            <span style={{ color: "var(--gold)", fontSize: 14 }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          {eyebrow}
        </div>
        <h2 className="h-display h2">{title}</h2>
      </div>
      <p className="lead" style={{ marginTop: 20 }}>
        {lead}
      </p>
      <style>{`
        .section-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          margin-bottom: 72px;
        }
        @media (max-width: 860px) {
          .section-head { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              A full range of{" "}
              <em style={{ color: "var(--gold-deep)", fontStyle: "italic", fontWeight: 400 }}>
                pristine
              </em>{" "}
              cleaning services.
            </>
          }
          lead="From fast vacation-rental turnovers to deep seasonal resets — we keep homes, offices, and investment properties in immaculate condition across the Pocono region."
        />

        <div className="services-grid">
          {services.map((s) => (
            <article
              key={s.title}
              className={`service${s.featured ? " featured" : ""}`}
            >
              <div className="service-num">{s.num}</div>
              <h3 className="h3">{s.title}</h3>
              <p>{s.body}</p>
              <div className="meta">
                <span>{s.meta}</span>
                <span className="arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .service {
          background: var(--paper);
          padding: 44px 40px 40px;
          display: flex; flex-direction: column;
          min-height: 340px;
          transition: background 0.25s;
        }
        .service:hover { background: #FBF8F1; }
        .service-num {
          font-family: var(--font-display), serif;
          font-size: 14px; font-weight: 500;
          color: var(--gold-deep);
          letter-spacing: 0.02em;
          margin-bottom: 28px;
        }
        .service h3 {
          font-family: var(--font-display), serif;
          margin: 0 0 14px;
        }
        .service p {
          margin: 0 0 24px;
          color: var(--slate);
          font-size: 14.5px;
          line-height: 1.65;
        }
        .service .meta {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--slate-2);
        }
        .service .meta .arrow {
          color: var(--gold-deep); font-size: 16px;
          transition: transform 0.2s;
        }
        .service:hover .meta .arrow { transform: translateX(4px); }
        .service.featured { background: var(--ink); color: var(--cream); }
        .service.featured .service-num { color: var(--gold); }
        .service.featured p { color: rgba(243,236,223,0.76); }
        .service.featured .meta {
          border-color: var(--line-on-dark);
          color: rgba(243,236,223,0.6);
        }
        .service.featured .meta .arrow { color: var(--gold); }
        .service.featured:hover { background: var(--ink-2); }
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function Marquee() {
  const block = (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
      {marqueeItems.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
          <span style={{ color: "var(--gold)" }}>✦</span>
          {item}
        </span>
      ))}
    </span>
  );
  return (
    <div
      style={{
        background: "var(--ink)",
        color: "var(--gold)",
        padding: "26px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--line-on-dark)",
        borderBottom: "1px solid var(--line-on-dark)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          whiteSpace: "nowrap",
          animation: "marquee 40s linear infinite",
          fontFamily: "var(--font-display), serif",
          fontSize: 22,
          letterSpacing: "0.01em",
        }}
      >
        {block}
        <span aria-hidden>{block}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--cream)", scrollMarginTop: 80 }}
    >
      <div className="wrap about-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            Why Forteca
          </div>
          <h2 className="h-display h2" style={{ marginBottom: 28 }}>
            A cleaning service built by{" "}
            <em
              style={{ fontStyle: "italic", color: "var(--gold-deep)", fontWeight: 400 }}
            >
              hosts
            </em>
            , for hosts.
          </h2>
          <p style={pAbout}>
            At Forteca Cleaning, we understand that your property is your most valuable asset.
            Born out of Forteca Estate&apos;s own rental portfolio, we treat every home and
            business with the same exacting care we give our own.
          </p>
          <p style={pAbout}>
            Our team is fully trained, insured, and committed to delivering a consistent,
            photo-documented clean every single time. Professional-grade products, proven
            techniques, and a standard high enough to protect your five-star reviews.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: 56,
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "var(--ink)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {s.n}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "var(--gold)",
                      fontWeight: 400,
                    }}
                  >
                    {s.em}
                  </em>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--slate-2)",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            aspectRatio: "4/5",
            background: "var(--paper)",
            border: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${ABOUT_IMG}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="about-badge">
            Est.
            <em>2020</em>
            Pocono PA
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px 48px;
          padding-top: 40px;
          margin-top: 36px;
          border-top: 1px solid var(--line);
        }
        .about-badge {
          position: absolute;
          right: -28px; bottom: -28px;
          width: 170px; height: 170px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--ink);
          display: grid; place-items: center;
          text-align: center;
          font-family: var(--font-display), serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          line-height: 1.4;
          box-shadow: 0 20px 40px rgba(14,22,34,0.2);
        }
        .about-badge em {
          display: block;
          font-style: italic; font-size: 32px; letter-spacing: 0;
          text-transform: none; font-weight: 500;
          margin: 4px 0;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-badge { right: 16px; bottom: 16px; width: 130px; height: 130px; font-size: 11px; }
          .about-badge em { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}

const pAbout: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: "var(--slate)",
  margin: "0 0 18px",
  maxWidth: "54ch",
};

function Process() {
  return (
    <section
      className="section"
      style={{
        background: "var(--paper)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              Four quiet steps.
              <br />
              One{" "}
              <em
                style={{ fontStyle: "italic", color: "var(--gold-deep)", fontWeight: 400 }}
              >
                spotless
              </em>{" "}
              property.
            </>
          }
          lead="We've refined our process over hundreds of turnovers. Every clean is predictable, documented, and ready for the next guest or the next day."
        />

        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.h}>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 14,
                  color: "var(--gold-deep)",
                  letterSpacing: "0.02em",
                  borderTop: "1px solid var(--gold)",
                  paddingTop: 14,
                  marginBottom: 28,
                }}
              >
                {s.n}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 26,
                  fontWeight: 500,
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.h}
              </h4>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--slate)",
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        @media (max-width: 860px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
      `}</style>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "var(--paper)", textAlign: "center", scrollMarginTop: 80 }}
    >
      <div className="wrap">
        <div style={{ marginBottom: 72 }}>
          <div className="eyebrow" style={{ display: "inline-block", marginBottom: 18 }}>
            Client Stories
          </div>
          <h2 className="h-display h2" style={{ marginTop: 14 }}>
            What our clients say.
          </h2>
        </div>
        <div className="t-grid">
          {testimonials.map((t) => (
            <div key={t.who} className="t-card">
              <div
                style={{
                  color: "var(--gold)",
                  fontSize: 14,
                  letterSpacing: "2px",
                  marginBottom: 24,
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontStyle: "italic",
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: "var(--ink)",
                  margin: "0 0 28px",
                  fontWeight: 400,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>
                  {t.who}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--slate-2)",
                    marginTop: 3,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .t-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .t-card {
          background: var(--cream);
          border: 1px solid var(--line);
          padding: 40px 36px;
          text-align: left;
          display: flex; flex-direction: column;
          min-height: 320px;
        }
        @media (max-width: 860px) {
          .t-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function CtaBand() {
  return (
    <section
      className="section"
      style={{ background: "var(--ink)", color: "var(--cream)", textAlign: "center" }}
    >
      <div className="wrap">
        <div
          className="eyebrow on-dark"
          style={{ display: "inline-block", marginBottom: 24 }}
        >
          Book Direct · Local Team
        </div>
        <h2
          className="h-display h2"
          style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 28px" }}
        >
          Your next spotless property is{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
            one call
          </em>{" "}
          away.
        </h2>
        <p
          style={{
            color: "rgba(243,236,223,0.76)",
            margin: "0 auto 40px",
            maxWidth: "52ch",
            fontSize: 17,
          }}
        >
          Skip the platforms and chatbots. Call us directly — a local team member will walk you
          through your needs and have a quote in your hands, usually within the hour.
        </p>
        <a
          href="tel:+15705550123"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: 64,
            fontWeight: 500,
            color: "var(--gold)",
            letterSpacing: "-0.01em",
            margin: "0 0 14px",
            display: "inline-block",
          }}
        >
          (570) 555-0123
        </a>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(243,236,223,0.55)",
          }}
        >
          Mon – Fri · 7am – 6pm &nbsp;·&nbsp; Sat · 8am – 4pm
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            justifyContent: "center",
            margin: "48px auto 36px",
            color: "rgba(243,236,223,0.4)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            maxWidth: 280,
          }}
        >
          <span style={dividerLine} />
          Or
          <span style={dividerLine} />
        </div>
        <a href="#contact" className="btn-ghost">
          Request a quote online →
        </a>
      </div>
    </section>
  );
}

const dividerLine: React.CSSProperties = {
  flex: 1,
  height: 1,
  background: "var(--line-on-dark)",
};

function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--cream)", scrollMarginTop: 80 }}
    >
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            Get in touch
          </div>
          <h2 className="h-display h2" style={{ marginBottom: 28 }}>
            Request a{" "}
            <em
              style={{ fontStyle: "italic", color: "var(--gold-deep)", fontWeight: 400 }}
            >
              free
            </em>{" "}
            quote.
          </h2>
          <p
            style={{
              color: "var(--slate)",
              maxWidth: "46ch",
              margin: "0 0 32px",
              lineHeight: 1.7,
            }}
          >
            Ready to experience the Forteca difference? Tell us about your property and
            we&apos;ll have a custom quote back within 24 hours.
          </p>

          <ul
            style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}
          >
            {[
              "Free, no-obligation estimates",
              "Same-week availability for most services",
              "Fully insured and bonded team",
              "Transparent, flat-rate pricing",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--line)",
                  fontSize: 15,
                }}
              >
                <span
                  style={{ color: "var(--gold-deep)", fontSize: 14, marginTop: 3 }}
                >
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            style={{
              padding: 28,
              background: "var(--paper)",
              border: "1px solid var(--line)",
            }}
          >
            <span className="eyebrow" style={{ marginBottom: 10, display: "block" }}>
              Or call us directly
            </span>
            <a
              href="tel:+15705550123"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 32,
                fontWeight: 500,
                color: "var(--ink)",
                display: "block",
                marginBottom: 4,
              }}
            >
              (570) 555-0123
            </a>
            <div style={{ fontSize: 13, color: "var(--slate-2)" }}>
              info@fortecacleaning.com · Serving the Pocono Region
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  );
}
