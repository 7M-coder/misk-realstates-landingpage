import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Map,
  ShoppingCart,
  Handshake,
  Building,
  FileText,
  Plus,
  Minus,
} from "lucide-react";

interface DepartmentsProps {
  lang: "ar" | "en";
}

const data = {
  en: [
    {
      id: "01",
      icon: Monitor,
      title: "Digital Marketing",
      sub: "Digital Marketing Dept.",
      summary:
        "Building a powerful digital presence for properties and targeting potential clients with high precision.",
      services: [
        "Creating & managing digital ad campaigns",
        "Marketing via social media platforms",
        "Professional photography (photos, video, virtual tours)",
        "Writing real estate marketing content",
        "Managing listings on real estate platforms",
        "Data analysis & campaign performance improvement",
      ],
    },
    {
      id: "02",
      icon: Map,
      title: "Ground Marketing",
      sub: "Ground Marketing Dept.",
      summary:
        "Reinforcing real-world market presence and covering the field marketing side of real estate.",
      services: [
        "Direct marketing for properties & projects",
        "Installing & managing advertising boards",
        "Coordinating with owners & investors",
        "Distributing marketing materials",
        "Studying market movement & competitors",
        "Supporting field sales teams",
      ],
    },
    {
      id: "03",
      icon: ShoppingCart,
      title: "Sales & Acquisition",
      sub: "Sales & Acquisition Dept.",
      summary:
        "Specialized in managing and executing buy/sell transactions with high efficiency.",
      services: [
        "Selling residential & commercial properties",
        "Searching for investment opportunities",
        "Preparing real estate offers",
        "Negotiating between parties",
        "Following up on ownership & handover procedures",
        "Providing real estate investment consultations",
      ],
    },
    {
      id: "04",
      icon: Handshake,
      title: "Real Estate Brokerage",
      sub: "Brokerage Dept.",
      summary:
        "The professional link between property owners and clients per approved regulations.",
      services: [
        "Brokerage in buying & renting",
        "Matching offers with requests",
        "Negotiating & managing deals",
        "Documenting real estate operations",
        "Providing real estate consultations",
        "Ensuring compliance with regulatory procedures",
      ],
    },
    {
      id: "05",
      icon: Building,
      title: "Property Management",
      sub: "Property Management Dept.",
      summary:
        "Integrated property management ensuring stability and sustainable returns.",
      services: [
        "Managing residential & commercial properties",
        "Collecting rents & managing payments",
        "Supervising maintenance & operations",
        "Following up on tenant complaints",
        "Preparing periodic reports for owners",
        "Improving operational efficiency & returns",
      ],
    },
    {
      id: "06",
      icon: FileText,
      title: "Ejar Contracts",
      sub: "Ejar Contracts Dept.",
      summary:
        "Specialized in organizing and documenting contracts through the Ejar platform.",
      services: [
        "Drafting & formulating rental contracts",
        "Documenting contracts via Ejar platform",
        "Renewing & following up on contracts",
        "Editing contract data",
        "Providing regulatory consultations",
        "Ensuring parties comply with contract terms",
      ],
    },
  ],
  ar: [
    {
      id: "01",
      icon: Monitor,
      title: "التسويق الرقمي",
      sub: "قسم التسويق الرقمي",
      summary:
        "بناء حضور رقمي قوي للعقارات واستهداف العملاء المحتملين بدقة عالية.",
      services: [
        "إعداد وإدارة الحملات الإعلانية الرقمية",
        "التسويق عبر منصات التواصل الاجتماعي",
        "تصوير احترافي للعقارات (صور – فيديو – جولات افتراضية)",
        "كتابة المحتوى العقاري التسويقي",
        "إدارة الإعلانات في المنصات العقارية",
        "تحليل البيانات وتحسين أداء الحملات",
      ],
    },
    {
      id: "02",
      icon: Map,
      title: "التسويق الميداني",
      sub: "قسم التسويق الميداني",
      summary:
        "يعزز التواجد الواقعي في السوق ويغطي الجانب الميداني للتسويق العقاري.",
      services: [
        "التسويق المباشر للعقارات والمشاريع",
        "تركيب وإدارة اللوحات الإعلانية",
        "التنسيق مع الملاك والمستثمرين",
        "توزيع المواد التسويقية",
        "دراسة حركة السوق والمنافسين",
        "دعم فرق البيع ميدانياً",
      ],
    },
    {
      id: "03",
      icon: ShoppingCart,
      title: "البيع والشراء",
      sub: "قسم البيع والشراء",
      summary: "مختص بإدارة وتنفيذ صفقات البيع والشراء بكفاءة عالية.",
      services: [
        "بيع العقارات السكنية والتجارية",
        "البحث عن الفرص الاستثمارية",
        "إعداد العروض العقارية",
        "التفاوض بين الأطراف",
        "متابعة إجراءات التملك والإفراغ",
        "تقديم استشارات استثمارية عقارية",
      ],
    },
    {
      id: "04",
      icon: Handshake,
      title: "الوساطة العقارية",
      sub: "قسم الوساطة العقارية",
      summary:
        "حلقة الوصل الاحترافية بين الملاك والعملاء وفق الأنظمة المعتمدة.",
      services: [
        "الوساطة في البيع والتأجير",
        "مطابقة العروض مع الطلبات",
        "التفاوض وإدارة الصفقات",
        "توثيق العمليات العقارية",
        "تقديم الاستشارات العقارية",
        "ضمان سلامة الإجراءات النظامية",
      ],
    },
    {
      id: "05",
      icon: Building,
      title: "إدارة الأملاك",
      sub: "قسم إدارة الأملاك",
      summary: "يقدم إدارة متكاملة للعقارات تضمن الاستقرار والعائد المستدام.",
      services: [
        "إدارة العقارات السكنية والتجارية",
        "تحصيل الإيجارات وإدارة السداد",
        "الإشراف على الصيانة والتشغيل",
        "متابعة شكاوى المستأجرين",
        "إعداد تقارير دورية للملاك",
        "تحسين كفاءة التشغيل وزيادة العائد",
      ],
    },
    {
      id: "06",
      icon: FileText,
      title: "عقود الإيجار",
      sub: "قسم عقود الإيجار",
      summary: "مختص بتنظيم وتوثيق العقود عبر منصة إيجار.",
      services: [
        "إعداد وصياغة عقود الإيجار",
        "توثيق العقود عبر منصة إيجار",
        "تجديد العقود ومتابعتها",
        "تعديل بيانات العقود",
        "تقديم الاستشارات النظامية",
        "ضمان التزام الأطراف ببنود العقد",
      ],
    },
  ],
};

export default function Departments({ lang }: DepartmentsProps) {
  const [active, setActive] = useState<number | null>(0);
  const items = data[lang];
  const isRtl = lang === "ar";

  return (
    <section
      id="departments"
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal',sans-serif" }}
      className="bg-[#f8f6f2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <h2
            className="font-black text-[#111] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            {isRtl ? "أقسام الشركة وخدماتها" : "Departments & Services"}
          </h2>
        </div>

        {/* Two-column layout: accordion list + detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: accordion list */}
          <div className="lg:col-span-2 space-y-2">
            {items.map((dept, i) => {
              const Icon = dept.icon;
              const isOpen = active === i;
              return (
                <div
                  key={i}
                  className="bg-white overflow-hidden border border-gray-100">
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className={`w-full flex items-center gap-4 px-5 py-4 transition-colors duration-300 text-start ${
                      isOpen ? "bg-[#1d6b52]" : "hover:bg-gray-50"
                    }`}>
                    <span
                      className={`text-xs font-black w-6 shrink-0 ${isOpen ? "text-[#c9a449]" : "text-gray-300"}`}>
                      {dept.id}
                    </span>
                    <div
                      className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-[#c9a449]/20" : "bg-[#1d6b52]/8"
                      }`}>
                      <Icon
                        size={15}
                        className={isOpen ? "text-[#c9a449]" : "text-[#1d6b52]"}
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-start">
                      <div
                        className={`font-bold text-sm transition-colors duration-300 ${isOpen ? "text-white" : "text-[#111]"}`}>
                        {dept.title}
                      </div>
                      <div
                        className={`text-xs mt-0.5 transition-colors duration-300 ${isOpen ? "text-white/50" : "text-gray-400"}`}>
                        {dept.sub}
                      </div>
                    </div>
                    {isOpen ? (
                      <Minus size={14} className="text-[#c9a449] shrink-0" />
                    ) : (
                      <Plus size={14} className="text-gray-300 shrink-0" />
                    )}
                  </button>

                  {/* Mobile: inline expand */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden lg:hidden">
                        <div className="px-5 py-4 border-t border-gray-100">
                          <p className="text-[#555] text-xs leading-relaxed mb-3 italic">
                            {dept.summary}
                          </p>
                          <ul className="space-y-2">
                            {dept.services.map((s, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-xs text-[#333]">
                                <span className="w-1 h-1 rounded-full bg-[#c9a449] mt-1.5 shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: detail panel — desktop only */}
          <div className="hidden lg:block lg:col-span-3">
            <AnimatePresence mode="wait">
              {active !== null && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white h-full p-8 border border-gray-100">
                  {(() => {
                    const dept = items[active];
                    const Icon = dept.icon;
                    return (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-[#1d6b52] flex items-center justify-center">
                            <Icon size={22} className="text-[#c9a449]" />
                          </div>
                          <div>
                            <h3 className="font-black text-xl text-[#111]">
                              {dept.title}
                            </h3>
                            <p className="text-xs text-[#888]">{dept.sub}</p>
                          </div>
                        </div>

                        <div className="w-10 h-0.5 bg-[#c9a449] mb-5" />

                        <p className="text-[#555] text-sm leading-loose mb-8">
                          {dept.summary}
                        </p>

                        <h4 className="text-xs font-black text-[#111] tracking-widest uppercase mb-4">
                          {isRtl ? "الخدمات" : "Services"}
                        </h4>

                        <div className="grid grid-cols-1 gap-2.5">
                          {dept.services.map((s, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: isRtl ? -10 : 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.06 }}
                              className="flex items-center gap-3 py-2.5 px-3 bg-[#f8f6f2] border-r-2 border-[#1d6b52] group hover:bg-[#1d6b52]/5 transition-colors">
                              <span className="text-[#c9a449] font-black text-xs w-5 shrink-0">
                                {String(j + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[#333] text-sm">{s}</span>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
