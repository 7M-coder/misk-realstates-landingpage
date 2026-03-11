import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";

interface AboutProps {
  content: any;
  lang: "ar" | "en";
}

export default function About({ content, lang }: AboutProps) {
  return (
    <section
      id="about"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#f8f5ef] text-[#0a0a0a]">
      {/* Main About */}
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#c9a84c]/30 z-0" />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
              alt="About Us"
              className="relative z-10 w-full h-[520px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#0a0a0a] text-[#f8f5ef] p-6 w-36">
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl text-[#c9a84c] font-light">
                15+
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-[#f8f5ef]/60 mt-1">
                Years of Trust
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
                Who We Are
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-6xl font-light text-[#0a0a0a] mb-8 leading-tight">
              {content.about.title}
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mb-8" />
            <p className="text-[#6b6b6b] text-lg leading-relaxed font-light">
              {content.about.description}
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-24 border border-[#0a0a0a]/10">
          {[
            {
              icon: Eye,
              title: content.about.visionTitle,
              text: content.about.vision,
              accent: "#c9a84c",
            },
            {
              icon: Target,
              title: content.about.missionTitle,
              text: content.about.mission,
              accent: "#0a0a0a",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-10 group hover:bg-[#0a0a0a] transition-all duration-700">
              <card.icon
                size={28}
                className="text-[#c9a84c] mb-6 group-hover:text-[#c9a84c]"
              />
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl font-light text-[#0a0a0a] group-hover:text-[#f8f5ef] mb-4 transition-colors duration-500">
                {card.title}
              </h3>
              <div className="w-8 h-px bg-[#c9a84c] mb-4" />
              <p className="text-[#6b6b6b] group-hover:text-[#f8f5ef]/60 leading-relaxed transition-colors duration-500">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl font-light text-[#0a0a0a]">
                {content.values.title}
              </h3>
              <div className="w-12 h-px bg-[#c9a84c]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {content.values.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group border border-[#0a0a0a]/10 p-6 text-center hover:border-[#c9a84c] hover:bg-white transition-all duration-500 cursor-default">
                <div className="w-8 h-px bg-[#c9a84c]/40 mx-auto mb-4 group-hover:w-14 group-hover:bg-[#c9a84c] transition-all duration-500" />
                <h4 className="font-medium text-[#0a0a0a] mb-2 text-sm tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
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
