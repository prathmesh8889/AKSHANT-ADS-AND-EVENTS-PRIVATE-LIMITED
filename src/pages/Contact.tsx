import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ADDRESS,
  EMAIL,
  LEAD_STATUSES,
  Lead,
  LeadStatus,
  MAP_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  QUOTE_TYPES,
  WHATSAPP,
} from "../lib/data";
import { useLeads } from "../lib/hooks";
import { BtnLink, Reveal, SectionHead, Stars, StatusPill } from "../components/Bits";
import {
  IArrowUpRight,
  ICheck,
  IClock,
  IMail,
  IPhone,
  IPin,
  IStar,
  IWhatsApp,
  IClose,
} from "../components/Icons";
import { PageBanner } from "../components/Chrome";

const inputCls =
  "w-full border border-inkline bg-coal px-4 py-3.5 text-sm text-chalk placeholder:text-fog/50 outline-none transition-colors focus:border-marigold";
const labelCls = "mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-fog";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label} {required && <span className="text-flame">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 font-mono text-[11px] text-flame">▲ {error}</p>}
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const { leads, addLead, setStatus, removeLead } = useLeads();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: params.get("type") && QUOTE_TYPES.includes(params.get("type") as string)
      ? (params.get("type") as string)
      : QUOTE_TYPES[0],
    date: "",
    scale: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedLead, setSavedLead] = useState<Lead | null>(null);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please tell us your name";
    if (!/^[\d\s+()-]{10,}$/.test(form.phone.trim())) errs.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "That email looks off";
    if (form.message.trim().length < 10) errs.message = "Give us at least a line about the job";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const lead = addLead({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || "—",
      type: form.type,
      date: form.date || "Flexible",
      scale: form.scale || "Not sure yet",
      budget: form.budget || "To discuss",
      message: form.message.trim(),
    });
    setSavedLead(lead);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const desk = useMemo(
    () => ({
      total: leads.length,
      fresh: leads.filter((l) => l.status === "New").length,
      progress: leads.filter((l) => l.status === "Contacted" || l.status === "Quoted").length,
      won: leads.filter((l) => l.status === "Booked").length,
    }),
    [leads],
  );

  return (
    <div>
      <PageBanner
        kicker="Contact & quotes"
        title={
          <>
            Start the <span className="text-flame">show.</span>
          </>
        }
        intro="Tell us the date, the scale and the dream. You'll get a reference number immediately and a call from the crew within 2 business hours — then track your enquiry in the Lead Desk below."
        watermark="TALK"
      />

      {/* form + info */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          {/* form / success */}
          <div className="lg:col-span-7">
            {savedLead ? (
              <Reveal className="h-full">
                <div className="flex h-full flex-col border border-leaf/60 bg-coal p-8 md:p-12">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf text-ink">
                    <ICheck className="h-8 w-8" />
                  </span>
                  <h2 className="mt-7 font-display text-3xl font-extrabold text-chalk md:text-4xl">
                    Enquiry locked in, {savedLead.name.split(" ")[0]}. 🎪
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-fog">
                    Your quote request is on the crew's board. We'll call{" "}
                    <span className="text-chalk">{savedLead.phone}</span> within 2 business hours.
                    Keep this reference handy:
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-4 border border-dashed border-marigold/60 bg-marigold/5 px-6 py-5">
                    <span className="font-display text-3xl font-extrabold tracking-wide text-marigold">
                      {savedLead.ref}
                    </span>
                    <StatusPill status={savedLead.status} />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-fog">
                      {savedLead.type}
                    </span>
                  </div>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#leaddesk"
                      className="inline-flex items-center gap-2 bg-marigold px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
                    >
                      Track in Lead Desk <IArrowUpRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => {
                        setSavedLead(null);
                        setForm((f) => ({ ...f, name: "", phone: "", email: "", date: "", message: "" }));
                      }}
                      className="border border-inkline px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-colors hover:border-marigold hover:text-marigold"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <div className="border border-inkline/70 bg-ink p-7 md:p-10">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <h2 className="font-display text-3xl font-extrabold text-chalk">Request a quote</h2>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog sm:block">
                      Avg. reply: 2 hrs
                    </span>
                  </div>
                  <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" required error={errors.name}>
                      <input className={inputCls} placeholder="e.g. Prakash Ahire" value={form.name} onChange={set("name")} />
                    </Field>
                    <Field label="Phone" required error={errors.phone}>
                      <input className={inputCls} placeholder="+91 …" value={form.phone} onChange={set("phone")} />
                    </Field>
                    <Field label="Email (optional)" error={errors.email}>
                      <input className={inputCls} placeholder="you@company.in" value={form.email} onChange={set("email")} />
                    </Field>
                    <Field label="I need help with" required>
                      <select className={inputCls} value={form.type} onChange={set("type")}>
                        {QUOTE_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-coal">
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Event / campaign date">
                      <input type="date" className={inputCls} value={form.date} onChange={set("date")} />
                    </Field>
                    <Field label="Scale">
                      <select className={inputCls} value={form.scale} onChange={set("scale")}>
                        <option value="" className="bg-coal">Select…</option>
                        {["Up to 200 guests", "200 – 600 guests", "600 – 1,500 guests", "1,500+ guests", "5 – 10 ad sites", "10 – 25 ad sites", "25+ ad sites / fleet"].map((o) => (
                          <option key={o} value={o} className="bg-coal">
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Budget range">
                      <select className={inputCls} value={form.budget} onChange={set("budget")}>
                        <option value="" className="bg-coal">Select…</option>
                        {["Under ₹50,000", "₹50,000 – ₹1 Lakh", "₹1 – 3 Lakh", "₹3 – 5 Lakh", "₹5 – 12 Lakh", "₹12 Lakh+", "To discuss"].map((o) => (
                          <option key={o} value={o} className="bg-coal">
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Tell us about it" required error={errors.message}>
                        <textarea
                          rows={4}
                          className={`${inputCls} resize-none`}
                          placeholder="Venue ideas, guest count, must-haves, references — whatever you've got."
                          value={form.message}
                          onChange={set("message")}
                        />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 bg-flame px-6 py-4.5 font-display text-sm font-bold uppercase tracking-wider text-chalk transition-all duration-300 hover:-translate-y-0.5 hover:bg-marigold hover:text-ink"
                      >
                        Fire off the enquiry
                        <IArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                        You'll get a reference number · Track it anytime in the Lead Desk
                      </p>
                    </div>
                  </form>
                </div>
              </Reveal>
            )}
          </div>

          {/* info rail */}
          <div className="space-y-5 lg:col-span-5">
            <Reveal delay={120}>
              <div className="border border-inkline/70 bg-coal p-7">
                <h3 className="font-display text-xl font-bold text-chalk">The office on Pimpalgaon Rd</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3.5">
                    <IPin className="mt-0.5 h-5 w-5 shrink-0 text-marigold" />
                    <div>
                      <p className="font-semibold text-chalk">{ADDRESS}</p>
                      <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-marigold hover:text-chalk"
                      >
                        Open in Google Maps <IArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3.5">
                    <IPhone className="mt-0.5 h-5 w-5 shrink-0 text-marigold" />
                    <a href={PHONE_TEL} className="font-semibold text-chalk transition-colors hover:text-marigold">
                      {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li className="flex gap-3.5">
                    <IWhatsApp className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-chalk transition-colors hover:text-leaf">
                      WhatsApp the crew — replies in minutes
                    </a>
                  </li>
                  <li className="flex gap-3.5">
                    <IMail className="mt-0.5 h-5 w-5 shrink-0 text-marigold" />
                    <a href={`mailto:${EMAIL}`} className="font-semibold text-chalk transition-colors hover:text-marigold">
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex gap-3.5">
                    <IClock className="mt-0.5 h-5 w-5 shrink-0 text-marigold" />
                    <span className="text-fog">
                      Mon–Sun · 9:00 AM – 9:00 PM
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-marigold">
                        Show days: we work your hours
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t border-inkline/70 pt-5">
                  <span className="font-display text-2xl font-extrabold text-marigold">5.0</span>
                  <span>
                    <Stars className="h-3.5 w-3.5" />
                    <span className="mt-0.5 flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-fog">
                      <IStar className="h-3 w-3 text-marigold" /> 141 Google reviews
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="overflow-hidden border border-inkline/70">
                <iframe
                  title="Akshant Ads & Events on Google Maps — Pimpalgaon Road, Nashik"
                  src={MAP_EMBED}
                  className="h-72 w-full"
                  style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-coal px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-marigold"
                >
                  Get directions to the workshop <IArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* lead desk */}
      <section id="leaddesk" className="scroll-mt-24 border-t border-inkline/60 bg-coal/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            kicker="Lead desk"
            title={
              <>
                Enquiries tracked <span className="outline-gold">like a show.</span>
              </>
            }
            right={
              <div className="grid grid-cols-4 gap-px border border-inkline/70 bg-inkline/70">
                {[
                  [desk.total, "Total"],
                  [desk.fresh, "New"],
                  [desk.progress, "In progress"],
                  [desk.won, "Booked"],
                ].map(([v, l]) => (
                  <div key={l as string} className="bg-ink px-5 py-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-marigold">{v}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-fog">{l}</p>
                  </div>
                ))}
              </div>
            }
          />

          <p className="mb-8 -mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            ● Demo CRM — leads are stored in this browser only. In production this board syncs to
            the office dashboard.
          </p>

          {leads.length === 0 ? (
            <div className="border border-dashed border-inkline p-14 text-center">
              <p className="font-display text-2xl font-bold text-chalk">The board is clear. 🎯</p>
              <p className="mt-2 text-fog">Send an enquiry above and it lands here with a reference number.</p>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {leads.map((l, i) => (
                <Reveal key={l.id} delay={(i % 2) * 80}>
                  <div className="flex h-full flex-col border border-inkline/70 bg-ink p-6 transition-colors hover:border-inkline md:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-display text-lg font-extrabold tracking-wide text-marigold">{l.ref}</span>
                      <StatusPill status={l.status} />
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-chalk">{l.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                      {l.type} · {l.date} · {l.scale}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{l.message}</p>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-fog">
                      <span className="flex items-center gap-1.5"><IPhone className="h-3 w-3 text-marigold" /> {l.phone}</span>
                      {l.email !== "—" && <span className="flex items-center gap-1.5"><IMail className="h-3 w-3 text-marigold" /> {l.email}</span>}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-inkline/60 pt-5">
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Status —</label>
                      <select
                        value={l.status}
                        onChange={(e) => setStatus(l.id, e.target.value as LeadStatus)}
                        className="border border-inkline bg-coal px-3 py-2 font-mono text-xs text-chalk outline-none focus:border-marigold"
                      >
                        {LEAD_STATUSES.map((s) => (
                          <option key={s} value={s} className="bg-coal">
                            {s}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeLead(l.id)}
                        aria-label={`Remove lead ${l.ref}`}
                        className="ml-auto flex items-center gap-1.5 border border-inkline px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-fog transition-colors hover:border-flame hover:text-flame"
                      >
                        <IClose className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border border-marigold/40 bg-marigold/5 px-7 py-6">
              <p className="font-display text-xl font-bold text-chalk md:text-2xl">
                Prefer a human? <span className="text-marigold">The crew picks up.</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_TEL} className="bg-marigold px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5">
                  Call {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-leaf px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5">
                  WhatsApp
                </a>
                <BtnLink to="/work" variant="ghost" arrow={false}>
                  See the work first
                </BtnLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
