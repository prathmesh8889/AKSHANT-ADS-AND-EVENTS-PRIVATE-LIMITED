import React from "react";

type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IHoarding = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3.5" width="18" height="11" rx="1" />
    <path d="M6.5 7.5h7M6.5 10.5h4" />
    <path d="M8 14.5 6.5 21M16 14.5l1.5 6.5M9 18h6" />
  </svg>
);

export const IVan = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M2.5 7h11v9h-11zM13.5 10h4.2l3.8 3.4V16h-8" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="16.8" cy="17.5" r="1.8" />
    <path d="M5.5 10.5h5" />
  </svg>
);

export const IGlow = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="4" y="6" width="16" height="9" rx="1.5" />
    <path d="M8 2.5v3.5M16 2.5v3.5" />
    <circle cx="8.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <path d="M12 15v3.5M9 21.5h6" />
  </svg>
);

export const IPrinter = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="7" cy="6.5" r="3" />
    <circle cx="7" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    <path d="M10 6.5h10.5v4H14" />
    <path d="M14 10.5v10h-8v-13" />
    <path d="M9 14h3M9 17h3" />
  </svg>
);

export const IStore = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3.5 8 5 3.5h14L20.5 8" />
    <path d="M3.5 8c0 1.4 1.2 2.5 2.75 2.5S9 9.4 9 8c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0 1.4 1.2 2.5 2.75 2.5S20.5 9.4 20.5 8" />
    <path d="M5 10.5V20.5h14v-10" />
    <path d="M9.5 20.5v-6h5v6" />
  </svg>
);

export const IMonitor = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="4" width="19" height="12.5" rx="1.5" />
    <path d="M6.5 12.5l3-3 2.5 2 4-4.5" />
    <path d="M12 16.5v4M8 20.5h8" />
  </svg>
);

export const IStage = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 3h18" />
    <path d="M7 3l3.5 5M17 3l-3.5 5" />
    <circle cx="12" cy="10.5" r="2" />
    <path d="M4.5 21v-4.5h15V21" />
    <path d="M8.5 16.5V14h7v2.5" />
  </svg>
);

export const IRings = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="13.5" r="5.5" />
    <circle cx="15" cy="10.5" r="5.5" />
    <path d="M15 2.5l1.5 2.5H13.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const ISpark = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 2.5 14 8l5.5 1-4.2 3.6L16.5 18 12 14.9 7.5 18l1.2-5.4L4.5 9 10 8z" />
    <path d="M12 18.5v3" />
  </svg>
);

export const IMic = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="9" y="2.5" width="6" height="10" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
    <path d="M12 17.5v4M8.5 21.5h7" />
  </svg>
);

export const IBooth = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 3.5h16l-2 5H6z" />
    <path d="M6 8.5V20.5h12V8.5" />
    <path d="M9 20.5v-5h6v5M9 12h.01M15 12h.01" />
  </svg>
);

export const ITrophy = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
    <path d="M7 5H3.5v1.5A3.5 3.5 0 0 0 7 10M17 5h3.5v1.5A3.5 3.5 0 0 1 17 10" />
    <path d="M12 14v3.5M8.5 21h7M9.5 17.5h5V21h-5z" />
  </svg>
);

export const IPin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21.5s-7-6.2-7-11.5a7 7 0 0 1 14 0c0 5.3-7 11.5-7 11.5z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const IBolt = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M13 2.5 5 13.5h5.5L11 21.5l8-11h-5.5z" />
  </svg>
);

export const IDiamond = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 3.5h10l4 5.5-9 11.5L3 9z" />
    <path d="M3 9h18M9.5 3.5 12 9l2.5-5.5M12 20 9.5 9M12 20l2.5-11" />
  </svg>
);

export const IClock = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const IPhone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5.5 3.5h4l1.5 4.5-2.3 1.7a13 13 0 0 0 5.6 5.6l1.7-2.3 4.5 1.5v4a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const IMail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const IStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 16.9 6.3 20l1.2-6.3L2.8 9.3l6.4-.8z" />
  </svg>
);

export const IArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const IArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12h16M13 5l7 7-7 7" />
  </svg>
);

export const ICheck = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m4.5 12.5 5 5L19.5 6.5" />
  </svg>
);

export const IChevron = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m5 9 7 7 7-7" />
  </svg>
);

export const IMenu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
  </svg>
);

export const IClose = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </svg>
);

export const ICalendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 9.5h17M8 2.5V6M16 2.5V6" />
  </svg>
);

export const IUsers = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20.5a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5a3.5 3.5 0 0 1 0 6.7M17.8 14.6a6.5 6.5 0 0 1 3.7 5.9" />
  </svg>
);

export const IQuote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 12.5C4 8 6.8 5.2 10.5 4.5l.7 1.8c-2.2.8-3.5 2.3-3.7 4.2h3.2v8H4zM13.5 12.5c0-4.5 2.8-7.3 6.5-8l.7 1.8c-2.2.8-3.5 2.3-3.7 4.2h3.2v8h-6.7z" />
  </svg>
);

export const IWhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4.1 5.2 5.2 0 0 0 3.2.6 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
  </svg>
);

export const IRupee = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6.5 3.5h11M6.5 8h11M7 3.5h3.5a4.5 4.5 0 0 1 0 9H7l7 8" />
  </svg>
);

/* brand mark */
export const LogoMark = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="14" fill="#ffb627" />
    <path
      d="M32 11 11.5 53h9.2l4.3-9.3h14L43.3 53h9.2L32 11zm0 15 4.7 10.3h-9.4z"
      fill="#171221"
    />
    <circle cx="49" cy="15" r="4" fill="#ff5139" />
  </svg>
);

const MAP: Record<string, React.FC<P>> = {
  hoarding: IHoarding,
  van: IVan,
  glow: IGlow,
  printer: IPrinter,
  store: IStore,
  monitor: IMonitor,
  stage: IStage,
  rings: IRings,
  spark: ISpark,
  mic: IMic,
  booth: IBooth,
  trophy: ITrophy,
  pin: IPin,
  bolt: IBolt,
  diamond: IDiamond,
  clock: IClock,
  phone: IPhone,
  mail: IMail,
  calendar: ICalendar,
  users: IUsers,
  rupee: IRupee,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name];
  return Cmp ? <Cmp className={className} /> : null;
}
