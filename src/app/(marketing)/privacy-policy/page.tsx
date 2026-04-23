import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Forteca Cleaning",
  description:
    "Forteca Cleaning privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        background: "var(--paper)",
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          Legal
        </div>
        <h1
          className="h-display h2"
          style={{ color: "var(--ink)", marginBottom: 12 }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: "var(--slate-2)", marginBottom: 64 }}>
          Last updated: April 23, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <PolicySection title="1. Information We Collect">
            <p>
              When you request a quote, schedule a cleaning, contact us, or
              browse our website, we may collect the following information:
            </p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Property address and access instructions</li>
              <li>Service preferences and special requests</li>
              <li>Communications you send us via contact forms or email</li>
              <li>Device and usage data (cookies, IP address, browser type)</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <ul>
              <li>Schedule and manage your cleaning appointments</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our website and services</li>
              <li>
                Send marketing communications (only with your consent)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Cookies">
            <p>
              We use essential cookies to maintain your session and
              preferences. We may also use analytics cookies (such as Vercel
              Analytics) to understand how visitors use our site. You can
              disable cookies in your browser settings, though some features
              may not function correctly.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <p>
              We share data with the following third-party services as
              necessary to operate our business:
            </p>
            <ul>
              <li>
                <strong>Resend</strong> — transactional email delivery
              </li>
              <li>
                <strong>Vercel</strong> — website hosting and analytics
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy and comply with
              applicable legal obligations. Service records are retained for a
              minimum of 7 years for tax and legal compliance.
            </p>
          </PolicySection>

          <PolicySection title="6. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>
                Request deletion of your data (subject to legal retention
                requirements)
              </li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Contact Us">
            <p>
              If you have questions about this privacy policy or your personal
              data, contact us at{" "}
              <a
                href="mailto:fortecaestate@gmail.com"
                style={{ color: "var(--gold-deep)", fontWeight: 600 }}
              >
                fortecaestate@gmail.com
              </a>
              .
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className="h-display h3"
        style={{ color: "var(--ink)", marginBottom: 20 }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.75,
          color: "var(--slate)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {children}
      </div>
      <style>{`
        ul { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; }
        li { line-height: 1.7; }
      `}</style>
    </div>
  );
}
