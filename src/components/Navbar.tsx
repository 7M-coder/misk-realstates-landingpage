import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  lang: "ar" | "en";
  content: any;
}

export default function Navbar({ lang, content }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.services, href: "#services" },
    { label: lang === "ar" ? "أقسامنا" : "Departments", href: "#departments" },
    { label: content.nav.contact, href: "#contact" },
  ];

  const isRtl = lang === "ar";

  return (
    <>
      <nav
        dir={isRtl ? "rtl" : "ltr"}
        style={{ fontFamily: "'Tajawal',sans-serif", transition: "all 0.4s" }}
        className={`fixed top-0 inset-x-0 z-50 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="shrink-0 flex items-center gap-2">
            <div
              className={`font-black text-xl leading-none transition-colors duration-400 ${scrolled ? "text-[#1d6b52]" : "text-white"}`}
              style={{ fontFamily: "'Tajawal',sans-serif" }}>
              مسك
            </div>
            <div
              className={`hidden md:flex flex-col leading-none transition-colors duration-400 ${scrolled ? "text-[#111]" : "text-white/70"}`}>
              <span className="text-[10px] font-light tracking-wider">
                للخدمات العقارية
              </span>
            </div>
          </a>

          {/* Desktop Links — centered */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  scrolled
                    ? "text-[#333] hover:text-[#1d6b52]"
                    : "text-white/80 hover:text-white"
                }`}>
                {l.label}
                <span className="absolute -bottom-0.5 inset-x-0 h-0.5 bg-[#c9a449] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>

          {/* Right: Lang + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={isRtl ? "/en" : "/"}
              className={`text-xs font-medium px-4 py-2 border transition-all duration-300 ${
                scrolled
                  ? "border-[#1d6b52]/40 text-[#1d6b52] hover:bg-[#1d6b52] hover:text-white"
                  : "border-white/40 text-white hover:bg-white/10"
              }`}>
              {content.nav.lang}
            </a>
            <a
              href="#contact"
              className="text-xs font-bold px-5 py-2.5 bg-[#c9a449] text-white hover:bg-[#b8932f] transition-colors duration-300">
              {isRtl ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden transition-colors ${scrolled ? "text-[#1d6b52]" : "text-white"}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            dir={isRtl ? "rtl" : "ltr"}
            style={{ fontFamily: "'Tajawal',sans-serif" }}
            className="fixed top-16 inset-x-0 z-40 bg-white shadow-xl border-t border-gray-100">
            <div className="flex flex-col divide-y divide-gray-50">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-sm font-medium text-[#333] hover:text-[#1d6b52] hover:bg-gray-50 transition-colors">
                  {l.label}
                </a>
              ))}
              <div className="p-4 flex gap-3">
                <a
                  href={isRtl ? "/en" : "/"}
                  className="flex-1 text-center py-2.5 border border-[#1d6b52] text-[#1d6b52] text-sm font-medium">
                  {content.nav.lang}
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center py-2.5 bg-[#c9a449] text-white text-sm font-bold">
                  {isRtl ? "تواصل" : "Contact"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
