import React from "react";
import { Link } from "react-router-dom";
import { useCounter, useInView, useScramble } from "../lib/hooks";
import { IArrowRight, IArrowUpRight, IStar } from "./Icons";

/* ---------- scroll reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, on] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${on ? "on" : ""} ${className}`}
      style={{ ["--rv-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- marquee ---------- */
export function Marquee({
  items,
  dur = 32,
  reverse = false,
  className = "",
  sep = "✷",
}: {
  items: string[];
  dur?: number;
  reverse?: boolean;
  className?: string;
  sep?: string;
}) {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-5 md:px-7">{it}</span>
          <span className="text-marigold">{sep}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--mq-dur" as string]: `${dur}s` }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ---------- scramble headline ---------- */
export function Scramble({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "div";
}) {
  const [ref, on] = useInView<HTMLSpanElement>(0.3);
  const out = useScramble(text, on);
  return (
    <span ref={ref} className={`inline-block ${className}`}>
      <Tag>{out || "\u00A0"}</Tag>
    </span>
  );
}

/* ---------- animated counter ---------- */
export function Count({
  to,
  decimals = 0,
  suffix = "",
  className = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const [ref, on] = useInView<HTMLSpanElement>(0.4);
  const val = useCounter(to, on, 1500, decimals);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- stars ---------- */
export function Stars({ n = 5, className = "h-4 w-4" }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-marigold">
      {Array.from({ length: n }).map((_, i) => (
        <IStar key={i} className={className} />
      ))}
    </span>
  );
}

/* ---------- section head ---------- */
export function SectionHead({
  kicker,
  title,
  right,
  tone = "dark",
}: {
  kicker: string;
  title: React.ReactNode;
  right?: React.ReactNode;
  tone?: "dark" | "gold";
}) {
  const kickerColor = tone === "gold" ? "text-ink/70" : "text-fog";
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
      <div className="max-w-3xl">
        <Reveal>
          <p className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] ${kickerColor}`}>
            <span className="blink inline-block h-2 w-2 rounded-full bg-flame" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2
            className={`font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
              tone === "gold" ? "text-ink" : "text-chalk"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      </div>
      {right && <Reveal delay={160}>{right}</Reveal>}
    </div>
  );
}

/* ---------- buttons ---------- */
export function BtnLink({
  to,
  children,
  variant = "gold",
  className = "",
  arrow = true,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "gold" | "flame" | "ghost" | "ink";
  className?: string;
  arrow?: boolean;
}) {
  const styles: Record<string, string> = {
    gold: "bg-marigold text-ink hover:bg-chalk",
    flame: "bg-flame text-chalk hover:bg-marigold hover:text-ink",
    ghost: "border border-inkline text-chalk hover:border-marigold hover:text-marigold",
    ink: "bg-ink text-chalk hover:bg-smoke",
  };
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <IArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fog transition-colors hover:text-marigold ${className}`}
    >
      {children}
      <IArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- status pill ---------- */
export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    New: "bg-marigold text-ink",
    Contacted: "bg-sky-400/90 text-ink",
    Quoted: "bg-leaf text-ink",
    Booked: "bg-flame text-chalk",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${map[status] ?? "bg-smoke text-chalk"}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
