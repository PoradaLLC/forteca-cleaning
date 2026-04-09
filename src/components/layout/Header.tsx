"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-nobg.png"
            alt="Forteca Cleaning"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="font-serif text-xl font-bold text-brand-primary">
            Forteca Cleaning
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-brand-primary/70 transition-colors hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-accent-light"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-primary/70 transition-colors hover:bg-brand-bg-alt hover:text-brand-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-brand-accent px-6 py-2.5 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-accent-light"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
