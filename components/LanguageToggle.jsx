"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * Ikon bola dunia + kode bahasa yang sedang aktif (ID / EN). Klik = pindah bahasa.
 * Gayanya mengikuti sidebar: ikon h-6 w-6 seperti ikon sosial, teks kecil
 * kapital bertracking lebar seperti label menu, hover teal seperti link proyek.
 *
 * Props:
 *  - floating  : true -> pil melayang di kanan bawah layar (untuk mobile)
 *  - className : atur tampil/sembunyi dari luar
 *                (desktop: "hidden lg:inline-flex", mobile: "lg:hidden")
 */
export default function LanguageToggle({ floating = false, className = "" }) {
  const { lang, setLang, t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const next = lang === "id" ? "en" : "id";
  const label = `${t("toggle.label")}: ${t(`toggle.${next}`)}`;

  const base =
    "group items-center gap-3 rounded-sm transition-colors duration-200 " +
    "hover:text-teal-300 focus-visible:text-teal-300 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-teal-400/70 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-slate-900";

  const floatingStyle =
    "fixed z-40 inline-flex gap-2.5 rounded-full border border-slate-200/10 " +
    "bg-slate-900/80 px-4 py-2.5 shadow-lg shadow-black/30 backdrop-blur " +
    "bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className={`${base} ${floating ? floatingStyle : ""} ${className}`}
    >
      <Globe className={floating ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true" />

      <span className="relative inline-block w-5 text-xs font-bold uppercase tracking-widest text-slate-200 transition-colors group-hover:text-teal-300 group-focus-visible:text-teal-300">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={lang}
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {lang}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}