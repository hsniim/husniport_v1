"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import id from "@/locales/id";
import en from "@/locales/en";

const dictionaries = { id, en };
const STORAGE_KEY = "lang";
const DEFAULT_LANG = "id"; // bahasa utama

const LanguageContext = createContext(null);

// Ambil nilai bersarang: get(dict, "nav.about") -> "Tentang"
function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  // Render pertama selalu "id" supaya HTML server & client sama (tanpa hydration error)
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Setelah mount, baca pilihan tersimpan
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dictionaries[saved]) setLangState(saved);
    } catch {}
  }, []);

  // Sinkronkan <html lang> dan <title>
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dictionaries[lang].meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dictionaries[lang].meta.description);
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!dictionaries[next]) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const value = useMemo(() => {
    const dict = dictionaries[lang];
    // t() bisa mengembalikan string, array, atau object (untuk daftar pengalaman, dll.)
    // Jika kunci tidak ada di bahasa aktif, jatuh ke bahasa Indonesia.
    const t = (key) => {
      const found = get(dict, key);
      return found !== undefined ? found : get(dictionaries[DEFAULT_LANG], key) ?? key;
    };
    return { lang, setLang, t };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage harus dipakai di dalam <LanguageProvider>");
  return ctx;
}

// Render teks dengan penanda **tebal** -> <strong>. Sesuaikan className dengan highlight Anda.
export function Rich({ text, className = "font-semibold text-white" }) {
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={className}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}