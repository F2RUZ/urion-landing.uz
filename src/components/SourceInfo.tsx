"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash usuli", href: "#usage" },
    { name: "Natijalar", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sotib olish", href: "#test" },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-12">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* 2. FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-slate-50 pt-16">
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* URi♂N LOGO */}
            <h2 className="flex items-center text-[36px] md:text-[42px] font-black italic tracking-tighter leading-none text-[#1A2B3C]">
              URI
              <span className="text-[#4FC3F7] text-[45px] md:text-[52px] not-italic translate-y-[-5px] mx-[-1px] transform rotate-[10deg]">
                ♂
              </span>
              N
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A2B3C] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-[#4FC3F7] hover:text-[#1A2B3C] transition-all active:scale-95"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A2B3C] text-[#1A2B3C] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-white transition-all active:scale-95"
              >
                MUTAXASSIS BILAN BOG'LANISH
              </button>
            </div>
          </div>

          {/* Menyu linklari */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center lg:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A2B3C] text-[11px] font-black uppercase tracking-wider hover:text-[#4FC3F7] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* 3. COPYRIGHT VA MAHSULOT STATUSI */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[#1A2B3C]/40 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2026 URION VITAKOMPLEKS. BARCHA HUQUQLAR HIMOYALANGAN.</p>
          <div className="flex items-center gap-8 italic">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              O'ZBEKISTONDA SERTIFIKATLANGAN
            </span>
            <span className="text-[#1A2B3C] bg-slate-100 px-3 py-1 rounded-md font-black">
              18+
            </span>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV PASTKI CHIZIQ */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#1A2B3C] via-[#4FC3F7] to-[#1A2B3C] mt-16 opacity-10" />
    </section>
  );
}
