import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, Star, Lock, Award } from "lucide-react";

interface FeaturesProps {
  content: any;
  lang: "ar" | "en";
}
const icons = [Users, Zap, ShieldCheck, Star, Lock, Award];

export default function Features({ content, lang }: FeaturesProps) {
  const isRtl = lang === "ar";
  return (
    <section
      id="features"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header + subtitle in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[#c9a449]" />
              <span className="text-[#c9a449] text-xs font-bold tracking-widest uppercase">
                {isRtl ? "لماذا تختارنا" : "Why Choose Us"}
              </span>
            </div>
            <h2
              className="font-black text-[#111] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              {content.advantages.title}
            </h2>
          </div>
          <p className="text-[#666] text-sm leading-loose font-light md:text-end">
            {isRtl
              ? "نقدم خدمات عقارية متكاملة بمعايير احترافية عالية تضمن لكم أفضل النتائج"
              : "We deliver integrated real estate services with high professional standards to ensure you get the best results"}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {content.advantages.items.map((item: string, i: number) => {
            const Icon = icons[i] || Star;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white p-8 hover:bg-[#1d6b52] transition-all duration-500 cursor-default">
                <div className="w-12 h-12 bg-[#1d6b52]/8 flex items-center justify-center mb-5 group-hover:bg-[#c9a449] transition-colors duration-500">
                  <Icon
                    size={20}
                    className="text-[#1d6b52] group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <p className="text-[#333] font-semibold text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
