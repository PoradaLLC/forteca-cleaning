import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ContactForm";
import {
  Sparkles,
  Home,
  Building2,
  Paintbrush,
  Truck,
  HardHat,
  CalendarCheck,
  Shield,
  Clock,
  ThumbsUp,
  Star,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Regular home cleaning tailored to your schedule. We keep your living spaces fresh, healthy, and inviting.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Office and business cleaning that creates a professional environment for your team and clients.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Thorough top-to-bottom cleaning that reaches every corner. Perfect for seasonal refreshes.",
  },
  {
    icon: Truck,
    title: "Move-In / Move-Out",
    description:
      "Start fresh in your new space or leave the old one spotless. We handle the heavy cleaning so you don't have to.",
  },
  {
    icon: HardHat,
    title: "Post-Construction",
    description:
      "Dust, debris, and residue removed after renovations. We make your newly built or remodeled space shine.",
  },
  {
    icon: CalendarCheck,
    title: "Vacation Rental Turnover",
    description:
      "Fast, reliable turnovers between guests. Keep your rental reviews glowing with spotless properties.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Forteca Cleaning transformed our vacation rental business. Every turnover is spotless and our guests consistently mention how clean the property is in their reviews.",
    rating: 5,
  },
  {
    name: "James R.",
    text: "We've been using Forteca for our office cleaning for over a year. They are reliable, thorough, and always go above and beyond. Highly recommend!",
    rating: 5,
  },
  {
    name: "Linda K.",
    text: "The deep cleaning they did on our home was incredible. Areas I didn't even think about were sparkling clean. Professional team and great attention to detail.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center bg-brand-primary px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary-light to-brand-primary opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl py-20 lg:py-32">
          <div className="max-w-2xl">
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Professional Property Cleaning
            </p>
            <h1 className="animate-fade-up delay-100 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Property,{" "}
              <span className="text-brand-accent">Perfectly Clean</span>
            </h1>
            <p className="animate-fade-up delay-200 mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Professional cleaning services for residential and commercial
              properties in the Pocono region. Trusted by homeowners, businesses,
              and vacation rental managers.
            </p>
            <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-accent-light"
              >
                Get a Free Quote
                <ChevronRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-100 bg-white px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 text-center sm:gap-16">
          {[
            { icon: Shield, label: "Insured & Bonded" },
            { icon: Clock, label: "Flexible Scheduling" },
            { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
            { icon: Star, label: "5-Star Rated" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={20} className="text-brand-accent" />
              <span className="text-sm font-medium text-brand-primary/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 bg-brand-bg-alt px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              What We Do
            </p>
            <h2 className="font-serif text-3xl font-bold text-brand-primary sm:text-4xl">
              Our Cleaning Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-text">
              From routine cleanings to specialized deep cleans, we offer a full
              range of services to keep your property in pristine condition.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-brand-primary/5 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-accent/10 p-3">
                  <Icon size={24} className="text-brand-accent" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-text">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="scroll-mt-20 bg-white px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl font-bold text-brand-primary sm:text-4xl">
                A Cleaning Service You Can Trust
              </h2>
              <p className="mt-6 leading-relaxed text-brand-text">
                At Forteca Cleaning, we understand that your property is your
                most valuable asset. That&apos;s why we treat every home and
                business with the same care and attention to detail as if it were
                our own.
              </p>
              <p className="mt-4 leading-relaxed text-brand-text">
                Our team is fully trained, insured, and committed to delivering
                exceptional results every single time. We use professional-grade
                products and proven techniques to ensure a thorough, safe clean.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Properties Cleaned" },
                  { value: "100%", label: "Satisfaction Rate" },
                  { value: "5+", label: "Years Experience" },
                  { value: "24hr", label: "Response Time" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-serif text-3xl font-bold text-brand-accent">
                      {value}
                    </div>
                    <div className="mt-1 text-sm text-brand-text">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-bg-alt">
                <Image
                  src="/images/logo.png"
                  alt="Forteca Cleaning"
                  width={600}
                  height={450}
                  className="h-full w-full object-contain p-12"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-accent p-6 text-white shadow-lg">
                <Paintbrush size={32} className="mb-2" />
                <div className="text-sm font-bold">Eco-Friendly</div>
                <div className="text-xs text-white/80">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="scroll-mt-20 bg-brand-primary px-4 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, text, rating }) => (
              <div
                key={name}
                className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-accent text-brand-accent"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-6 text-sm font-semibold text-white">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-brand-bg-alt px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl font-bold text-brand-primary sm:text-4xl">
                Request a Free Quote
              </h2>
              <p className="mt-6 leading-relaxed text-brand-text">
                Ready to experience the Forteca difference? Fill out the form and
                we&apos;ll get back to you within 24 hours with a customized
                quote for your property.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-accent/10 p-2">
                    <Sparkles size={18} className="text-brand-accent" />
                  </div>
                  <span className="text-sm text-brand-text">
                    Free, no-obligation estimates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-accent/10 p-2">
                    <Clock size={18} className="text-brand-accent" />
                  </div>
                  <span className="text-sm text-brand-text">
                    Same-week availability for most services
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-accent/10 p-2">
                    <Shield size={18} className="text-brand-accent" />
                  </div>
                  <span className="text-sm text-brand-text">
                    Fully insured and bonded team
                  </span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
