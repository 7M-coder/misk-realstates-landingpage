import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Map,
  ShoppingCart,
  Handshake,
  Building,
  FileText,
  ChevronDown,
} from "lucide-react";

interface DepartmentsProps {
  lang: "ar" | "en";
}

const departments = {
  en: [
    {
      id: "01",
      icon: Monitor,
      title: "Digital Marketing",
      subtitle: "Digital Marketing Department",
      summary:
        "Building a powerful digital presence for properties and targeting potential clients with high precision.",
      services: [
        "Creating and managing digital advertising campaigns",
        "Marketing via social media platforms",
        "Professional property photography (photos – video – virtual tours)",
        "Writing real estate marketing content",
        "Managing listings on real estate platforms",
        "Analyzing data and improving campaign performance",
      ],
    },
    {
      id: "02",
      icon: Map,
      title: "Ground Marketing",
      subtitle: "Ground Marketing Department",
      summary:
        "Reinforcing real-world market presence and covering the field marketing side of real estate.",
      services: [
        "Direct marketing for properties and projects",
        "Installing and managing advertising boards",
        "Coordinating with owners and investors",
        "Distributing marketing materials",
        "Studying market movement and competitors",
        "Supporting field sales teams",
      ],
    },
    {
      id: "03",
      icon: ShoppingCart,
      title: "Sales & Acquisition",
      subtitle: "Sales & Acquisition Department",
      summary:
        "Specialized in managing and executing buy/sell transactions with high efficiency.",
      services: [
        "Selling residential and commercial properties",
        "Searching for investment opportunities",
        "Preparing real estate offers",
        "Negotiating between parties",
        "Following up on ownership and handover procedures",
        "Providing real estate investment consultations",
      ],
    },
    {
      id: "04",
      icon: Handshake,
      title: "Real Estate Brokerage",
      subtitle: "Brokerage Department",
      summary:
        "The professional link between property owners and clients in accordance with approved regulations.",
      services: [
        "Brokerage in buying and renting",
        "Matching offers with requests",
        "Negotiating and managing deals",
        "Documenting real estate operations",
        "Providing real estate consultations",
        "Ensuring compliance with regulatory procedures",
      ],
    },
    {
      id: "05",
      icon: Building,
      title: "Property Management",
      subtitle: "Property Management Department",
      summary:
        "Providing integrated property management that ensures stability and sustainable returns.",
      services: [
        "Managing residential and commercial properties",
        "Collecting rents and managing payments",
        "Supervising maintenance and operations",
        "Following up on tenant complaints",
        "Preparing periodic reports for owners",
        "Improving operational efficiency and increasing returns",
      ],
    },
    {
      id: "06",
      icon: FileText,
      title: "Ejar Contracts",
      subtitle: "Ejar Contracts Department",
      summary:
        "Specialized in organizing and documenting contracts through the Ejar platform.",
      services: [
        "Drafting and formulating rental contracts",
        "Documenting contracts via the Ejar platform",
        "Renewing and following up on contracts",
        "Editing contract data",
        "Providing regulatory consultations",
        "Ensuring all parties comply with contract terms",
      ],
    },
  ],
  ar: [
    {
      id: "01",
      icon: Monitor,
      title: "التسويق الرقمي",
      subtitle: "Digital Marketing Department",
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
      subtitle: "Ground Marketing Department",
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
      subtitle: "Sales & Acquisition Department",
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
      subtitle: "Brokerage Department",
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
      subtitle: "Property Management Department",
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
      subtitle: "Ejar Contracts Department",
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
  const [active, setActive] = useState<number | null>(null);
  const items = departments[lang];

  return (
    <section
      id="departments"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#f8f5ef] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
                {lang === "ar" ? "أقسامنا" : "Our Divisions"}
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-5xl md:text-6xl font-light text-[#0a0a0a] leading-tight">
              {lang === "ar"
                ? "أقسام الشركة وخدماتها"
                : "Departments & Services"}
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-sm max-w-xs leading-relaxed md:mb-2">
            {lang === "ar"
              ? "ستة أقسام متخصصة تغطي كل جوانب الخدمة العقارية"
              : "Six specialized divisions covering every aspect of real estate service"}
          </p>
        </div>

        {/* Departments accordion-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0a0a0a]/8">
          {items.map((dept, index) => {
            const Icon = dept.icon;
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                layout
                className="bg-[#f8f5ef] overflow-hidden">
                {/* Header row — always visible */}
                <button
                  onClick={() => setActive(isActive ? null : index)}
                  className="w-full text-start group">
                  <div
                    className={`flex items-center gap-6 p-8 transition-all duration-500 ${isActive ? "bg-[#0a0a0a]" : "hover:bg-white"}`}>
                    {/* Number */}
                    <span
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className={`text-4xl font-light shrink-0 transition-colors duration-300 ${isActive ? "text-[#c9a84c]" : "text-[#0a0a0a]/20"}`}>
                      {dept.id}
                    </span>

                    {/* Icon + Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className={`w-8 h-8 flex items-center justify-center transition-colors duration-300 ${isActive ? "text-[#c9a84c]" : "text-[#0a0a0a]/40 group-hover:text-[#c9a84c]"}`}>
                          <Icon size={18} />
                        </div>
                        <h3
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          className={`text-2xl font-light transition-colors duration-300 ${isActive ? "text-[#f8f5ef]" : "text-[#0a0a0a]"}`}>
                          {dept.title}
                        </h3>
                      </div>
                      <p
                        className={`text-xs tracking-[0.1em] transition-colors duration-300 ${isActive ? "text-[#c9a84c]/70" : "text-[#6b6b6b]"}`}>
                        {dept.subtitle}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-all duration-300 ${isActive ? "rotate-180 text-[#c9a84c]" : "text-[#0a0a0a]/30"}`}
                    />
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      <div className="bg-white px-8 pb-8 pt-6 border-t border-[#0a0a0a]/5">
                        <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 italic">
                          {dept.summary}
                        </p>
                        <div className="w-8 h-px bg-[#c9a84c] mb-5" />
                        <ul className="space-y-3">
                          {dept.services.map((service, i) => (
                            <motion.li
                              key={i}
                              initial={{
                                opacity: 0,
                                x: lang === "ar" ? 10 : -10,
                              }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="flex items-start gap-3 text-sm text-[#1a1a1a]">
                              <span className="w-1 h-1 rounded-full bg-[#c9a84c] mt-2 shrink-0" />
                              {service}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
