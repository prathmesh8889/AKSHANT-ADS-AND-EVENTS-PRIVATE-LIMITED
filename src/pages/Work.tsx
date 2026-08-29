import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { WORK, WORK_FILTERS } from "../lib/data";
import { Count, Reveal, SectionHead } from "../components/Bits";
import { IArrowUpRight, IPin } from "../components/Icons";
import { PageBanner } from "../components/Chrome";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(() => {
    if (filter === "All") return WORK;
    return WORK.filter(
      (w) => w.category === filter || w.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())),
    );
  }, [filter]);

  const countFor = (f: string) =>
    f === "All"
      ? WORK.length
      : WORK.filter((w) => w.category === f || w.tags.some((t) => t.toLowerCase().includes(f.toLowerCase())))
          .length;

  return (
    <div>
      <PageBanner
        kicker="Portfolio"
        title={
          <>
            Proof, <span className="outline-gold">not promises.</span>
          </>
        }
        intro="Stages we've built, crowds we've moved, and brands we've plastered across the district. Filter by craft — every job below was quoted, produced and closed by the same crew."
        watermark="WORK"
      />

      {/* filters + grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-2.5">
              {WORK_FILTERS.map((f) => {
                const active = filter === f;
                const n = countFor(f);
                if (n === 0 && f !== "All") return null;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`flex items-center gap-2 border px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      active
                        ? "border-marigold bg-marigold text-ink"
                        : "border-inkline text-fog hover:border-marigold hover:text-chalk"
                    }`}
                  >
                    {f}
                    <span
                      className={`font-mono text-[10px] ${active ? "text-ink/60" : "text-marigold"}`}
                    >
                      {n}
                    </span>
                  </button>
                );
              })}
              <span className="ml-auto hidden font-mono text-[11px] uppercase tracking-[0.22em] text-fog md:block">
                Showing {items.length} of {WORK.length} jobs
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 md:auto-rows-[280px] lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                key={item.id}
                delay={(i % 3) * 90}
                className={item.tall && filter === "All" ? "md:row-span-2" : ""}
              >
                <Link
                  to="/contact"
                  className="group relative block h-full min-h-[280px] overflow-hidden border border-inkline/70 bg-coal"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/5" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="bg-marigold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                      {item.category}
                    </span>
                    {item.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="border border-chalk/30 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-chalk backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-marigold">
                      {item.client} · {item.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-chalk">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-fog">
                      <span className="flex items-center gap-1.5">
                        <IPin className="h-3.5 w-3.5" /> {item.location}
                      </span>
                      <span className="inline-flex translate-y-1 items-center gap-1.5 text-marigold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Want one like this? <IArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* results strip */}
      <section className="border-y border-inkline/60 bg-coal/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Receipts"
            title={
              <>
                Numbers the <span className="text-marigold">client's CFO liked.</span>
              </>
            }
          />
          <div className="grid grid-cols-2 gap-px border border-inkline/70 bg-inkline/70 lg:grid-cols-4">
            {[
              { v: 3.2, d: 1, s: " L+", l: "footfall impressions on OOH, last 12 months" },
              { v: 4000, d: 0, s: "", l: "largest single-night crowd (Bass Drop Nashik)" },
              { v: 48, d: 0, s: " hrs", l: "fastest full fleet wrap — 26 vans, 3 shifts" },
              { v: 92, d: 0, s: "%", l: "of clients come back for a second job" },
            ].map((x, i) => (
              <Reveal key={x.l} delay={i * 90} className="h-full">
                <div className="h-full bg-ink p-7 md:p-9">
                  <p className="font-display text-4xl font-extrabold text-marigold md:text-5xl">
                    <Count to={x.v} decimals={x.d} suffix={x.s} />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{x.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dotgrid relative overflow-hidden py-20 md:py-28">
        <div className="beam pointer-events-none absolute -top-12 left-1/3 h-96 w-20 rotate-6 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-chalk sm:text-5xl md:text-6xl">
              Next case study: <span className="outline-gold">yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
              Send the date and the dream — we'll send a plan, a number and a site recce.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-flame px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-all duration-300 hover:-translate-y-0.5 hover:bg-marigold hover:text-ink"
            >
              Start your project <IArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
