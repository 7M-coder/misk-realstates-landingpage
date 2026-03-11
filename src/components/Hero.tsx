import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  content: any;
  lang: "ar" | "en";
}

export default function Hero({ content, lang }: HeroProps) {
  return (
    <section
      id="home"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-end pb-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18, objectPosition: "center 40%" }}
        />
        {/* Deep dark overlay to keep near-black feel */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        {/* Gradient vignette bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        {/* Gradient vignette sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[12%] h-full w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[12%] h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent"
        />
        <span className="text-[#c9a84c]/60 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mt-2">
          scroll
        </span>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 z-20 relative w-full">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-light">
            Premium Real Estate
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-6xl md:text-[7.5rem] font-light text-[#f8f5ef] leading-[0.9] mb-8 max-w-4xl">
          {content.hero.title}
        </motion.h1>

        {/* Subtitle + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
          <p className="text-[#f8f5ef]/50 text-base md:text-lg max-w-md leading-relaxed font-light tracking-wide">
            {content.hero.subtitle}
          </p>

          <a
            href="#services"
            className="group flex items-center gap-4 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#f8f5ef] transition-all duration-500 shrink-0">
            {content.hero.cta}
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-12 mt-16 pt-8 border-t border-white/10">
          {[
            { num: "500+", label: "Properties" },
            { num: "15yr", label: "Experience" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl text-[#c9a84c] font-light">
                {s.num}
              </div>
              <div className="text-[#f8f5ef]/40 text-xs tracking-[0.2em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
