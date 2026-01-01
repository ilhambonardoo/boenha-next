"use client";

import { useEffect, ReactNode } from "react";
import i18n from "@/utils/i18n";
import { I18nextProvider } from "react-i18next";

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize i18n if not already initialized
    if (!i18n.isInitialized) {
      i18n.init().catch(() => {
        // i18n already initialized
      });
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
