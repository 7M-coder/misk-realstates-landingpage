import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  content: any;
  lang: "ar" | "en";
}

export default function Hero({ content, lang }: HeroProps) {
  const isRtl = lang === "ar";

  return (
    <section
      id="home"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* Full-bleed background */}
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Dark overlay — heavier at center to make text pop */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/40" />

      {/* Gold top border accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#c9a449]" />

      {/* Content — centered */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8">
          <span className="w-12 h-px bg-[#c9a449]/70" />
          <span className="text-[#c9a449] text-xs font-semibold tracking-[0.25em] uppercase">
            {isRtl ? "مجموعة مسك للخدمات العقارية" : "Misk Real Estate Services"}
          </span>
          <span className="w-12 h-px bg-[#c9a449]/70" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-black leading-tight mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.05 }}>
          {content.hero.title}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="w-20 h-0.5 bg-[#c9a449] mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-white/60 font-light leading-loose max-w-xl mx-auto mb-12"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}>
          {content.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-10 py-4 bg-[#c9a449] text-white font-bold text-sm tracking-wide hover:bg-[#b8932f] transition-colors duration-300">
            {isRtl ? "تواصل معنا" : "Contact Us"}
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-colors duration-300">
            {isRtl ? "خدماتنا" : "Our Services"}
          </a>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/8 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">
          {isRtl ? "اكتشف" : "Scroll"}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
