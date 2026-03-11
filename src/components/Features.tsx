import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Users, Lock } from "lucide-react";

interface FeaturesProps {
  content: any;
  lang: "ar" | "en";
}

const icons = [Users, Zap, ShieldCheck, Star, Lock];

export default function Features({ content, lang }: FeaturesProps) {
  return (
    <section
      id="features"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#f8f5ef] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
              Why Choose Us
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl font-light text-[#0a0a0a]">
            {content.advantages.title}
          </h2>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.advantages.items.map((item: string, index: number) => {
            const Icon = icons[index] || Star;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex items-start gap-5 p-8 bg-white border border-transparent hover:border-[#c9a84c]/40 transition-all duration-500">
                <div className="w-10 h-10 bg-[#0a0a0a] flex items-center justify-center text-[#c9a84c] shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-500">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[#0a0a0a] font-medium leading-relaxed text-sm">
                    {item}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
