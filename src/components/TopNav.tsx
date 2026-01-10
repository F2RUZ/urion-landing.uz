"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";
import CountdownTimer from "./CountdownTimer";

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Urion rangi: To'q ko'k (#1A2B3C)
        Balandlik: 34px (Yanada ixcham)
      */}
      <div className="w-full bg-[#1A2B3C] h-[34px] flex items-center relative z-[70] border-b border-white/10">
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya va Taymer */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FC3F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4FC3F7]"></span>
              </span>
              <p className="text-[9px] md:text-[10px] text-white/90 font-black uppercase tracking-[2px] hidden sm:block">
                Aksiya tugashiga:
              </p>
            </div>

            {/* CountdownTimer komponenti ichidagi ranglarni ham moviy qilish tavsiya etiladi */}
            <div className="scale-90 origin-left">
              <CountdownTimer />
            </div>
          </div>

          {/* O'NG TOMON: Quick Link */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-white/70 hover:text-[#4FC3F7] transition-all duration-300"
            >
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider border-b border-[#4FC3F7]/30 group-hover:border-[#4FC3F7] pb-0.5">
                Rasmiy do'kon
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-3 h-3 text-[#4FC3F7] group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ORQA FONDA SEKIN HARAKATLANUVCHI BREND MATNI */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden whitespace-nowrap flex items-center">
          <p className="text-white text-[16px] font-black italic tracking-widest uppercase">
            URION VITAKOMPLEKS-11 URION VITAKOMPLEKS-11 URION VITAKOMPLEKS-11
            URION VITAKOMPLEKS-11
          </p>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
