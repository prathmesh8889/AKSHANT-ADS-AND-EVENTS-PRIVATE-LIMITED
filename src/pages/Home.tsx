import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AD_SERVICES,
  CLIENTS,
  EVENT_PACKAGES,
  EVENT_SERVICES,
  IMG,
  PHONE_DISPLAY,
  PHONE_TEL,
  STATS,
  TESTIMONIALS,
  TICKER,
  WORK,
} from "../lib/data";
import { usePrefersReducedMotion } from "../lib/hooks";
import { BtnLink, Count, Marquee, Reveal, Scramble, SectionHead, Stars } from "../components/Bits";
import { IArrowRight, IArrowUpRight, IPin, IQuote, IStar } from "../components/Icons";

/* ---------- rotating circular badge ---------- */
function SpinBadge() {
  return (
    <div className="spin-slow absolute -bottom-10 -left-10 z-20 hidden h-36 w-36 sm:block md:h-44 md:w-44">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="49" fill="#ffb627" />
        <defs>
          <path id="akx-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text fill="#171221" fontSize="9.2" fontFamily="Space Mono, monospace" fontWeight="700" letterSpacing="1.5">
          <textPath href="#akx-circle">ADS ✷ EVENTS ✷ BRANDING ✷ NASHIK ✷</textPath>
        </text>
        <path d="M50 34 38 66h6.4l2-5.4h7.2l2 5.4H62L50 34zm0 8.4 2.7 6h-5.4z" fill="#171221" />
        <circle cx="68" cy="32" r="3.4" fill="#ff5139" />
      </svg>
    </div>
  );
}

/* ---------- work card ---------- */
function WorkCard({
  item,
  className = "",
  delay = 0,
}: {
  item: (typeof WORK)[number];
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <Link to="/work" className="group relative block h-full overflow-hidden border border-inkline/70 bg-coal">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5 transition-opacity duration-500 group-hover:via-ink/60" />
        <span className="absolute left-4 top-4 bg-marigold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
          {item.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-marigold">
            {item.client} · {item.year}
          </p>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight text-chalk md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-fog">
            <IPin className="h-3.5 w-3.5" /> {item.location}
          </p>
          <span className="mt-3 inline-flex translate-y-2 items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-marigold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View case <IArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- testimonials ---------- */
function TestimonialBand() {
  const [idx, setIdx] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => window.clearInterval(id);
  }, [reduced]);
  const t = TESTIMONIALS[idx];

  return (
    <section className="relative overflow-hidden bg-marigold text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-24 select-none font-display text-[22rem] font-extrabold leading-none text-ink/[0.05]"
      >
        5.0
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-display text-[6rem] font-extrabold leading-none md:text-[7.5rem]">
              5.0<span className="text-ink/40">/5</span>
            </p>
            <Stars className="h-6 w-6" />
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-ink/70">
              141 Google reviews · zero complaints
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/75">
              Every rating below was written after the stage came down — not before the advance
              cleared.
            </p>
          </Reveal>
        </div>
        <div className="relative lg:col-span-8">
          <IQuote className="h-12 w-12 text-ink/25" />
          <div key={idx} className="quote-swap mt-4">
            <blockquote className="font-display text-2xl font-semibold leading-snug md:text-[2rem]">
              “{t.quote}”
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="grid h-12 w-12 place-items-center bg-ink font-display text-lg font-extrabold text-marigold">
                {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <div>
                <p className="font-display text-base font-bold">{t.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70">{t.role}</p>
              </div>
              <span className="ml-auto border border-ink/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                {t.tag}
              </span>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 transition-all duration-300 ${
                  i === idx ? "w-10 bg-ink" : "w-2 bg-ink/30 hover:bg-ink/60"
                }`}
              />
            ))}
            <button
              onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
              className="ml-auto grid h-11 w-11 place-items-center border border-ink/40 transition-colors hover:bg-ink hover:text-marigold"
              aria-label="Next testimonial"
            >
              <IArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HOME ================= */

export default function Home() {
  return (
    <div>
      {/* ---------- poster opener ---------- */}
      <section className="dotgrid relative min-h-screen overflow-hidden border-b border-inkline/60">
        <div className="beam pointer-events-none absolute -top-16 left-[12%] h-[560px] w-28 rotate-[14deg] opacity-50" />
        <div className="beam pointer-events-none absolute -top-16 right-[8%] h-[480px] w-20 -rotate-[10deg] opacity-30" />
        <p
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-none text-chalk/[0.03]"
        >
          AKSHANT
        </p>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-40 sm:px-6 md:pt-48 lg:grid-cols-12 lg:gap-10 lg:pb-28">
          {/* left */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em]">
                <span className="flex items-center gap-2 border border-inkline bg-coal/70 px-3 py-2 text-marigold">
                  <IPin className="h-3.5 w-3.5" /> Pimpalgaon Rd, Nashik
                </span>
                <span className="border border-inkline bg-coal/70 px-3 py-2 text-fog">Est. 2013</span>
                <span className="flex items-center gap-2 border border-inkline bg-coal/70 px-3 py-2 text-fog">
                  <IStar className="h-3.5 w-3.5 text-marigold" /> 5.0 · 141 reviews
                </span>
              </div>
            </Reveal>

            <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-chalk">
              <Scramble
                text="WE MAKE"
                className="block text-6xl sm:text-7xl md:text-8xl xl:text-[7.5rem]"
              />
              <span className="outline-text mt-2 block text-6xl sm:text-7xl md:text-8xl xl:text-[7.5rem]">
                BRANDS
              </span>
              <span className="mt-2 block text-6xl text-marigold sm:text-7xl md:text-8xl xl:text-[7.5rem]">
                LOUD<span className="text-flame">.</span>
              </span>
            </h1>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">
                Akshant Ads &amp; Events is Nashik's one-stop crew — hoardings and fleet branding on
                one floor, weddings, summits and DJ nights on the other.{" "}
                <span className="text-chalk">One contract, zero excuses.</span>
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <BtnLink to="/contact" variant="flame">
                  Plan an event
                </BtnLink>
                <BtnLink to="/services" variant="ghost">
                  Book ad space
                </BtnLink>
                <a
                  href={PHONE_TEL}
                  className="group flex items-center gap-3 font-mono text-sm text-fog transition-colors hover:text-marigold"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-inkline transition-colors group-hover:border-marigold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                      <path d="M5.5 3.5h4l1.5 4.5-2.3 1.7a13 13 0 0 0 5.6 5.6l1.7-2.3 4.5 1.5v4a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>

          {/* right visual */}
          <div className="relative lg:col-span-5">
            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-marigold/60" aria-hidden />
                <div className="kenburns relative overflow-hidden border border-inkline">
                  <img
                    src={IMG.heroStage}
                    alt="Main stage at an Akshant-produced night show in Nashik"
                    className="h-[420px] w-full object-cover md:h-[520px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
                  <span className="absolute bottom-4 left-4 bg-ink/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-marigold">
                    ● Live — Sangeet night, Pimpalgaon Rd lawns
                  </span>
                </div>
                <SpinBadge />
                <div className="floaty absolute -right-4 top-8 z-20 bg-flame px-4 py-3 shadow-[0_12px_40px_rgba(255,81,57,0.35)]">
                  <p className="font-display text-2xl font-extrabold leading-none text-chalk">250+</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-chalk/80">
                    Events produced
                  </p>
                </div>
                <div className="floaty absolute -left-4 top-1/2 z-20 bg-marigold px-4 py-3 shadow-[0_12px_40px_rgba(255,182,39,0.3)] [animation-delay:1.4s]">
                  <p className="font-display text-2xl font-extrabold leading-none text-ink">400+</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70">
                    Ad campaigns
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-marigold to-transparent" />
        </div>
      </section>

      {/* ---------- ticker ---------- */}
      <div className="border-y-4 border-ink bg-marigold py-3 text-ink">
        <Marquee
          items={TICKER}
          dur={26}
          className="font-display text-xl font-extrabold uppercase tracking-wide md:text-2xl"
        />
      </div>

      {/* ---------- stats ---------- */}
      <section className="border-b border-inkline/60 bg-coal/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`border-inkline/60 px-6 py-10 text-center md:py-12 ${i > 0 ? "border-l" : ""} ${
                i >= 2 ? "max-md:border-t" : ""
              } ${i % 2 === 1 ? "max-md:border-l" : ""}`}
            >
              <p className="font-display text-4xl font-extrabold text-marigold md:text-5xl">
                <Count to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fog">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- two crafts ---------- */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Two crafts, one crew"
            title={
              <>
                Ads that shout.
                <br />
                Events that <span className="text-marigold">show off.</span>
              </>
            }
            right={
              <BtnLink to="/services" variant="ghost">
                All services
              </BtnLink>
            }
          />
          <div className="grid gap-6 lg:grid-cols-12">
            {/* ads */}
            <Reveal className="lg:col-span-5">
              <div className="group flex h-full flex-col overflow-hidden border border-inkline/70 bg-coal transition-colors duration-500 hover:border-marigold">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={IMG.hoarding}
                    alt="Illuminated hoarding at a Nashik junction"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute left-4 top-4 bg-marigold px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                    01 — Advertising
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold leading-tight text-chalk md:text-3xl">
                    Get your brand on every road in the district.
                  </h3>
                  <ul className="mt-6 flex-1 space-y-3">
                    {AD_SERVICES.map((s) => (
                      <li key={s.id}>
                        <Link
                          to="/services"
                          className="group/li flex items-center justify-between border-b border-inkline/50 pb-2.5 text-sm text-fog transition-colors hover:text-marigold"
                        >
                          {s.name}
                          <IArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/li:translate-x-0 group-hover/li:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-marigold"
                  >
                    Explore advertising <IArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
            {/* events */}
            <Reveal delay={120} className="lg:col-span-7">
              <div className="group flex h-full flex-col overflow-hidden border border-inkline/70 bg-coal transition-colors duration-500 hover:border-flame">
                <div className="relative h-56 overflow-hidden md:h-72">
                  <img
                    src={IMG.concert}
                    alt="Concert night with confetti produced by Akshant"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute left-4 top-4 bg-flame px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-chalk">
                    02 — Events
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold leading-tight text-chalk md:text-3xl">
                    Fill the lawn, light the stage, run the clock.
                  </h3>
                  <div className="mt-6 grid flex-1 gap-x-8 sm:grid-cols-2">
                    {EVENT_SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to="/services"
                        className="group/li flex items-center justify-between border-b border-inkline/50 py-3 text-sm text-fog transition-colors hover:text-marigold"
                      >
                        {s.name}
                        <IArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover/li:translate-x-0 group-hover/li:opacity-100" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-flame"
                  >
                    Explore events <IArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- work preview ---------- */}
      <section className="border-y border-inkline/60 bg-coal/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Recent work"
            title={
              <>
                Proof, <span className="outline-gold">not promises.</span>
              </>
            }
            right={
              <BtnLink to="/work" variant="gold">
                Full portfolio
              </BtnLink>
            }
          />
          <div className="grid gap-5 md:grid-cols-3 md:auto-rows-[260px]">
            <WorkCard item={WORK[0]} className="md:row-span-2" />
            <WorkCard item={WORK[1]} delay={90} />
            <WorkCard item={WORK[2]} delay={160} />
            <WorkCard item={WORK[6]} delay={200} />
            <WorkCard item={WORK[5]} delay={260} />
          </div>
        </div>
      </section>

      {/* ---------- packages teaser ---------- */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="beam pointer-events-none absolute -top-10 right-[20%] h-96 w-16 rotate-6 opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Packages"
            title={
              <>
                Honest plans,
                <br />
                <span className="text-flame">zero surprises.</span>
              </>
            }
            right={
              <BtnLink to="/packages" variant="ghost">
                Compare packages
              </BtnLink>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {EVENT_PACKAGES.map((p, i) => (
              <Reveal key={p.id} delay={i * 110}>
                <Link
                  to="/packages"
                  className={`group block h-full border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    p.popular
                      ? "border-marigold bg-marigold/10 shadow-[0_20px_60px_rgba(255,182,39,0.12)]"
                      : "border-inkline/70 bg-coal hover:border-inkline"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                        {p.marathi} · {p.scale}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-extrabold text-chalk">{p.name}</h3>
                    </div>
                    {p.popular && (
                      <span className="bg-marigold px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-ink">
                        Most booked
                      </span>
                    )}
                  </div>
                  <p className="mt-5 font-display text-4xl font-extrabold text-marigold">
                    {p.price}
                    <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-widest text-fog">
                      {p.per}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-fog">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-marigold" />
                        {f}
                      </li>
                    ))}
                    <li className="font-mono text-[11px] text-marigold">
                      + {p.features.length - 4} more inclusions…
                    </li>
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-colors group-hover:text-marigold">
                    See full plan <IArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- clients ---------- */}
      <section className="border-y border-inkline/60 bg-coal/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-chalk md:text-3xl">
                Trusted by <span className="text-marigold">120+ brands</span> across Nashik, Sinnar
                &amp; Ozar
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
                Repeat clients since 2013
              </p>
            </div>
          </Reveal>
        </div>
        <Marquee
          dur={36}
          items={CLIENTS.slice(0, 5).map((c) => `${c.geo} ${c.name}`)}
          className="border-b border-inkline/40 py-4 font-display text-2xl font-bold text-fog/80"
        />
        <Marquee
          dur={42}
          reverse
          items={CLIENTS.slice(5).map((c) => `${c.geo} ${c.name}`)}
          className="py-4 font-display text-2xl font-bold text-fog/80"
        />
      </section>

      <TestimonialBand />

      {/* ---------- CTA ---------- */}
      <section className="dotgrid relative overflow-hidden py-24 md:py-32">
        <div className="beam pointer-events-none absolute -top-14 left-[18%] h-[420px] w-24 rotate-12 opacity-40" />
        <div className="beam pointer-events-none absolute -top-14 right-[14%] h-[380px] w-16 -rotate-12 opacity-25" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-marigold">
              Dates for Nov 2026 are filling fast
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-chalk sm:text-6xl lg:text-7xl">
              Your event deserves
              <br />
              the <span className="outline-gold">main stage.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <BtnLink to="/contact" variant="gold">
                Request a quote
              </BtnLink>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-3 border border-inkline px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-all duration-300 hover:-translate-y-0.5 hover:border-marigold hover:text-marigold"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
              We reply within 2 business hours · Site recce free within Nashik city
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
