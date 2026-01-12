"use client";
import React from "react";
import { Mars } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "ERKAKLIK QUVVATI",
      desc: "Testosteron darajasini tabiiy qo'llab-quvvatlash va erkaklik energiyasini qayta tiklashga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#4FC3F7]"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "CHIDAMLILIK VA ENERGIYA",
      desc: "Ishdagi va shaxsiy hayotdagi faollikni oshiradi, jismoniy charchoqni kamaytirib, organizmni tonusda saqlaydi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A2B3C]"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "100% TABIIY TARKIB",
      desc: "Hech qanday zararli kimyoviy qo'shimchalarsiz. 11 xil o'simlik ekstraktlari va vitaminlar majmuasi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#4FC3F7]"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* AFZALLIKLAR KARTALARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-[45px] p-10 shadow-[0_15px_40px_rgba(26,43,60,0.05)] border border-slate-100 hover:border-[#4FC3F7]/30 transition-all duration-300 group"
            >
              <div className="mb-8 group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-[#1A2B3C] font-[1000] text-[14px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGOTIP QISMI */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="flex items-center select-none">
            <span className="text-5xl md:text-[95px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
              URI
            </span>
            <div className="flex items-center justify-center mx-1 md:mx-2">
              <Mars
                strokeWidth={4}
                className="w-12 h-12 md:w-[100px] md:h-[100px] text-[#4FC3F7] rotate-[10deg] -translate-y-1 md:-translate-y-2"
              />
            </div>
            <span className="text-5xl md:text-[95px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
              N
            </span>
          </div>

          <div className="h-[4px] w-32 bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent rounded-full" />

          <p className="text-[#1A2B3C]/40 font-black tracking-[8px] uppercase text-[10px] md:text-[14px] mt-4">
            ERKAKLAR SALOMATLIGI KOMPLEKSI
          </p>
        </div>

        {/* STATIK KAPSULALAR (ANIMATSIYASIZ) */}
        <div className="relative h-20 flex justify-center items-center gap-12 opacity-60">
          <div className="w-12 h-6 bg-[#1A2B3C] rounded-full rotate-45 shadow-sm" />
          <div className="w-14 h-7 bg-[#4FC3F7] rounded-full -rotate-12 shadow-sm" />
          <div className="w-12 h-6 bg-slate-200 rounded-full rotate-[60deg] shadow-sm" />
        </div>
      </div>

      {/* FON ELEMENTLARI */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-[#4FC3F7]/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] bg-[#1A2B3C]/5 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
