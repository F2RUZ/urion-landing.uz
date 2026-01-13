"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";
import { Mars } from "lucide-react";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[60px] md:mt-[70px]">
      {/* Orqa fondagi moviy gradient (Urion uslubida) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[450px] md:min-h-[580px] py-8 md:py-14">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left">
            <div className="relative mb-4 md:mb-6">
              {/* URi♂N Sarlavhasi markazlashtirilgan belgi bilan */}
              <div className="flex items-center h-full leading-none select-none">
                {/* UR qismi */}
                <span className="text-3xl md:text-[50px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
                  URI
                </span>

                {/* i o'rnidagi Mars (♂) belgisi */}
                <div className="flex items-center justify-center mx-[-2px] md:mx-[0px]">
                  <Mars
                    /* strokeWidth orqali font qalinligini boshqaramiz */
                    strokeWidth={3}
                    /* O'lchamni harflar bilan tenglashtiramiz */
                    className="w-7 h-7 md:w-[48px] md:h-[48px] text-[#4FC3F7] transform rotate-[12deg] translate-y-[-2px] md:translate-y-[2px]"
                  />
                </div>

                {/* N harfi */}
                <span className="text-3xl md:text-[50px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
                  N
                </span>
              </div>

              <div className="mt-3 md:mt-4 space-y-1">
                <h2 className="text-[26px] md:text-[42px] font-extrabold leading-[1.1] text-[#1A2B3C] tracking-tight">
                  Erkaklik quvvati va <br />
                  salomatlik siri!
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[420px] mb-8 border-l-2 border-[#4FC3F7] pl-4">
              <p className="text-[#1A2B3C] text-[13px] md:text-[15px] leading-relaxed font-medium">
                11 xil faol komponentdan iborat
                <span className="text-[#4FC3F7] font-bold"> Vitakompleks</span>:
                quvvatni oshirish, chidamlilikni tiklash va umumiy salomatlikni
                himoya qilish uchun maxsus yaratilgan.
              </p>
            </div>

            {/* Tugmalar guruhi */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A2B3C] text-white px-7 py-3.5 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#4FC3F7] hover:text-[#1A2B3C] shadow-xl shadow-blue-900/10 transition-all active:scale-95 text-center whitespace-nowrap min-w-max"
              >
                Hoziroq xarid qiling
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white border-2 border-[#1A2B3C] text-[#1A2B3C] px-7 py-3.5 rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-white transition-all active:scale-95 text-center whitespace-nowrap min-w-max"
              >
                Mutaxassis maslahati
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: KOMPOZITSIYA --- */}
          <div className="w-full md:w-[45%] relative mt-10 md:mt-0 flex justify-center items-center">
            <div className="relative w-full h-[350px] md:h-[500px] z-0">
              {/* Orqa fon rasmi (Erkak kishi yoki mahsulot foni) */}
              <div className="w-full h-full bg-slate-50 rounded-[40px] overflow-hidden relative border border-slate-100 shadow-inner">
                <Image
                  src="/intro.png"
                  alt="Urion Men Health"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Mahsulot qutisi (Box) - Urion qutisi rasmiga o'zgartiring */}
              <div className="absolute -bottom-6 -left-2 md:-left-12 z-20 w-[200px] md:w-[320px] drop-shadow-[0_20px_40px_rgba(26,43,60,0.3)] transition-transform hover:scale-105 duration-500">
                <div className="relative aspect-[1.1/1] rounded-[20px] border-[5px] border-white overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/intro2.png"
                    alt="Urion Vitakompleks Box"
                    fill
                    className="object-cover rounded-[20px]"
                  />
                </div>
              </div>

              {/* Badge (1 Kapsula) */}
              <div className="absolute -top-6 -right-2 md:-right-6 z-30 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1A2B3C] border-[5px] border-white shadow-2xl flex flex-col items-center justify-center text-white rotate-12">
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter text-[#4FC3F7]">
                  Kuniga
                </span>
                <span className="text-3xl md:text-5xl font-black italic leading-none my-0.5 md:my-1">
                  1
                </span>
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-tighter text-[#4FC3F7]">
                  Kapsula
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Dekorativ pastki chiziq */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#4FC3F7]/20 to-transparent" />
    </section>
  );
}
