import { useCallback, useEffect, useRef, useState } from "react";
import { Lead, LeadStatus, SEED_LEADS } from "./data";

/* ---------- prefers-reduced-motion ---------- */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------- in-view observer ---------- */
export function useInView<T extends HTMLElement>(threshold = 0.15): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ---------- scramble-decode text ---------- */
const GLYPHS = "AKX#%&★0147▓░";
export function useScramble(text: string, start: boolean, speed = 28): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(reduced ? text : "");
  useEffect(() => {
    if (reduced || !start) {
      if (reduced) setOut(text);
      return;
    }
    let frame = 0;
    const total = text.length * 3 + 10;
    const id = window.setInterval(() => {
      frame++;
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (frame > i * 3 + 9) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setOut(next);
      if (frame >= total) {
        setOut(text);
        window.clearInterval(id);
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, start, speed, reduced]);
  return out;
}

/* ---------- animated counter ---------- */
export function useCounter(to: number, start: boolean, duration = 1600, decimals = 0): string {
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setVal(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration, reduced]);
  return val.toFixed(decimals);
}

/* ---------- lead desk (localStorage demo CRM) ---------- */
const LEADS_KEY = "akx_leads_v1";

function loadLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    if (raw) return JSON.parse(raw) as Lead[];
  } catch {
    /* ignore */
  }
  const now = Date.now();
  return SEED_LEADS.map((l, i) => ({
    ...l,
    id: `seed-${i}`,
    createdAt: now - (i + 1) * 86400000,
  }));
}

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>(loadLeads);

  useEffect(() => {
    try {
      localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
    } catch {
      /* ignore */
    }
  }, [leads]);

  const addLead = useCallback(
    (data: Omit<Lead, "id" | "ref" | "status" | "createdAt">): Lead => {
      const num = 146 + leads.filter((l) => l.id.startsWith("lead-")).length;
      const ref = `AKX-2026-${String(num).padStart(4, "0")}`;
      const lead: Lead = {
        ...data,
        id: `lead-${Date.now()}`,
        ref,
        status: "New",
        createdAt: Date.now(),
      };
      setLeads((prev) => [lead, ...prev]);
      return lead;
    },
    [leads],
  );

  const setStatus = useCallback((id: string, status: LeadStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  }, []);

  const removeLead = useCallback((id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  }, []);

  return { leads, addLead, setStatus, removeLead };
}
