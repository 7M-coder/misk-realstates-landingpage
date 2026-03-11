import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  lang: "ar" | "en";
  content: any;
}

export default function Navbar({ lang, content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, href: "#home" },
    { name: content.nav.about, href: "#about" },
    { name: content.nav.services, href: "#services" },
    { name: content.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#f8f5ef] text-2xl font-light tracking-[0.15em] uppercase group-hover:text-[#c9a84c] transition-colors duration-500">
            Misk
          </span>
          <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-light mt-[-2px]">
            Estate Group
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[#f8f5ef]/70 hover:text-[#c9a84c] text-sm tracking-[0.12em] uppercase font-light transition-colors duration-300 group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
            </a>
          ))}

          <a
            href={lang === "ar" ? "/en" : "/"}
            className="px-5 py-2 border border-[#c9a84c]/60 text-[#c9a84c] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300 font-medium">
            {content.nav.lang}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#f8f5ef] hover:text-[#c9a84c] transition-colors"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#f8f5ef]/70 hover:text-[#c9a84c] text-sm tracking-[0.15em] uppercase transition-colors"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a
                href={lang === "ar" ? "/en" : "/"}
                className="px-6 py-2 border border-[#c9a84c]/60 text-[#c9a84c] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all">
                {content.nav.lang}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
