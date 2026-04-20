"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LeadModal } from "./LeadModal";

type Variant = "signup" | "waitlist";
type OpenArgs = { variant?: Variant; source?: string };

type Ctx = {
  open: (args?: OpenArgs) => void;
  close: () => void;
};

const LeadModalContext = createContext<Ctx | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<Variant>("signup");
  const [source, setSource] = useState<string>("landing");

  const open = useCallback((args?: OpenArgs) => {
    setVariant(args?.variant ?? "signup");
    setSource(args?.source ?? "landing");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <LeadModal
        open={isOpen}
        onClose={close}
        variant={variant}
        source={source}
      />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal(): Ctx {
  const ctx = useContext(LeadModalContext);
  if (!ctx) {
    throw new Error("useLeadModal must be used inside <LeadModalProvider>");
  }
  return ctx;
}
