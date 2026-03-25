import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  content: any;
  lang: "ar" | "en";
}

export default function Hero({ content, lang }: HeroProps) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 35%" }}
      />

      {/* Gradient: strong bottom, subtle top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-0">
        {/* Big headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-black mb-4 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1.1 }}>
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/65 font-light mb-8 max-w-xl"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", lineHeight: 1.7 }}>
          {content.hero.subtitle}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mb-0">
          <a
            href="#services"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#1d6b52] text-white font-bold text-sm hover:bg-[#144d3c] transition-colors duration-300 shadow-lg">
            {content.hero.cta}
            <Arrow size={15} />
          </a>
          <a
            href="tel:0559090874"
            className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium text-sm hover:bg-white/20 transition-all duration-300">
            <Phone size={15} />
            <span dir="ltr">0559090874</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom floating stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        dir={isRtl ? "rtl" : "ltr"}
        style={{ fontFamily: "'Tajawal',sans-serif" }}
        className="relative z-10 mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-gray-100">
            {[
              { num: "٦", label: isRtl ? "أقسام متخصصة" : "Departments" },
              { num: "٥٠٠+", label: isRtl ? "عقار مُنجز" : "Properties" },
              {
                num: "١٠٠%",
                label: isRtl ? "التزام نظامي" : "Full Compliance",
              },
              {
                num: "٢٤/٧",
                label: isRtl ? "متابعة مستمرة" : "Ongoing Support",
              },
            ].map((s, i) => (
              <div key={i} className="py-5 px-6 text-center md:text-start">
                <div
                  className="font-black text-[#1d6b52]"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  {s.num}
                </div>
                <div className="text-[#6b7280] text-xs font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
