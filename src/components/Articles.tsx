"use client";
import Image from "next/image";
import { useState } from "react";
import { Mars } from "lucide-react"; // Ikonkani chaqiramiz
import OrderModal from "./OrderModal";

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Testosteronni tabiiy oshirish",
      description:
        "Erkaklik gormonini me'yorda saqlash uchun to'g'ri oziqlanish va kerakli minerallar (sink, selen) majmuasining ahamiyati.",
      imgSrc: "/health-1.png",
      category: "Gormonlar",
    },
    {
      title: "Quvvatni qanday tiklash mumkin?",
      description:
        "Surunkali charchoq va ish qobiliyatining pasayishi — organizmdagi muhim vitaminlar yetishmasligining birinchi belgisi.",
      imgSrc: "/energy-2.png",
      category: "Turmush tarzi",
    },
    {
      title: "Vitakompleks-11 siri",
      description:
        "Nega aynan 11 xil komponent? Urion formulasining boshqa oddiy BFQ (biologik faol qo'shimchalardan) asosiy farqlari haqida.",
      imgSrc: "/urion-box.png",
      category: "Ilmiy asos",
    },
  ];

  return (
    <section
      id="articles"
      className="w-full py-6 bg-[#FDFDFF] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA QISMI - UR♂N USLUBIDA */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="flex flex-col md:flex-row md:items-center text-[36px] md:text-[50px] font-[1000] leading-none tracking-tighter mb-6">
            <div className="flex items-center select-none justify-center md:justify-start">
              <span className="italic text-[#1A2B3C]">URI</span>
              <div className="flex items-center justify-center mx-[-1px] md:mx-[2px]">
                <Mars
                  strokeWidth={3}
                  className="w-9 h-9 md:w-[54px] md:h-[54px] text-[#4FC3F7] transform rotate-[10deg] translate-y-[-1px] md:translate-y-[-2px]"
                />
              </div>
              <span className="italic text-[#1A2B3C]">N</span>
            </div>

            <span className="text-[#1A2B3C] md:ml-6 mt-4 md:mt-0 not-italic font-[900] text-2xl md:text-[32px] uppercase tracking-tight">
              BILAN FOYDALI BILIMLAR
            </span>
          </h2>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[3px] w-14 bg-[#4FC3F7] rounded-full" />
            <p className="text-[#1A2B3C]/50 text-[12px] font-black uppercase tracking-[4px]">
              Blog va Maslahatlar
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[550px] bg-white rounded-[50px] overflow-hidden shadow-[0_15px_45px_rgba(26,43,60,0.05)] hover:shadow-[0_40px_80px_rgba(79,195,247,0.15)] transition-all duration-700 border border-slate-50"
            >
              {/* Rasm qismi (45%) */}
              <div className="relative h-[45%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-[#1A2B3C] text-[#4FC3F7] text-[10px] font-[1000] px-5 py-2.5 rounded-2xl uppercase tracking-[2px] shadow-2xl">
                    {article.category}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              {/* Matn qismi (55%) */}
              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1A2B3C] font-[1000] text-[24px] leading-[1.1] uppercase tracking-tighter mb-6 group-hover:text-[#4FC3F7] transition-colors duration-500">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-[15px] leading-relaxed font-bold opacity-80">
                    {article.description}
                  </p>
                </div>

                {/* Batafsil tugmasi (Vizual) */}
                <div className="mt-6 flex items-center gap-3 text-[#4FC3F7] font-black text-[11px] uppercase tracking-widest group-hover:gap-5 transition-all">
                  <span className="h-[2px] w-8 bg-[#4FC3F7] rounded-full" />
                  Batafsil o'qish
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HARAKATGA CHAQIRUV TUGMASI */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-20 py-6 bg-[#1A2B3C] text-white rounded-full font-[1000] text-[13px] uppercase tracking-[4px] overflow-hidden transition-all shadow-2xl shadow-blue-900/30 active:scale-95"
          >
            <span className="relative z-10">SOTIB OLISH VA TIKLANISH</span>
            {/* Hover Background Layer */}
            <div className="absolute inset-0 bg-[#4FC3F7] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            {/* Hover Text Color Adjustment is handled by Tailwind peer classes or simple hover:text */}
            <style jsx>{`
              button:hover span {
                color: #1a2b3c;
                transition: color 0.5s;
              }
            `}</style>
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
