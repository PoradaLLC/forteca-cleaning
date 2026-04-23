import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Forteca Cleaning",
  description:
    "Forteca Cleaning terms of service — policies covering service scope, cancellations, liability, and satisfaction guarantee.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: "var(--slate-2)", marginBottom: 64 }}>
          Last updated: April 23, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <TermsSection title="1. Acceptance of Terms">
            <p>
              By requesting or scheduling cleaning services from Forteca
              Cleaning, you agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use our services.
            </p>
          </TermsSection>

          <TermsSection title="2. Scope of Work">
            <p>
              Services are performed as described in your agreed service plan
              (e.g., standard turnover, deep clean, move-in/out). Forteca
              Cleaning will complete all tasks outlined in that plan on each
              visit.
            </p>
            <ul>
              <li>
                Additional tasks requested on-site or outside the agreed scope
                are subject to availability and may incur extra charges.
              </li>
              <li>
                We reserve the right to decline tasks that present health or
                safety hazards to our crew (e.g., biohazard material, extreme
                hoarding conditions, pest infestations).
              </li>
              <li>
                Access to the property must be provided at the scheduled time.
                Failed access due to lockout or restricted entry may result in
                a trip fee.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="3. Scheduling & Cancellation Policy">
            <ul>
              <li>
                <strong>48+ hours notice:</strong> Cancellations or
                reschedules made at least 48 hours before the appointment are
                free of charge.
              </li>
              <li>
                <strong>24–47 hours notice:</strong> A cancellation fee of 50%
                of the scheduled service cost applies.
              </li>
              <li>
                <strong>Less than 24 hours / same-day:</strong> The full
                service fee is charged.
              </li>
              <li>
                Forteca Cleaning reserves the right to reschedule appointments
                due to weather, crew illness, or other unforeseen
                circumstances. We will provide as much advance notice as
                possible and reschedule at no additional cost.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="4. Pricing & Payment">
            <ul>
              <li>
                All prices are quoted in US dollars and are subject to change.
                Confirmed quotes are honored for the agreed service date.
              </li>
              <li>
                Payment is due upon completion of each service unless a
                recurring billing arrangement has been established.
              </li>
              <li>
                Invoices unpaid after 14 days may be subject to a late fee of
                1.5% per month on the outstanding balance.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="5. Satisfaction Guarantee">
            <p>
              We stand behind our work. If you are not satisfied with any
              aspect of your cleaning, contact us within 24 hours of service
              completion and we will return to address the issue at no
              additional charge.
            </p>
            <ul>
              <li>
                Re-cleans must be requested within 24 hours of the original
                service and are subject to crew availability.
              </li>
              <li>
                The guarantee covers tasks included in the agreed service plan.
                It does not apply to conditions caused by third parties or
                circumstances beyond our control after the clean is completed.
              </li>
              <li>
                Forteca Cleaning&apos;s satisfaction guarantee is not a refund
                policy; it is a commitment to return and correct the work.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="6. Liability for Property Damage">
            <p>
              Forteca Cleaning takes great care with your property. In the
              unlikely event that our crew causes damage:
            </p>
            <ul>
              <li>
                Damage must be reported within 24 hours of service completion.
                Claims reported after this window may not be honored.
              </li>
              <li>
                We carry general liability insurance. Verified damage caused
                directly by our crew will be remedied through our insurance
                carrier or direct reimbursement, at our discretion.
              </li>
              <li>
                We are not liable for damage to items that are inherently
                fragile, improperly secured, or not disclosed to us before
                cleaning (e.g., loose fixtures, antiques, unsecured
                electronics).
              </li>
              <li>
                Our maximum liability for any single incident is limited to the
                cost of the cleaning service provided on that visit.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="7. Client Responsibilities">
            <ul>
              <li>
                Provide safe and unobstructed access to all areas included in
                the service plan.
              </li>
              <li>
                Secure or remove irreplaceable items, cash, jewelry, or
                valuables before each appointment.
              </li>
              <li>
                Ensure pets are secured or removed from areas being cleaned.
              </li>
              <li>
                Notify us in advance of any known hazards, allergies, or
                sensitivities relevant to cleaning products.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="8. Intellectual Property">
            <p>
              All content on this website — including text, images, logos, and
              design — is the property of Forteca Cleaning and is protected by
              copyright law. You may not reproduce, distribute, or use any
              content without our written permission.
            </p>
          </TermsSection>

          <TermsSection title="9. Changes to Terms">
            <p>
              We may update these terms from time to time. Continued use of
              our services after changes constitutes acceptance of the updated
              terms. Material changes will be communicated via email to clients
              with active service agreements.
            </p>
          </TermsSection>

          <TermsSection title="10. Contact">
            <p>
              Questions about these terms? Reach us at{" "}
              <a
                href="mailto:fortecaestate@gmail.com"
                style={{ color: "var(--gold-deep)", fontWeight: 600 }}
              >
                fortecaestate@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+13475560089"
                style={{ color: "var(--gold-deep)", fontWeight: 600 }}
              >
                (347) 556-0089
              </a>
              .
            </p>
          </TermsSection>
        </div>
      </div>
    </main>
  );
}

function TermsSection({
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
