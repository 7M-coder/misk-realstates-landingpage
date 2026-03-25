import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

interface AboutProps {
  content: any;
  lang: "ar" | "en";
}

export default function About({ content, lang }: AboutProps) {
  const isRtl = lang === "ar";

  return (
    <section
      id="about"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="bg-white">
      {/* ── Part 1: Main intro ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative">
            {/* Main photo */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="About Misk"
              className="w-full h-[500px] object-cover"
            />
            {/* Gold top-left corner bracket */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-[#c9a449]" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-[#1d6b52]" />

          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}>
            <h2
              className="font-black text-[#111] leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              {content.about.title}
            </h2>

            <p className="text-[#555] leading-loose text-base font-light mb-8">
              {content.about.description}
            </p>

          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Vision & Mission — full-width teal stripe ── */}
      <div className="bg-[#1d6b52]">
        <div
          className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/15"
          dir={isRtl ? "rtl" : "ltr"}>
          {[
            {
              icon: Eye,
              title: content.about.visionTitle,
              text: content.about.vision,
            },
            {
              icon: Target,
              title: content.about.missionTitle,
              text: content.about.mission,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="px-0 md:px-10 first:pb-10 md:first:pb-0 last:pt-10 md:last:pt-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c9a449]/20 flex items-center justify-center">
                  <card.icon size={20} className="text-[#c9a449]" />
                </div>
                <h3 className="text-white font-bold text-xl">{card.title}</h3>
              </div>
              <div className="w-10 h-0.5 bg-[#c9a449] mb-4" />
              <p className="text-white/65 leading-loose text-sm font-light">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Part 3: Values — card grid ── */}
      <div className="bg-[#f8f6f2]">
        <div
          className="max-w-7xl mx-auto px-6 md:px-12 py-20"
          dir={isRtl ? "rtl" : "ltr"}>
          <div className="text-center mb-12">
            <span className="w-8 h-0.5 bg-[#c9a449] inline-block mb-3" />
            <h3 className="text-2xl font-black text-[#111]">
              {content.values.title}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {content.values.items.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white p-6 text-center border border-gray-100 hover:border-[#1d6b52] hover:shadow-lg hover:shadow-[#1d6b52]/5 transition-all duration-400 cursor-default">
                <div className="w-8 h-8 bg-[#1d6b52] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c9a449] transition-colors duration-400">
                  <span className="text-white font-black text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-bold text-[#111] text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-[#888] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
