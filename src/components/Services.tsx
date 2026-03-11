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

// Rich Unsplash images per service type
const serviceImages = [
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", // digital
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80", // field
  "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80", // sales
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", // brokerage
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // management
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", // contracts
];

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
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[#c9a449]" />
              <span className="text-[#c9a449] text-xs font-bold tracking-widest uppercase">
                {isRtl ? "خدماتنا" : "Our Services"}
              </span>
            </div>
            <h2
              className="font-black text-[#111] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              {content.services.title}
            </h2>
          </div>
          <a
            href="#departments"
            className="shrink-0 flex items-center gap-2 text-sm font-bold text-[#1d6b52] border-b-2 border-[#c9a449] pb-0.5 hover:text-[#144d3c] transition-colors self-start md:self-auto">
            {isRtl ? "تفاصيل الأقسام" : "View Departments"}
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Cards grid — image cards with hover overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.items.map((item: any, i: number) => {
            const Icon = icons[item.icon] || Building;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative h-64 overflow-hidden cursor-default">
                {/* Background image */}
                <img
                  src={serviceImages[i] || serviceImages[0]}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Default overlay: dark gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay: solid teal */}
                <div className="absolute inset-0 bg-[#1d6b52] opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Icon — top */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-[#c9a449] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <Icon size={16} className="text-white" />
                </div>

                {/* Default state: title at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-0 group-hover:translate-y-[-100%] transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>

                {/* Hover state: full content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#c9a449] mb-3" />
                  <p className="text-white/75 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Number watermark */}
                <span className="absolute bottom-3 left-4 text-6xl font-black text-white/[0.06] select-none group-hover:text-white/[0.08] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
