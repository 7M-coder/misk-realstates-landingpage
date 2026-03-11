import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface ContactProps {
  content: any;
  lang: "ar" | "en";
}

export default function Contact({ content, lang }: ContactProps) {
  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#0a0a0a] py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left / Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
                Get In Touch
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-6xl font-light text-[#f8f5ef] mb-8 leading-tight">
              {content.contact.title}
            </h2>

            <div className="w-12 h-px bg-[#c9a84c] mb-10" />

            <p className="text-[#f8f5ef]/40 leading-relaxed mb-14 text-sm">
              {lang === "ar"
                ? "نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم لتحصل على استشارة مجانية."
                : "We are here to answer all your inquiries. Contact us today for a complimentary consultation."}
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  label: lang === "ar" ? "الهاتف" : "Phone",
                  value: content.contact.phone,
                  dir: "ltr",
                },
                {
                  icon: Mail,
                  label: lang === "ar" ? "البريد الإلكتروني" : "Email",
                  value: content.contact.email,
                },
                {
                  icon: MapPin,
                  label: lang === "ar" ? "العنوان" : "Address",
                  value: content.contact.address,
                },
              ].map(({ icon: Icon, label, value, dir }) => (
                <div key={label} className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#0a0a0a] transition-all duration-400 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[#f8f5ef]/30 text-xs tracking-[0.15em] uppercase mb-1">
                      {label}
                    </p>
                    <p className="text-[#f8f5ef] text-sm" dir={dir as any}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right / Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 border border-white/8 p-10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[#f8f5ef]/40 text-xs tracking-[0.2em] uppercase mb-3">
                    {content.contact.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#c9a84c] outline-none text-[#f8f5ef] transition-colors duration-300 placeholder-white/20 text-sm"
                    placeholder={lang === "ar" ? "اسمك الكريم" : "Your name"}
                  />
                </div>
                <div className="group">
                  <label className="block text-[#f8f5ef]/40 text-xs tracking-[0.2em] uppercase mb-3">
                    {content.contact.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#c9a84c] outline-none text-[#f8f5ef] transition-colors duration-300 placeholder-white/20 text-sm"
                    placeholder={
                      lang === "ar" ? "بريدك الإلكتروني" : "Your email"
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#f8f5ef]/40 text-xs tracking-[0.2em] uppercase mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#c9a84c] outline-none text-[#f8f5ef] transition-colors duration-300 placeholder-white/20 text-sm"
                  placeholder={
                    lang === "ar" ? "موضوع الرسالة" : "Property inquiry"
                  }
                />
              </div>

              <div>
                <label className="block text-[#f8f5ef]/40 text-xs tracking-[0.2em] uppercase mb-3">
                  {content.contact.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-[#c9a84c] outline-none text-[#f8f5ef] transition-colors duration-300 placeholder-white/20 text-sm resize-none"
                  placeholder={
                    lang === "ar"
                      ? "أخبرنا عن متطلباتك"
                      : "Tell us about your requirements..."
                  }
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#f8f5ef] transition-all duration-400">
                {content.contact.send}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#f8f5ef]/20 text-sm tracking-wider">
            Misk Estate Group © {new Date().getFullYear()}
          </span>
          <div className="flex gap-1">
            {["#c9a84c", "#c9a84c80", "#c9a84c30"].map((c, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
