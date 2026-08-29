import { useState } from "react";
import { Link } from "react-router-dom";
import { ADDONS, AD_PACKAGES, EVENT_PACKAGES, FAQS, Package } from "../lib/data";
import { BtnLink, Reveal, SectionHead } from "../components/Bits";
import { IArrowRight, ICheck, IChevron } from "../components/Icons";
import { PageBanner } from "../components/Chrome";

function PackageCard({ p, i, contactType }: { p: Package; i: number; contactType: string }) {
  return (
    <Reveal delay={i * 110} className="h-full">
      <div
        className={`relative flex h-full flex-col border p-8 transition-all duration-500 hover:-translate-y-2 ${
          p.popular
            ? "border-marigold bg-marigold/[0.07] shadow-[0_24px_70px_rgba(255,182,39,0.14)]"
            : "border-inkline/70 bg-coal hover:border-inkline"
        }`}
      >
        {p.popular && (
          <span className="absolute -top-3.5 left-8 bg-marigold px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
            ★ Most booked
          </span>
        )}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-fog">
              {p.marathi} · {p.scale}
            </p>
            <h3 className="mt-2 font-display text-4xl font-extrabold text-chalk">{p.name}</h3>
          </div>
        </div>
        <p className="mt-6 font-display text-5xl font-extrabold text-marigold">
          {p.price}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{p.per}</p>
        <ul className="mt-7 flex-1 space-y-3 border-t border-inkline/60 pt-7">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-fog">
              <ICheck className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-marigold" : "text-leaf"}`} />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-6 border-l-2 border-flame/70 pl-4 text-xs leading-relaxed text-fog italic">
          {p.note}
        </p>
        <Link
          to={`/contact?type=${encodeURIComponent(contactType)}`}
          className={`group mt-7 inline-flex w-full items-center justify-center gap-2.5 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
            p.popular
              ? "bg-marigold text-ink hover:bg-chalk"
              : "border border-inkline text-chalk hover:border-marigold hover:text-marigold"
          }`}
        >
          Book {p.name}
          <IArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} delay={i * 60}>
            <div className={`border-b border-inkline/70 ${i === 0 ? "border-t" : ""}`}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-marigold"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-marigold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-bold text-chalk md:text-xl">{f.q}</span>
                </span>
                <IChevron
                  className={`h-5 w-5 shrink-0 text-marigold transition-transform duration-400 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`acc-body ${isOpen ? "open" : ""}`}>
                <div>
                  <p className="pb-6 pl-9 leading-relaxed text-fog">{f.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Packages() {
  const [tab, setTab] = useState<"events" | "ads">("events");
  const packs = tab === "events" ? EVENT_PACKAGES : AD_PACKAGES;
  const contactType =
    tab === "events"
      ? ["Wedding", "Wedding", "Wedding"]
      : ["Hoarding / OOH", "Hoarding / OOH", "Hoarding / OOH"];

  return (
    <div>
      <PageBanner
        kicker="Packages & retainers"
        title={
          <>
            Straight-talking
            <br />
            <span className="text-marigold">packages.</span>
          </>
        }
        intro="Published starting prices, written inclusions, and a phone number that actually gets answered. Every plan is customisable to the rupee — these are the bones."
        watermark="₹"
      />

      {/* tabs + cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mb-12 inline-flex border border-inkline bg-coal p-1.5">
              {(
                [
                  ["events", "01 · Event packages"],
                  ["ads", "02 · Ad retainers"],
                ] as const
              ).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`px-6 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    tab === k ? "bg-marigold text-ink" : "text-fog hover:text-chalk"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Reveal>

          <div key={tab} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packs.map((p, i) => (
              <PackageCard key={p.id} p={p} i={i} contactType={contactType[i]} />
            ))}
          </div>

          {/* payment note */}
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border border-inkline/70 bg-coal px-7 py-6">
              <p className="max-w-2xl text-sm leading-relaxed text-fog">
                <span className="font-display font-bold text-marigold">Payment terms:</span> 40% on
                booking · 40% a week before · 20% after the show. Advertising retainers monthly in
                advance. GST invoices for everything — no cash-in-hand discounts, no surprises.
              </p>
              <BtnLink to="/contact" variant="ghost">
                Ask about custom builds
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* addons */}
      <section className="border-y border-inkline/60 bg-coal/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="À la carte"
            title={
              <>
                Staple-on <span className="outline-gold">extras.</span>
              </>
            }
            right={
              <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                Attach any of these to a package — perforated, like a real ticket
              </p>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADDONS.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 80}>
                <div className="ticket flex h-full items-center justify-between gap-3 border border-dashed border-inkline bg-ink px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-marigold">
                  <span className="text-sm font-semibold text-chalk">{a.split("—")[0]}</span>
                  <span className="whitespace-nowrap font-mono text-xs text-marigold">
                    {a.split("—")[1]?.trim()}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Before you ask"
            title={
              <>
                Questions we get <span className="text-flame">every week.</span>
              </>
            }
          />
          <Faq />
          <Reveal delay={120}>
            <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.22em] text-fog">
              Still curious? <Link to="/contact" className="text-marigold underline underline-offset-4">Write to the crew</Link> or call +91 90225 53637
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
