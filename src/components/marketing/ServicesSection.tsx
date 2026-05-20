"use client";
import { AnimateIn } from "@/components/AnimateIn";

const services = [
  {
    num: "01 — Featured",
    title: "Vacation Rental Turnover",
    body: "Fast, reliable turnovers between guests. Photo-checked, linen-swapped, inventory-logged — your five-star reviews, protected.",
    featured: true,
  },
  {
    num: "02",
    title: "Cleaning Services",
    body: "From routine residential upkeep and commercial office cleaning to deep, top-to-bottom seasonal refreshes — one team handles it all.",
  },
  {
    num: "03",
    title: "Move-In / Move-Out",
    body: "Start fresh in a new space, or leave the old one spotless for the next owner. We handle the heavy lifting — you focus on the move.",
  },
  {
    num: "04",
    title: "Post-Construction",
    body: "Dust, debris, and fine residue removed after renovations. We make your newly built or remodeled space genuinely move-in ready.",
  },
];

export function ServicesSection() {
  return (
    <section style={{ padding: "56px 0", background: "var(--cream)" }}>
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 48,
            marginBottom: 64,
            flexWrap: "wrap",
          }}
        >
          <div>
            <AnimateIn>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                What we offer
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h2 className="h-display h2">
                A full-service cleaning company,{" "}
                <em style={{ color: "var(--gold-deep)", fontStyle: "italic" }}>
                  built for owners
                </em>
                .
              </h2>
            </AnimateIn>
          </div>
          <p className="lead" style={{ maxWidth: "44ch" }}>
            Professional cleaning across the Pocono Mountains with one accountable team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {services.map((s, i) => (
            <AnimateIn key={s.num} animation="fade-up" delay={Math.min((i + 1) * 80, 480)}>
              <article
                style={{
                  padding: "36px 32px",
                  background: s.featured ? "var(--ink)" : "white",
                  color: s.featured ? "rgba(243,236,223,0.85)" : "inherit",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: s.featured ? "var(--gold)" : "var(--gold-deep)",
                    fontWeight: 500,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  className="h-display h3"
                  style={{ color: s.featured ? "var(--cream)" : "var(--ink)" }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, flex: 1 }}>{s.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
