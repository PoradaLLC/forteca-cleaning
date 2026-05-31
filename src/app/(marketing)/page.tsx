import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const HERO_VIDEO = "/videos/hero-bedroom.mp4";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";

const services = [
  {
    num: "01 — Featured",
    title: "Vacation Rental Turnover",
    body: "Fast, reliable turnovers between guests. Photo-checked, linen-swapped, inventory-logged — your five-star reviews, protected.",
    meta: "Same-day · Linens · Restock",
    featured: true,
    img: "/images/clean-bedroom-vacation-rental-rolled-towel.jpg",
    imgAlt: "Hotel-style vacation rental bedroom with rolled towel and bear accent pillow after Forteca turnover",
  },
  {
    num: "02",
    title: "Residential Cleaning",
    body: "Regular home cleaning tailored to your schedule. Weekly, bi-weekly, or monthly rhythms that keep your home effortlessly fresh.",
    meta: "Weekly · Bi-weekly · Monthly",
    img: "/images/clean-kitchen-cream-cabinets-granite-island.jpg",
    imgAlt: "Clean kitchen with cream cabinets and granite island after residential cleaning",
  },
  {
    num: "03",
    title: "Commercial Cleaning",
    body: "Office and business cleaning that creates the professional environment your team and clients deserve. After-hours available.",
    meta: "Offices · Retail · Medical",
    img: "/images/living-room-brick-fireplace-sectional.jpg",
    imgAlt: "Clean living room with brick fireplace",
  },
  {
    num: "04",
    title: "Deep Cleaning",
    body: "Thorough, top-to-bottom cleaning that reaches every corner, baseboard, and appliance. Perfect for seasonal refreshes.",
    meta: "Seasonal · Detail · Whole-home",
    img: "/images/clean-kitchen-wood-cabinets-overview.jpg",
    imgAlt: "Deep-cleaned kitchen with wood cabinets and marble counters",
  },
  {
    num: "05",
    title: "Move-In / Move-Out",
    body: "Start fresh in a new space, or leave the old one spotless for the next owner. We handle the heavy lifting — you focus on the move.",
    meta: "Listing-ready · Full prep",
    img: "/images/clean-bathroom-soaking-tub-wood-ceiling.jpg",
    imgAlt: "Luxury bathroom with soaking tub and wood-beam ceiling ready for move-in",
  },
  {
    num: "06",
    title: "Post-Construction",
    body: "Dust, debris, and fine residue removed after renovations. We make your newly built or remodeled space genuinely move-in ready.",
    meta: "Dust · Debris · Detail",
    img: "/images/clean-kitchen-white-cabinets-sink.jpg",
    imgAlt: "Spotless kitchen after post-construction cleaning",
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
    img: "/images/clean-living-room-stone-fireplace-wide.jpg",
    imgAlt: "Clean vacation rental living room ready for next guests",
  },
  {
    n: "Step 02",
    h: "Schedule",
    p: "Book one-off, recurring, or same-day turnovers. Our calendar syncs with Airbnb, Vrbo, and direct-booking platforms.",
    img: "/images/clean-kitchen-white-island-overview.jpg",
    imgAlt: "Modern kitchen cleaned and ready for Airbnb guest arrival",
  },
  {
    n: "Step 03",
    h: "Clean & Document",
    p: "Our team executes the checklist and photographs every room on the way out — so you always know exactly what the guest will see.",
    img: "/images/clean-bathroom-green-vanity-shower-close.jpg",
    imgAlt: "Spotless bathroom documented after Forteca cleaning",
  },
  {
    n: "Step 04",
    h: "Report",
    p: "You receive a completion report with photos, restock notes, and any issues flagged — usually before you'd even think to ask.",
    img: "/images/made-bedroom-white-bed-spiral-rug.jpg",
    imgAlt: "Hotel-quality bedroom finish with rolled towels — ready for the post-clean report",
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

const beforeAfterPairs = [
  {
    label: "Bedroom Turnover",
    before: {
      src: "/images/messy-bedroom-black-blanket-red-pillows.jpg",
      alt: "Unmade bed with scattered pillows before Forteca cleaning",
    },
    after: {
      src: "/images/clean-bedroom-black-blanket-red-pillows.jpg",
      alt: "Neatly made bed with folded accent pillow after Forteca cleaning",
    },
  },
  {
    label: "Guest Room Reset",
    before: {
      src: "/images/messy-bedroom-modern-neutral-bed.jpg",
      alt: "Disheveled modern bedroom before cleaning",
    },
    after: {
      src: "/images/clean-bedroom-modern-neutral-bed.jpg",
      alt: "Pristine modern bedroom after cleaning",
    },
  },
  {
    label: "Bathroom Turnover",
    before: {
      src: "/images/messy-bathroom-green-vanity-shower-wide.jpg",
      alt: "Cluttered bathroom with green vanity before cleaning",
    },
    after: {
      src: "/images/clean-bathroom-green-vanity-mirror.jpg",
      alt: "Spotless bathroom with green vanity after cleaning",
    },
  },
  {
    label: "Kitchen Deep Clean",
    before: {
      src: "/images/dirty-kitchen-island-clutter.jpg",
      alt: "Cluttered kitchen island with dirty dishes before deep cleaning",
    },
    after: {
      src: "/images/clean-kitchen-white-island-overview.jpg",
      alt: "Immaculate white kitchen island after deep cleaning",
    },
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

const stripImages = [
  {
    src: "/images/made-bedroom-white-bed-spiral-rug.jpg",
    alt: "Beautifully made white bed with spiral rug",
  },
  {
    src: "/images/clean-bathroom-green-vanity-mirror.jpg",
    alt: "Clean bathroom with green vanity and mirror",
  },
  {
    src: "/images/clean-kitchen-white-island-overview.jpg",
    alt: "Spotless white kitchen island overview",
  },
  {
    src: "/images/clean-living-room-stone-fireplace-wide.jpg",
    alt: "Clean living room with stone fireplace",
  },
  {
    src: "/images/clean-bedroom-modern-neutral-bed.jpg",
    alt: "Modern neutral bedroom after cleaning",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Badges />
      <Services />
      <Marquee />
      <About />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <PhotoStrip />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="grain relative min-h-[92vh] flex items-end pb-20 overflow-hidden">
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55] saturate-90"
        src={HERO_VIDEO}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,22,34,0.7) 0%, rgba(14,22,34,0.2) 40%, rgba(14,22,34,0.9) 100%)",
        }}
      />
      <div className="wrap relative">
        <div className="eyebrow on-dark mb-6">Professional Property Cleaning</div>
        <h1 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(54px,7vw,104px)] text-cream max-w-[14ch] mb-7">
          Your property,
          <br />
          <em className="italic text-gold font-normal">perfectly</em> clean.
        </h1>
        <p className="text-[17px] leading-relaxed text-cream/85 mb-9 max-w-[52ch]">
          Turnover, deep, and recurring cleaning across the Pocono region — built by Forteca
          Estate, trusted by hosts.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a href="tel:+13475560089" className="btn-gold">
            Call (347) 556-0089 →
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
    <div className="bg-paper-2 border-y border-ink/[0.12] py-7">
      <div className="wrap flex justify-between items-center gap-10 flex-wrap">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-[13px] font-medium tracking-[0.04em] text-ink"
          >
            <span className="text-gold text-sm">✦</span>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-end mb-[72px]">
      <div>
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)]">
          {title}
        </h2>
      </div>
      <p className="text-[17px] leading-relaxed text-slate">{lead}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section scroll-mt-20">
      <div className="wrap">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              A full range of{" "}
              <em className="italic text-gold-deep font-normal">pristine</em>{" "}
              cleaning services.
            </>
          }
          lead="From fast vacation-rental turnovers to deep seasonal resets — we keep homes, offices, and investment properties in immaculate condition across the Pocono region."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group rounded-2xl shadow-sm ring-1 flex flex-col overflow-hidden transition-colors ${
                s.featured
                  ? "grain bg-ink text-cream ring-white/[0.08] hover:bg-ink-2"
                  : "bg-paper ring-ink/[0.08] hover:bg-[#FBF8F1]"
              }`}
            >
              {/* Card image */}
              <div
                className={`relative w-full shrink-0 ${
                  s.featured ? "aspect-[4/3]" : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="p-10 flex flex-col flex-1">
                <div
                  className={`font-serif text-[14px] font-medium tracking-[0.02em] mb-7 ${
                    s.featured ? "text-gold" : "text-gold-deep"
                  }`}
                >
                  {s.num}
                </div>
                <h3
                  className={`font-serif font-semibold tracking-[-0.01em] text-[clamp(24px,2vw,30px)] leading-[1.1] mb-3.5 ${
                    s.featured ? "text-cream" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-[14.5px] leading-[1.65] mb-6 ${
                    s.featured ? "text-cream/75" : "text-slate"
                  }`}
                >
                  {s.body}
                </p>
                <div
                  className={`mt-auto pt-6 border-t flex justify-between items-center text-[12px] tracking-[0.08em] uppercase ${
                    s.featured
                      ? "border-cream/[0.14] text-cream/60"
                      : "border-ink/[0.12] text-slate-2"
                  }`}
                >
                  <span>{s.meta}</span>
                  <span
                    className={`text-base transition-transform group-hover:translate-x-1 ${
                      s.featured ? "text-gold" : "text-gold-deep"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const block = (
    <span className="inline-flex items-center gap-12">
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-12">
          <span className="text-gold">✦</span>
          {item}
        </span>
      ))}
    </span>
  );
  return (
    <div className="grain bg-ink text-gold py-6 overflow-hidden border-y border-cream/[0.14]">
      <div
        className="flex gap-12 whitespace-nowrap font-serif text-[22px] tracking-[0.01em]"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {block}
        <span aria-hidden>{block}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section bg-cream scroll-mt-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="eyebrow mb-[22px]">Why Forteca</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mb-7">
            A cleaning service built by{" "}
            <em className="italic text-gold-deep font-normal">hosts</em>, for hosts.
          </h2>
          <p className="text-base leading-[1.75] text-slate mb-[18px] max-w-[54ch]">
            At Forteca Cleaning, we understand that your property is your most valuable asset.
            Born out of Forteca Estate&apos;s own rental portfolio, we treat every home and
            business with the same exacting care we give our own.
          </p>
          <p className="text-base leading-[1.75] text-slate max-w-[54ch]">
            Our team is fully trained, insured, and committed to delivering a consistent,
            photo-documented clean every single time. Professional-grade products, proven
            techniques, and a standard high enough to protect your five-star reviews.
          </p>

          <div className="grid grid-cols-2 gap-9 pt-10 mt-9 border-t border-ink/[0.12]">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-[56px] font-medium leading-none text-ink tracking-[-0.015em]">
                  {s.n}
                  <em className="italic text-gold font-normal">{s.em}</em>
                </div>
                <div className="mt-2.5 text-[12px] tracking-[0.16em] uppercase text-slate-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-paper ring-1 ring-ink/[0.08]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${ABOUT_IMG}')` }}
          />
          <div className="absolute -right-7 -bottom-7 size-[170px] rounded-full bg-gold text-ink grid place-items-center text-center font-serif text-[13px] font-medium tracking-[0.12em] uppercase leading-[1.4] shadow-[0_20px_40px_rgba(14,22,34,0.2)] max-lg:-right-4 max-lg:-bottom-4 max-lg:size-[130px] max-lg:text-[11px]">
            Est.
            <em className="block italic normal-case text-[32px] tracking-normal font-medium my-1 max-lg:text-[24px]">
              2020
            </em>
            Pocono PA
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section bg-paper border-y border-ink/[0.12]">
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              Four quiet steps.
              <br />
              One{" "}
              <em className="italic text-gold-deep font-normal">spotless</em>{" "}
              property.
            </>
          }
          lead="We've refined our process over hundreds of turnovers. Every clean is predictable, documented, and ready for the next guest or the next day."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.h}>
              <div className="relative w-full h-[160px] rounded-xl overflow-hidden mb-5">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="font-serif text-[14px] text-gold-deep tracking-[0.02em] border-t border-gold pt-3.5 mb-7">
                {s.n}
              </div>
              <h4 className="font-serif text-[26px] font-medium mb-3 tracking-[-0.01em] leading-[1.1]">
                {s.h}
              </h4>
              <p className="text-[14.5px] text-slate leading-[1.65]">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="section bg-cream border-t border-ink/[0.12]">
      <div className="wrap">
        <div className="text-center mb-14">
          <div className="eyebrow mb-[18px]">The Forteca Difference</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mb-4">
            Every property,{" "}
            <em className="italic text-gold-deep font-normal">transformed.</em>
          </h2>
          <p className="text-[17px] leading-relaxed text-slate mx-auto">Drag to reveal.</p>
        </div>

        <div className="max-w-[720px] mx-auto">
          <BeforeAfterSlider
            beforeSrc="/images/messy-bedroom-black-blanket-red-pillows.jpg"
            afterSrc="/images/clean-bedroom-black-blanket-red-pillows.jpg"
            beforeAlt="Bedroom before cleaning — unmade bed with black blanket and red pillows"
            afterAlt="Bedroom after cleaning — freshly made bed with black blanket and red pillows"
            caption="Bedroom Turnover — same room, same property"
            quality={90}
            beforeObjectPosition="center 35%"
            afterObjectPosition="center 35%"
          />

          <p className="mt-6 text-center text-[14px] text-slate">
            Every clean is photo-documented. Ask us about our post-clean reports.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-paper text-center scroll-mt-20">
      <div className="wrap">
        <div className="mb-[72px]">
          <div className="eyebrow inline-block mb-[18px]">Client Stories</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mt-3.5">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t) => (
            <div
              key={t.who}
              className="bg-cream rounded-2xl shadow-sm ring-1 ring-ink/[0.08] p-10 flex flex-col min-h-[320px]"
            >
              <div className="text-gold text-[14px] tracking-[2px] mb-6">★★★★★</div>
              <p className="font-serif italic text-[19px] leading-[1.55] text-ink mb-7 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-ink/[0.12]">
                <div className="font-semibold text-[14px] text-ink">{t.who}</div>
                <div className="text-[12px] text-slate-2 mt-0.5 tracking-[0.02em]">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section grain bg-ink text-cream text-center">
      <div className="wrap">
        <div className="eyebrow on-dark inline-block mb-6">Book Direct · Local Team</div>
        <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] text-cream max-w-[18ch] mx-auto mb-7">
          Your next spotless property is{" "}
          <em className="italic text-gold font-normal">one call</em> away.
        </h2>
        <p className="text-cream/75 mx-auto mb-10 max-w-[52ch] text-[17px] leading-relaxed">
          Skip the platforms and chatbots. Call us directly — a local team member will walk you
          through your needs and have a quote in your hands, usually within the hour.
        </p>
        <a
          href="tel:+13475560089"
          className="font-serif text-[64px] font-medium text-gold tracking-[-0.01em] mb-3.5 inline-block leading-none"
        >
          (347) 556-0089
        </a>
        <div className="text-[11px] tracking-[0.22em] uppercase text-cream/55 mt-2">
          Mon – Fri · 7am – 6pm &nbsp;·&nbsp; Sat · 8am – 4pm
        </div>
        <div className="flex items-center gap-[18px] justify-center mx-auto mt-12 mb-9 text-cream/40 text-[11px] tracking-[0.22em] uppercase max-w-[280px]">
          <span className="flex-1 h-px bg-cream/[0.14]" />
          Or
          <span className="flex-1 h-px bg-cream/[0.14]" />
        </div>
        <a href="#contact" className="btn-ghost">
          Request a quote online →
        </a>
      </div>
    </section>
  );
}

function PhotoStrip() {
  return (
    <div
      className="flex gap-0.5 overflow-x-auto"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {stripImages.map((img) => (
        <div
          key={img.src}
          className="relative shrink-0 flex-1 h-[280px] min-w-[65vw] md:min-w-0"
          style={{ scrollSnapAlign: "start" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 65vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-cream scroll-mt-20">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow mb-[22px]">Get in touch</div>
          <h2 className="font-serif font-medium tracking-[-0.015em] leading-[1.04] text-[clamp(38px,4.6vw,64px)] mb-7">
            Request a{" "}
            <em className="italic text-gold-deep font-normal">free</em> quote.
          </h2>
          <p className="text-slate max-w-[46ch] mb-8 leading-[1.7]">
            Ready to experience the Forteca difference? Tell us about your property and
            we&apos;ll have a custom quote back within 24 hours.
          </p>

          <ul className="list-none p-0 mb-10">
            {[
              "Free, no-obligation estimates",
              "Same-week availability for most services",
              "Fully insured and bonded team",
              "Transparent, flat-rate pricing",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 py-3.5 border-b border-ink/[0.12] text-[15px]"
              >
                <span className="text-gold-deep text-[14px] mt-0.5 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="p-7 bg-paper ring-1 ring-ink/[0.08]">
            <span className="eyebrow mb-2.5 block">Or call us directly</span>
            <a
              href="tel:+13475560089"
              className="font-serif text-[32px] font-medium text-ink block mb-1 leading-none"
            >
              (347) 556-0089
            </a>
            <div className="text-[13px] text-slate-2">
              fortecaestate@gmail.com · Serving the Pocono Region
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
