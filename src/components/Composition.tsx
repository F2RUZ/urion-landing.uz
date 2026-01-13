"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "jinsiy a’zolar holati haqida qayg‘uruvchi.",
      "erkaklar faolligi va tonusini saqlab qolishni xohlovchi",
      "jismoniy yoki hissiy zo‘riqishni boshdan kechiruvchi",
      "ratsionni foydali ozuqa moddalari bilan to‘ldirishni xohlovchi insonlar",
    ],
    components: ["vitaminlar", "mikroelementlar", "o‘simlik komponentlari"],
  };

  const formulaData = [
    { name: "VITAMINLAR", desc: "A, B, C, E, D3" },
    { name: "mikroelementlar", desc: "jumladan, rux va selen" },
    { name: "EKSTRAKTLAR", desc: "100% TABIIY" },
    { name: "antioksidant", desc: "Moddalar" },
  ];

  return (
    <section
      className="w-full py-10 bg-slate-50/30 overflow-hidden"
      id="composition"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha - Urion uslubida */}
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center gap-2 text-[#1A2B3C] text-3xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter">
            ILMIY ASOSLANGAN
            <span className="text-[#4FC3F7]"> FORMULA</span>
          </h2>
          <p className="text-slate-500 font-bold mt-4 uppercase text-[10px] md:text-xs tracking-[3px] max-w-2xl mx-auto leading-relaxed">
            Urion - bu erkaklar jinsiy tizimini qo‘llab-quvvatlash uchun maxsus
            ishlab chiqilgan biologik faol oziq-ovqat qo‘shimchasi. Vitaminlar,
            mikroelementlar va o‘simlik tarkibiy qismlari majmuasi erkaklar
            organizmining normal funksional holatini, energiya darajasini va
            umumiy holatni saqlashga yordam beradi.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Asosiy Xususiyatlar */}
          <div className="w-full lg:w-[380px] bg-white rounded-[40px] p-8 md:p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#4FC3F7] text-2xl font-black uppercase italic group-hover:tracking-widest transition-all">
                kimlar uchun
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                mo‘ljallangan?
              </p>
              <div className="h-1 w-12 bg-[#1A2B3C] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#4FC3F7] animate-pulse" />
                  </div>
                  <p className="text-[#1A2B3C] text-[13px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual element */}
          <div className="flex flex-col items-center gap-10 z-20">
            <div className="w-56 h-56 md:w-72 md:h-72 relative group">
              {/* Orqa fondagi aylanuvchi nur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4FC3F7]/20 to-transparent rounded-full animate-spin-slow" />

              {/* Rasm konteyneri to'g'irlandi */}
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center border-[10px] border-slate-50 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/center.png"
                    alt="Urion Formula"
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[420px]">
              {formulaData.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[25px] border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <h4 className="text-[#4FC3F7] font-black text-[11px] uppercase mb-1 tracking-wider">
                    {m.name}
                  </h4>
                  <p className="text-[10px] text-[#1A2B3C] font-bold uppercase opacity-60">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Tarkibiy Qismlar */}
          <div className="w-full lg:w-[380px] bg-[#1A2B3C] rounded-[40px] p-8 md:p-10 shadow-2xl shadow-blue-900/20 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-8">
              <h3 className="text-[#4FC3F7] text-2xl font-black uppercase italic">
                TARKIBI
              </h3>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">
                Urion tarkibiga biologik faol komponentlar kiradi:
              </p>
              <div className="h-1 w-12 bg-[#4FC3F7] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#4FC3F7]" />
                  </div>
                  <p className="text-white text-[13px] font-black leading-snug uppercase italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
