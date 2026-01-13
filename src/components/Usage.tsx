"use client";
import Image from "next/image";
import { Mars } from "lucide-react"; // Ikonka kutubxonasini tekshiring

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
            strokeWidth="2"
          />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      title: "KUNIGA 2 TA KAPSULA",
      desc: "Ovqat paytida yoki undan keyin yetarli miqdordagi suv bilan qabul qiling.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#4FC3F7]">
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
      title: "ENG QULAY VAQT",
      desc: "Organizmni kun bo'yi quvvat bilan ta'minlash uchun ertalab qabul qilish tavsiya etiladi.",
    },
  ];

  return (
    <section id="usage" className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* CHAP TOMON: MATNLAR VA LOGOTIP */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="flex flex-col text-[32px] md:text-[50px] font-[1000] leading-none tracking-tighter">
              <div className="flex items-center select-none">
                <span className="italic text-[#1A2B3C]">URI</span>
                <div className="flex items-center justify-center mx-[-1px] md:mx-[2px]">
                  <Mars
                    strokeWidth={4}
                    className="w-8 h-8 md:w-[54px] md:h-[54px] text-[#4FC3F7] transform rotate-[10deg] translate-y-[-1px] md:translate-y-[-2px]"
                  />
                </div>
                <span className="italic text-[#1A2B3C]">N</span>
              </div>
              <span className="text-[#1A2B3C] font-black text-[24px] md:text-[36px] mt-2">
                bilan hayot ritmi{" "}
              </span>
              <span className="text-[#4FC3F7] italic font-black text-[26px] md:text-[38px]">
                yanada oson
              </span>
            </h2>
          </div>

          <div className="space-y-10">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="p-4 rounded-[22px] bg-slate-50 group-hover:bg-[#4FC3F7]/10 transition-all duration-500 shadow-sm group-hover:scale-110">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A2B3C] font-[900] text-base md:text-lg tracking-wide uppercase">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-[340px] mt-2">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot qutisi */}
          <div className="bg-[#1A2B3C] rounded-[35px] p-10 border border-slate-800 shadow-[0_25px_50px_-12px_rgba(26,43,60,0.4)] max-w-[400px] relative overflow-hidden group">
            {/* Dekorativ blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FC3F7]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#4FC3F7]/20 transition-all duration-700" />

            <p className="text-[#4FC3F7] text-[11px] font-black uppercase tracking-[4px] mb-4">
              TAVSIYA ETILGAN KURS
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-[1000] italic leading-none uppercase tracking-tighter">
              30 kun davomida
            </h3>
            <div className="h-[2px] w-12 bg-[#4FC3F7] my-5 rounded-full" />
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
              To'liq samaraga erishish uchun yiliga 2 marta takrorlash tavsiya
              etiladi
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL QISM */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[450px] md:h-[650px] w-full rounded-[50px] overflow-hidden shadow-2xl border-[8px] border-slate-50">
            <Image
              src="/ritm.png"
              alt="Urion Lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Gradient qatlam */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/60 via-transparent to-transparent" />

            {/* Rasm ustidagi matn */}
            <div className="absolute bottom-12 left-10 right-10">
              <p className="text-white font-[1000] italic text-2xl md:text-3xl leading-tight uppercase tracking-tighter">
                HAR KUNI <br />{" "}
                <span className="text-[#4FC3F7]">O'ZINGIZGA</span> <br />{" "}
                ISHONING
              </p>
            </div>
          </div>

          {/* Floating Badge (Kapsula miqdori) */}
          <div className="absolute -bottom-6 -right-4 md:right-0 bg-white p-6 rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 transition-transform hover:translate-y-[-5px]">
            <div className="w-14 h-14 rounded-2xl bg-[#1A2B3C] flex items-center justify-center text-[#4FC3F7] font-[1000] text-3xl italic shadow-inner">
              1
            </div>
            <div>
              <p className="text-[#1A2B3C] font-[1000] uppercase text-xs tracking-[2px] leading-tight">
                Kapsula <br /> <span className="text-[#4FC3F7]">Kuniga</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
