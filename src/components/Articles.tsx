"use client";
import Image from "next/image";
import { useState } from "react";
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
        "Nega aynan 11 xil komponent? Urion formulasining boshqa oddiy BFQ (biologik faol qo'shimcha)lardan asosiy farqlari haqida.",
      imgSrc: "/urion-box.png",
      category: "Ilmiy asos",
    },
  ];

  return (
    <section id="articles" className="w-full py-6 bg-[#FDFDFF]">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[36px] md:text-[52px] font-black italic mb-3 tracking-tighter leading-none">
            <span className="text-[#1A2B3C] flex items-center justify-center md:justify-start gap-2">
              URi
              <span className="text-[#4FC3F7] not-italic translate-y-[-2px]">
                ♂
              </span>
              N
            </span>
            <span className="text-[#1A2B3C] not-italic text-2xl md:text-4xl block mt-2">
              BILAN FOYDALI BILIMLAR
            </span>
          </h2>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[3px] w-14 bg-[#4FC3F7] rounded-full" />
            <p className="text-[#1A2B3C] text-[12px] font-black uppercase tracking-[3px] opacity-60">
              Blog va Maslahatlar
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[520px] bg-white rounded-[45px] overflow-hidden shadow-[0_10px_40px_rgba(26,43,60,0.05)] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-slate-100"
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
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#1A2B3C] text-[#4FC3F7] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl">
                    {article.category}
                  </span>
                </div>
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Matn qismi (55%) */}
              <div className="flex-1 p-8 md:p-10 flex flex-col">
                <h3 className="text-[#1A2B3C] font-black text-[22px] leading-tight uppercase tracking-tight mb-5 group-hover:text-[#4FC3F7] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {article.description}
                </p>

                <div className="mt-auto">
                  <span className="text-[#4FC3F7] text-[11px] font-black uppercase tracking-widest border-b-2 border-[#4FC3F7]/30 pb-1 cursor-pointer hover:border-[#4FC3F7] transition-all">
                    Batafsil o'qish
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HARAKATGA CHAQIRUV TUGMASI */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-16 py-5 bg-[#1A2B3C] text-white rounded-full font-black text-[12px] uppercase tracking-[4px] hover:bg-[#4FC3F7] hover:text-[#1A2B3C] transition-all shadow-2xl shadow-blue-900/20 active:scale-95"
          >
            SOTIB OLISH VA TIKLANISH
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
