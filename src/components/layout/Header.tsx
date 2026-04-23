"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(14,22,34,0.92)",
        backdropFilter: "blur(10px)",
        color: "var(--cream)",
        borderBottom: "1px solid var(--line-on-dark)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a href="#" className="brand">
          <Image
            src="/images/logo.png"
            alt="Forteca Cleaning"
            width={52}
            height={52}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <span>
            <b>Forteca</b>Cleaning
          </span>
        </a>

        <nav
          className="nav-desktop"
          style={{ display: "flex", gap: 36 }}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13.5,
                color: "rgba(243,236,223,0.86)",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+13475560089"
          className="btn-gold nav-cta"
          style={{ marginLeft: 16 }}
        >
          Call (347) 556-0089
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-toggle"
          aria-label="Toggle menu"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--cream)",
            display: "none",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="nav-mobile"
          style={{
            borderTop: "1px solid var(--line-on-dark)",
            padding: "16px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "12px 4px",
                fontSize: 14,
                color: "rgba(243,236,223,0.86)",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav-desktop a:hover { color: var(--gold); }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
