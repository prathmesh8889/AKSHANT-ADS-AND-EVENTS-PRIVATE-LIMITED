import { IMG, PROCESS, TIMELINE, VALUES } from "../lib/data";
import { BtnLink, Reveal, SectionHead } from "../components/Bits";
import { Icon } from "../components/Icons";
import { PageBanner } from "../components/Chrome";

export default function About() {
  return (
    <div>
      <PageBanner
        kicker="About Akshant"
        title={
          <>
            The crew behind
            <br />
            the <span className="outline-gold">crowd.</span>
          </>
        }
        intro="A flex-printing shop that outgrew its machines — today we run Nashik's most-loved events desk and one of its busiest OOH networks, all from one workshop on Pimpalgaon Road."
        watermark="SINCE ’13"
      />

      {/* story — sticky two-column */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-marigold">
                  <span className="blink h-2 w-2 rounded-full bg-flame" /> Our story
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.02] text-chalk sm:text-5xl">
                  From two printing machines to one very loud workshop.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="kenburns mt-9 overflow-hidden border border-inkline">
                  <img
                    src={IMG.branding}
                    alt="Vehicle branding in progress at the Akshant workshop"
                    loading="lazy"
                    className="h-80 w-full object-cover"
                  />
                </div>
                <div className="mt-5 grid grid-cols-3 divide-x divide-inkline/70 border border-inkline/70 bg-coal">
                  {[
                    ["3,200", "sq ft workshop"],
                    ["38", "crew members"],
                    ["17", "company vehicles"],
                  ].map(([v, l]) => (
                    <div key={l} className="px-4 py-5 text-center">
                      <p className="font-display text-2xl font-extrabold text-marigold">{v}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-fog">{l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
          <div className="space-y-7 text-lg leading-relaxed text-fog lg:col-span-7">
            <Reveal>
              <p>
                <span className="font-display text-2xl font-bold text-chalk">
                  Akshant began in 2013 with a simple observation:
                </span>{" "}
                Nashik's shops printed their banners at one place, booked their stages at another,
                and chased hoarding contractors at a third — and nothing ever matched.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                So we did the unreasonable thing and put all three under one tin roof. The flex
                machine came first. Then a welding bay for stages and trusses. Then a design desk
                that learned to make shopfronts glow. Each time a client asked{" "}
                <em className="text-chalk">“can you also…”</em> — we bought the machine.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                Today the same crew that wraps your delivery vans at 10 AM is show-calling your
                dealers' summit at 7 PM. That's not a slogan; it's a rota. Because ads and events
                were never two businesses — they're two ways of saying{" "}
                <span className="text-marigold">“look at this.”</span>
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                We stay proudly regional: Nashik, Sinnar, Ozar, Igatpuri, Shirdi, and the
                Mumbai–Agra highway corridor. Big enough for a 2,000-guest wedding, small enough
                that the person who quotes you is the person who answers on the day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="border-y border-inkline/60 bg-coal/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Milestones"
            title={
              <>
                Twelve years, <span className="text-marigold">five loud chapters.</span>
              </>
            }
          />
          <div className="relative ml-3 border-l-2 border-inkline md:ml-6">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 90} className="relative pb-12 pl-8 last:pb-0 md:pl-14">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rotate-45 border-2 border-marigold bg-ink" />
                <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                  <p className="font-display text-3xl font-extrabold text-marigold/90 md:col-span-2">
                    {t.year}
                  </p>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-xl font-bold text-chalk md:text-2xl">{t.title}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-fog">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="How we work"
            title={
              <>
                Four rules, <span className="outline-gold">never bent.</span>
              </>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <div className="group flex h-full gap-5 border border-inkline/70 bg-coal p-7 transition-all duration-500 hover:-translate-y-1 hover:border-marigold md:p-9">
                  <span className="grid h-14 w-14 shrink-0 place-items-center border border-inkline text-marigold transition-colors duration-500 group-hover:border-marigold group-hover:bg-marigold group-hover:text-ink">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-chalk">{v.name}</h3>
                    <p className="mt-3 leading-relaxed text-fog">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="relative overflow-hidden border-t border-inkline/60 bg-coal/40 py-20 md:py-28">
        <p
          aria-hidden
          className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[12rem] font-extrabold leading-none text-chalk/[0.03]"
        >
          PROCESS
        </p>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="From call to curtain"
            title={
              <>
                Four steps. <span className="text-flame">No drama — we keep that for the stage.</span>
              </>
            }
          />
          <div className="grid gap-px overflow-hidden border border-inkline/70 bg-inkline/70 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 110} className="h-full">
                <div className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-coal">
                  <p className="font-display text-5xl font-extrabold text-inkline transition-colors duration-500 group-hover:text-marigold">
                    {p.step}
                  </p>
                  <h3 className="mt-6 font-display text-2xl font-bold text-chalk">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{p.text}</p>
                  <div className="mt-6 h-1 w-8 bg-marigold transition-all duration-500 group-hover:w-16" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-marigold/40 bg-marigold/5 px-7 py-6">
              <p className="font-display text-xl font-bold text-chalk md:text-2xl">
                Average quote turnaround: <span className="text-marigold">under 24 hours.</span>
              </p>
              <BtnLink to="/contact" variant="gold">
                Start step 01
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
