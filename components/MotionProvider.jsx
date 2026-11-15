"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Memuat fitur animasi yang dipakai saja (domAnimation) alih-alih seluruh Framer Motion.
// Komponen memakai <m.div> / <m.span> sebagai pengganti <motion.div> / <motion.span>.
export default function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}