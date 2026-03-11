import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Map,
  ShoppingCart,
  Handshake,
  Building,
  FileText,
} from "lucide-react";

interface ServicesProps {
  content: any;
  lang: "ar" | "en";
}

const icons: Record<string, any> = {
  Monitor,
  Map,
  ShoppingCart,
  Handshake,
  Building,
  FileText,
};

export default function Services({ content, lang }: ServicesProps) {
  return (
    <section
      id="services"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#0f0f0f] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-6xl font-light text-[#f8f5ef] leading-tight">
              {content.services.title}
            </h2>
          </div>
          <div className="w-24 h-px bg-[#c9a84c]/30 hidden md:block mb-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {content.services.items.map((item: any, index: number) => {
            const IconComponent = icons[item.icon] || Building;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="bg-[#0f0f0f] p-10 group hover:bg-[#161616] transition-all duration-500 relative overflow-hidden">
                {/* Number */}
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="absolute top-6 right-8 text-6xl text-white/[0.04] font-light select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] mb-8 group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-500">
                  <IconComponent size={22} />
                </div>

                {/* Content */}
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-2xl font-light text-[#f8f5ef] mb-4 group-hover:text-[#c9a84c] transition-colors duration-500">
                  {item.title}
                </h3>

                <div className="w-8 h-px bg-[#c9a84c]/40 mb-4 group-hover:w-16 group-hover:bg-[#c9a84c] transition-all duration-500" />

                <p className="text-[#f8f5ef]/40 text-sm leading-relaxed group-hover:text-[#f8f5ef]/60 transition-colors duration-500">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
