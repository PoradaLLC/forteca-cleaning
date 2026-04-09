import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary px-4 py-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/images/logo-nobg.png"
              alt="Forteca Cleaning"
              width={40}
              height={40}
              className="h-10 w-10 object-contain brightness-0 invert"
            />
            <span className="font-serif text-lg font-bold text-white">
              Forteca Cleaning
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Professional property cleaning services you can trust. Residential
            and commercial properties kept spotless.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Residential Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Move-In / Move-Out</li>
            <li>Post-Construction</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-brand-accent" />
              <span>(570) 555-0123</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-brand-accent" />
              <span>info@fortecacleaning.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-brand-accent" />
              <span>Serving the Pocono Region</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Hours
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 7AM - 6PM</li>
            <li>Saturday: 8AM - 4PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Forteca Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
