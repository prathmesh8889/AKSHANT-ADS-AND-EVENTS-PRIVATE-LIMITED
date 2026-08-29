import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ADDRESS, EMAIL, MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "../lib/data";
import { IClose, IClock, IMenu, IPhone, IPin, IStar, IWhatsApp, LogoMark } from "./Icons";
import { Stars } from "./Bits";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

/* ---------------- navbar ---------------- */

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top info strip */}
      <div
        className={`hidden overflow-hidden border-b border-inkline/60 bg-coal transition-all duration-500 md:block ${
          scrolled ? "max-h-0 border-transparent" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[11px] uppercase tracking-widest text-fog">
          <p className="flex items-center gap-2">
            <IPin className="h-3.5 w-3.5 text-marigold" />
            Pimpalgaon Rd, Nashik
          </p>
          <p className="flex items-center gap-2">
            <IClock className="h-3.5 w-3.5 text-marigold" />
            Mon–Sun · 9 AM – 9 PM
          </p>
          <p className="flex items-center gap-2">
            <IStar className="h-3.5 w-3.5 text-marigold" />
            5.0 · 141 Google reviews
          </p>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-inkline/70 bg-ink/90 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <LogoMark className="h-11 w-11 transition-transform duration-300 group-hover:-rotate-6" />
            <span className="leading-none">
              <span className="block font-display text-xl font-extrabold tracking-tight text-chalk">
                AKSHANT
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-marigold">
                Ads &amp; Events Pvt. Ltd.
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `navline font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "active text-marigold" : "text-chalk/80 hover:text-chalk"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="hidden items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-marigold xl:flex"
            >
              <IPhone className="h-4 w-4 text-marigold" />
              {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="hidden bg-flame px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-chalk transition-all duration-300 hover:-translate-y-0.5 hover:bg-marigold hover:text-ink sm:inline-block"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid h-11 w-11 place-items-center border border-inkline text-chalk transition-colors hover:border-marigold hover:text-marigold lg:hidden"
            >
              {open ? <IClose className="h-5 w-5" /> : <IMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden border-t border-inkline/60 bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
            open ? "max-h-[600px]" : "max-h-0 border-t-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6">
            {LINKS.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-inkline/40 py-4 font-display text-2xl font-bold ${
                    isActive ? "text-marigold" : "text-chalk"
                  }`
                }
              >
                <span>
                  <span className="mr-3 font-mono text-xs text-fog">0{i + 1}</span>
                  {l.label}
                </span>
                <span className="text-marigold">→</span>
              </NavLink>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_TEL} className="flex items-center gap-2 bg-marigold px-5 py-3 font-display text-sm font-bold text-ink">
                <IPhone className="h-4 w-4" /> Call now
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-leaf px-5 py-3 font-display text-sm font-bold text-ink">
                <IWhatsApp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ---------------- page banner ---------------- */

export function PageBanner({
  kicker,
  title,
  intro,
  watermark,
}: {
  kicker: string;
  title: React.ReactNode;
  intro: string;
  watermark: string;
}) {
  return (
    <section className="dotgrid relative overflow-hidden border-b border-inkline/60 pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="beam pointer-events-none absolute -top-10 left-1/4 h-[420px] w-24 rotate-12 opacity-40" />
      <div className="beam pointer-events-none absolute -top-10 right-1/4 h-[420px] w-16 -rotate-12 opacity-25" />
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-0 select-none font-display text-[26vw] font-extrabold leading-none text-chalk/[0.03] md:text-[16rem]"
      >
        {watermark}
      </p>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-marigold">
          <span className="blink h-2 w-2 rounded-full bg-flame" />
          {kicker}
          <span className="text-fog">/ Nashik</span>
        </p>
        <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-chalk sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">{intro}</p>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-inkline/60 bg-coal">
      {/* wordmark marquee */}
      <div className="marquee border-b border-inkline/60 py-5">
        <div className="marquee-track" style={{ ["--mq-dur" as string]: "40s" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1 || undefined}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="flex items-center font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
                  <span className={i % 2 ? "outline-text opacity-40" : "text-chalk/90"}>Akshant</span>
                  <span className="px-6 text-marigold">✷</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <span className="leading-none">
              <span className="block font-display text-2xl font-extrabold text-chalk">AKSHANT</span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-marigold">
                Ads &amp; Events Pvt. Ltd.
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-fog">
            Nashik's one-stop crew for hoardings, branding and full-scale event production —
            printing by day, show-calling by night since 2013.
          </p>
          <div className="mt-5 flex items-center gap-3 border border-inkline/70 px-4 py-3">
            <span className="font-display text-3xl font-extrabold text-marigold">5.0</span>
            <span>
              <Stars className="h-3.5 w-3.5" />
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-fog">
                141 Google reviews
              </span>
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-marigold">Explore</h4>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="group flex items-center gap-2 text-sm text-fog transition-colors hover:text-chalk">
                  <span className="h-px w-4 bg-inkline transition-all duration-300 group-hover:w-6 group-hover:bg-marigold" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-marigold">What we do</h4>
          <ul className="space-y-3 text-sm text-fog">
            {[
              "Hoarding & OOH media",
              "Vehicle & fleet branding",
              "Glow signs & fabrication",
              "Weddings & celebrations",
              "Corporate events & summits",
              "Concerts & DJ nights",
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-marigold">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-marigold">Reach us</h4>
          <ul className="space-y-4 text-sm text-fog">
            <li className="flex gap-3">
              <IPin className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="transition-colors hover:text-chalk">
                {ADDRESS}
              </a>
            </li>
            <li className="flex gap-3">
              <IPhone className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
              <a href={PHONE_TEL} className="transition-colors hover:text-chalk">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <IWhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="transition-colors hover:text-chalk">
                WhatsApp the crew
              </a>
            </li>
            <li className="flex gap-3">
              <IClock className="mt-0.5 h-4 w-4 shrink-0 text-marigold" />
              Mon–Sun · 9:00 AM – 9:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-inkline/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 font-mono text-[11px] uppercase tracking-widest text-fog sm:px-6">
          <p>© 2026 Akshant Ads &amp; Events Pvt. Ltd. · CIN U74999MH2013PTC000000</p>
          <p className="flex items-center gap-2">
            Crafted loud in Nashik <span className="text-flame">✷</span> महाराष्ट्र
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- floating actions ---------------- */

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-13 w-13 place-items-center rounded-full bg-leaf text-ink shadow-[0_8px_30px_rgba(56,199,147,0.4)] transition-transform duration-300 hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-leaf/40 [animation-duration:2.2s]" />
        <IWhatsApp className="relative h-6 w-6" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="Call Akshant"
        className="grid place-items-center rounded-full bg-marigold text-ink shadow-[0_8px_30px_rgba(255,182,39,0.4)] transition-transform duration-300 hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <IPhone className="h-5 w-5" />
      </a>
    </div>
  );
}
