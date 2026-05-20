export function MinimalFooter() {
  const muted = "rgba(243,236,223,0.45)";
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid var(--line-on-dark)",
        padding: "24px 0",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0 8px",
          fontSize: 12,
          letterSpacing: "0.02em",
          color: muted,
        }}
      >
        <span>© 2026 Forteca Estate. All rights reserved.</span>
        <span aria-hidden>·</span>
        <a
          href="https://www.fortecaestate.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: muted, textDecoration: "none" }}
        >
          Privacy Policy
        </a>
        <span aria-hidden>·</span>
        <a
          href="https://www.fortecaestate.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: muted, textDecoration: "none" }}
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
