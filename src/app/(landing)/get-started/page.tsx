import type { Metadata } from "next";
import { LeadConnectorEmbeds } from "@/components/contact/LeadConnectorEmbeds";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import PixelContact from "@/components/pixel/PixelContact";

// ─── CUSTOMIZE ───────────────────────────────────────────────────────────────
const BRAND_NAME = "Forteca Cleaning";
const HERO_HEADLINE = "Professional Cleaning for Your Vacation Rental";
const HERO_BODY =
  "Trusted turnovers, spotless homes, and five-star reviews — serving the Pocono Mountains.";
const CANONICAL_URL = "https://fortecacleaning.com/get-started";
const GHL_FORM_ID = "tzOVDDrphRwwxVjUJKud";
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: HERO_HEADLINE,
  description: HERO_BODY,
  robots: { index: false, follow: false },
  alternates: { canonical: CANONICAL_URL },
};

export default function GetStartedLandingPage() {
  return (
    <>
      <PixelContact />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="grain"
        style={{ background: "var(--ink)", padding: "56px 16px 64px" }}
      >
        <div className="wrap">
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              aria-hidden
              style={{
                pointerEvents: "none",
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 160,
                  width: 500,
                  borderRadius: "50%",
                  background: "rgba(201,163,91,0.05)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            <p
              className="eyebrow on-dark"
              style={{ position: "relative", marginBottom: 12 }}
            >
              {BRAND_NAME}
            </p>

            <h1
              className="font-serif"
              style={{
                position: "relative",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.06,
                color: "var(--cream)",
                margin: "0 auto",
                maxWidth: "16ch",
              }}
            >
              {HERO_HEADLINE}
            </h1>

            <p
              style={{
                position: "relative",
                margin: "20px auto 0",
                maxWidth: "52ch",
                fontSize: 16,
                lineHeight: 1.65,
                color: "rgba(243,236,223,0.6)",
              }}
            >
              {HERO_BODY}
            </p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── OPT-IN FORM ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "64px 16px 48px" }}>
        <div style={{ margin: "0 auto", maxWidth: 680 }}>
          <div style={{ marginBottom: 28, textAlign: "center" }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>
              Get Started
            </p>
            <h2
              className="h-display h2"
              style={{ color: "var(--ink)", fontSize: "clamp(26px, 3.5vw, 40px)" }}
            >
              Fill out the form below
            </h2>
          </div>

          <div
            style={{
              overflow: "hidden",
              borderRadius: 16,
              background: "white",
              boxShadow: "0 2px 16px rgba(14,22,34,0.07)",
              border: "1px solid rgba(14,22,34,0.06)",
            }}
          >
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
              style={{ width: "100%", height: 1029, border: "none", display: "block" }}
              id={`inline-${GHL_FORM_ID}`}
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Opt-In Form"
              data-height="1029"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              title="Opt-In Form"
            />
          </div>
        </div>
      </section>

      <ServicesSection />

      <LeadConnectorEmbeds />
    </>
  );
}
