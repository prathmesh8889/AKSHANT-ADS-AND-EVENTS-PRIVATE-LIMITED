import { Link } from "react-router-dom";
import { AD_SERVICES, EVENT_SERVICES, IMG, Service } from "../lib/data";
import { BtnLink, Reveal, SectionHead } from "../components/Bits";
import { IArrowRight, ICheck, Icon } from "../components/Icons";
import { PageBanner } from "../components/Chrome";

function ServiceCard({ s, i, accent }: { s: Service; i: number; accent: "gold" | "flame" }) {
  const acc = accent === "gold" ? "hover:border-marigold" : "hover:border-flame";
  const chip = accent === "gold" ? "bg-marigold text-ink" : "bg-flame text-chalk";
  return (
    <Reveal delay={(i % 2) * 100} className="h-full">
      <div
        className={`group flex h-full flex-col border border-inkline/70 bg-coal p-7 transition-all duration-500 hover:-translate-y-1.5 ${acc} md:p-8`}
      >
        <div className="flex items-start justify-between">
          <span
            className={`grid h-14 w-14 place-items-center border border-inkline text-marigold transition-colors duration-500 ${
              accent === "gold"
                ? "group-hover:bg-marigold group-hover:text-ink"
                : "group-hover:bg-flame group-hover:text-chalk"
            }`}
          >
            <Icon name={s.icon} className="h-7 w-7" />
          </span>
          <span className={`px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] ${chip}`}>
            {s.tag}
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-chalk">{s.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fog">{s.desc}</p>
        <ul className="mt-5 flex-1 space-y-2.5">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-fog">
              <ICheck className={`mt-0.5 h-4 w-4 shrink-0 ${accent === "gold" ? "text-marigold" : "text-flame"}`} />
              {b}
            </li>
          ))}
        </ul>
        <Link
          to={`/contact?type=${encodeURIComponent(s.quoteType)}`}
          className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-colors group-hover:text-marigold"
        >
          Get a quote <IArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <PageBanner
        kicker="Services"
        title={
          <>
            What we do,
            <br />
            <span className="text-marigold">loud.</span>
          </>
        }
        intro="Twelve services across two floors: advertising that puts your name on the city, and event production that puts a crowd in front of it."
        watermark="SERVICES"
      />

      {/* sticky sub-nav */}
      <div className="sticky top-[70px] z-30 border-b border-inkline/60 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <span className="mr-2 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-fog sm:block">
            Jump to —
          </span>
          <button
            onClick={() => jump("advertising")}
            className="bg-marigold px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
          >
            01 · Advertising
          </button>
          <button
            onClick={() => jump("events")}
            className="bg-flame px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-chalk transition-transform hover:-translate-y-0.5"
          >
            02 · Events
          </button>
          <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.22em] text-fog md:block">
            12 services · all in-house
          </span>
        </div>
      </div>

      {/* advertising */}
      <section id="advertising" className="scroll-mt-32 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Floor one — Advertising"
            title={
              <>
                Put your brand on <span className="outline-gold">every road.</span>
              </>
            }
            right={
              <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                40+ owned &amp; partner OOH sites
                <br />
                Nashik · Sinnar · Ozar · highway corridor
              </p>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AD_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} accent="gold" />
            ))}
          </div>

          {/* OOH band */}
          <Reveal delay={120}>
            <div className="relative mt-10 overflow-hidden border border-inkline">
              <div className="kenburns absolute inset-0">
                <img
                  src={IMG.hoarding}
                  alt="Akshant hoarding glowing at a Nashik junction"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
              <div className="relative grid gap-6 p-8 md:grid-cols-2 md:p-14">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-marigold">
                    Media map, not guesswork
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-chalk md:text-4xl">
                    Every hoarding booked with site photos, GPS pins &amp; daily traffic counts.
                  </h3>
                  <BtnLink to="/contact?type=Hoarding%20%2F%20OOH" variant="gold" className="mt-7">
                    Book OOH sites
                  </BtnLink>
                </div>
                <div className="grid grid-cols-3 content-end gap-px border border-inkline/60 bg-inkline/60">
                  {[
                    ["40+", "OOH sites"],
                    ["18", "unipoles"],
                    ["6", "lakh daily eyes"],
                  ].map(([v, l]) => (
                    <div key={l} className="bg-ink/90 px-4 py-6 text-center">
                      <p className="font-display text-2xl font-extrabold text-marigold md:text-3xl">{v}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-fog">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* events */}
      <section id="events" className="scroll-mt-32 border-t border-inkline/60 bg-coal/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Floor two — Events"
            title={
              <>
                Fill the lawn. <span className="text-flame">Light the stage.</span>
              </>
            }
            right={
              <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                250+ shows produced
                <br />
                from 100-guest haldi to 4,000-crowd DJ night
              </p>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {EVENT_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} accent="flame" />
            ))}
          </div>

          {/* showtime band */}
          <Reveal delay={120}>
            <div className="relative mt-10 overflow-hidden border border-inkline">
              <div className="kenburns absolute inset-0">
                <img
                  src={IMG.concert}
                  alt="Confetti burst at an Akshant concert night"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
              <div className="relative max-w-xl p-8 md:p-14">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-flame">The Akshant promise</p>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-chalk md:text-4xl">
                  A named show-caller on walkie, from the first truss to the last guest.
                </h3>
                <p className="mt-4 leading-relaxed text-fog">
                  Rain plans in writing. Generator on standby. Vendor payments our headache, not
                  yours. You greet guests; we run the clock.
                </p>
                <BtnLink to="/contact?type=Corporate%20Event" variant="flame" className="mt-7">
                  Plan your event
                </BtnLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* bundle band */}
      <section className="border-t border-inkline/60 bg-marigold py-14 text-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink/70">Bundle &amp; save</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-4xl">
              Launching something? Book the event + the hoardings together and take 10% off the OOH
              plan.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <BtnLink to="/packages" variant="ink" arrow>
              See packages
            </BtnLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
