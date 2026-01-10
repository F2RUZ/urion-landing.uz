"use client";
import Image from "next/image";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#4FC3F7]">
          <rect
            x="3"
            y="8"
            width="18"
            height="8"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      title: "KUNIGA 1 TA KAPSULA",
      desc: "ovqat paytida yoki undan keyin yetarli miqdordagi suv bilan",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#4FC3F7]">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "ENG QULAY VAQT",
      desc: "organizmni kun bo'yi quvvat bilan ta'minlash uchun ertalab qabul qilish tavsiya etiladi",
    },
  ];

  return (
    <section id="usage" className="w-full py-5 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* CHAP TOMON: MATNLAR */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-black italic leading-[1.1] tracking-tighter">
            <span className="text-[#1A2B3C] flex items-center gap-2">
              URi
              <span className="text-[#4FC3F7] text-4xl md:text-5xl not-italic translate-y-[-2px]">
                ♂
              </span>
              N
            </span>
            <span className="text-[#1A2B3C] not-italic text-[26px] md:text-[36px]">
              bilan hayot ritmi{" "}
            </span>
            <span className="text-[#4FC3F7] italic text-[28px] md:text-[38px]">
              yanada oson
            </span>
          </h2>

          <div className="space-y-8">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-all duration-300 shadow-sm">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A2B3C] font-black text-sm md:text-base tracking-wider uppercase">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[320px] mt-1">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot */}
          <div className="bg-[#1A2B3C] rounded-[30px] p-8 border border-slate-800 shadow-2xl shadow-blue-900/20 max-w-[360px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4FC3F7]/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-[#4FC3F7]/20 transition-all" />

            <p className="text-[#4FC3F7] text-[10px] font-black uppercase tracking-[3px] mb-3">
              TAVSIYA ETILGAN KURS
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-black italic leading-none">
              30 kun davomida
            </h3>
            <p className="text-white/50 text-[11px] font-bold mt-3 uppercase">
              Yiliga 2 marta takrorlash tavsiya etiladi
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-[550px]">
          <div
            className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          >
            <Image
              src="/usage-man.png" // Erkak kishining aktiv hayoti yoki qulaylikni ifodalovchi rasm
              alt="Urion Usage"
              fill
              className="object-cover"
              priority
            />
            {/* Rasm ustidagi moviy qatlam */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/40 to-transparent" />
          </div>

          {/* Rasm ustidagi floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 whitespace-nowrap">
            <div className="w-10 h-10 rounded-full bg-[#4FC3F7] flex items-center justify-center text-[#1A2B3C] font-black text-xl italic">
              1
            </div>
            <p className="text-[#1A2B3C] font-black uppercase text-[10px] tracking-widest leading-tight">
              Kapsula <br /> Bir kunda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
