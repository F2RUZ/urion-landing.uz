"use client";
import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t-[1px] border-[#1A2B3C]/10 py-3.5 md:py-5 bg-white/95 backdrop-blur-lg z-[100] shadow-[0_-10px_30px_rgba(26,43,60,0.08)]">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-center gap-4">
        {/* Dekorativ chiziqchalar (Urion uslubida) */}
        <div className="hidden sm:block h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#4FC3F7]/50" />

        <p className="text-[#1A2B3C] font-black text-[11px] md:text-[15px] lg:text-[18px] tracking-[1.5px] md:tracking-[3px] uppercase italic text-center leading-none">
          BFQ. DORI VOSITASI{" "}
          <span className="text-[#4FC3F7]">HISOBLANMAYDI.</span><br />
          <span className="text-[10px] md:text-[15px] ">Qabul qilishdan avval shifokor bilan maslahatlashing</span>
        </p>

        <div className="hidden sm:block h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#4FC3F7]/50" />
      </div>
    </div>
  );
};

export default Warning;
