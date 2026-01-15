"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Urion vitakompleksi qanday natija beradi?",
    answer: "Urion tarkibidagi 11 xil faol komponent erkaklik quvvatini oshiradi, qon aylanishini yaxshilaydi va jismoniy chidamlilikni tiklashga yordam beradi.",
  },
  {
    question: "Kuniga necha marta qabul qilish kerak?",
    answer: "Introda ta'kidlanganidek, Urion juda samarali formula bo'lgani uchun kuniga atigi 1 ta kapsula qabul qilish kifoya. Kursni 30 kun davom ettirish tavsiya etiladi.",
  },
  {
    question: "Mahsulot tarkibi xavfsizmi?",
    answer: "Ha, mahsulot GMP standartlari asosida sertifikatlangan va tarkibi to'liq tabiiy o'simlik ekstraktlaridan iborat. Nojo'ya ta'sirlari kuzatilmagan.",
  },
  {
    question: "Natija qachon sezila boshlaydi?",
    answer: "Dastlabki quvvat oshishi 3-5 kunlik muntazam qabuldan keyin seziladi. To'liq tiklanish va barqaror natija kurs oxirida (1 oydan keyin) yuzaga keladi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#4FC3F7"; // Urion Moviy rangi
  const darkColor = "#1A2B3C";    // Urion To'q ko'k rangi

  return (
    <section className="w-full py-16 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - Urion ranglarida */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Savollar ro'yxati */}
        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group transition-all"
              >
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-[#4FC3F7]' : 'text-[#1A2B3C]'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#94a3b8" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}