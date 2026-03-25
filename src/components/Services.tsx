import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Map,
  ShoppingCart,
  Handshake,
  Building,
  FileText,
  ArrowUpRight,
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
  const isRtl = lang === "ar";

  return (
    <section
      id="services"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="font-black text-[#111] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            {content.services.title}
          </h2>
          <a
            href="#departments"
            className="shrink-0 flex items-center gap-2 text-sm font-bold text-[#1d6b52] border-b-2 border-[#c9a449] pb-0.5 hover:text-[#144d3c] transition-colors self-start md:self-auto">
            {isRtl ? "تفاصيل الأقسام" : "View Departments"}
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Cards grid — clean icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {content.services.items.map((item: any, i: number) => {
            const Icon = icons[item.icon] || Building;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white p-8 hover:bg-[#1d6b52] transition-all duration-500 cursor-default">
                {/* Icon + number row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#1d6b52]/8 flex items-center justify-center group-hover:bg-[#c9a449] transition-colors duration-500">
                    <Icon
                      size={22}
                      className="text-[#1d6b52] group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-500 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Title */}
                <h3 className="font-bold text-[#111] text-base mb-2 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                {/* Divider */}
                <div className="w-7 h-0.5 bg-[#c9a449] mb-3" />
                {/* Description */}
                <p className="text-[#777] text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
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
