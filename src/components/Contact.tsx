import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Twitter } from "lucide-react";

interface ContactProps {
  content: any;
  lang: "ar" | "en";
}

export default function Contact({ content, lang }: ContactProps) {
  const isRtl = lang === "ar";

  return (
    <section
      id="contact"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#c9a449]" />
            <span className="text-[#c9a449] text-xs font-bold tracking-widest uppercase">
              {isRtl ? "تواصل معنا" : "Get In Touch"}
            </span>
          </div>
          <h2
            className="font-black text-[#111] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            {content.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: teal info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#1d6b52] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                {isRtl ? "معلومات التواصل" : "Contact Information"}
              </h3>
              <p className="text-white/55 text-sm leading-loose mb-10 font-light">
                {isRtl
                  ? "نحن هنا للإجابة على جميع استفساراتك. تواصل معنا اليوم للحصول على استشارة مجانية."
                  : "We're here to answer your inquiries. Contact us today for a free consultation."}
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: isRtl ? "الهاتف" : "Phone",
                    val: content.contact.phone,
                    dir: "ltr",
                  },
                  {
                    icon: Mail,
                    label: isRtl ? "البريد" : "Email",
                    val: content.contact.email,
                  },
                  {
                    icon: MapPin,
                    label: isRtl ? "العنوان" : "Address",
                    val: content.contact.address,
                  },
                ].map(({ icon: Icon, label, val, dir: d }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#c9a449]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p
                        className="text-white text-sm font-medium"
                        dir={d as any}>
                        {val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social + handle */}
            <div className="mt-10 pt-8 border-t border-white/15">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                {isRtl ? "تابعنا على" : "Follow Us"}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/miskestate"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#c9a449] flex items-center justify-center transition-colors duration-300">
                  <Instagram size={15} className="text-white" />
                </a>
                <a
                  href="https://twitter.com/miskestate"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#c9a449] flex items-center justify-center transition-colors duration-300">
                  <Twitter size={15} className="text-white" />
                </a>
                <span className="text-white/50 text-sm mr-1">@miskestate</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wide mb-2">
                    {content.contact.name}
                  </label>
                  <input
                    type="text"
                    placeholder={isRtl ? "اسمك الكريم" : "Your full name"}
                    className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 focus:border-[#1d6b52] focus:outline-none text-sm text-[#111] placeholder-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wide mb-2">
                    {content.contact.email}
                  </label>
                  <input
                    type="email"
                    placeholder={
                      isRtl ? "بريدك الإلكتروني" : "Your email address"
                    }
                    className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 focus:border-[#1d6b52] focus:outline-none text-sm text-[#111] placeholder-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333] uppercase tracking-wide mb-2">
                  {isRtl ? "رقم الجوال" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  placeholder="05XXXXXXXX"
                  className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 focus:border-[#1d6b52] focus:outline-none text-sm text-[#111] placeholder-gray-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333] uppercase tracking-wide mb-2">
                  {content.contact.message}
                </label>
                <textarea
                  rows={4}
                  placeholder={
                    isRtl
                      ? "تفاصيل طلبك أو استفسارك..."
                      : "Tell us about your inquiry..."
                  }
                  className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 focus:border-[#1d6b52] focus:outline-none text-sm text-[#111] placeholder-gray-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 py-4 bg-[#1d6b52] text-white font-bold text-sm hover:bg-[#144d3c] transition-colors duration-300 shadow-lg shadow-[#1d6b52]/20">
                <Send
                  size={15}
                  className="group-hover:translate-x-[-2px] transition-transform"
                />
                {content.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-[#111] py-5">
        <div
          className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-center"
          dir={isRtl ? "rtl" : "ltr"}>
          <span className="text-white/30 text-xs">
            © {new Date().getFullYear()} مجموعة مسك للخدمات العقارية
          </span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#1d6b52]" />
            <span className="w-2 h-2 bg-[#c9a449]" />
            <span className="w-2 h-2 bg-[#1d6b52]" />
          </div>
          <span className="text-white/30 text-xs" dir="ltr">
            Misk Real Estate Services Group
          </span>
        </div>
      </div>
    </section>
  );
}
