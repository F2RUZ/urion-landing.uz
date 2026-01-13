"use client";
import { Mars } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0F172A] py-12 text-white/70 border-t-2 border-[#4FC3F7]/10">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: UR♂N - Mukammal simmetriya */}
          <div className="flex flex-col items-start md:items-start gap-4 group cursor-pointer">
            <div className="flex items-center text-[36px] font-[1000] italic tracking-tighter select-none leading-none">
              <span className="text-white">URI</span>
              <div className="flex items-center justify-center mx-[-1px] md:mx-[1px]">
                <Mars
                  strokeWidth={3}
                  className="w-9 h-9 md:w-[44px] md:h-[44px] text-[#4FC3F7] transform rotate-[10deg] translate-y-[-1px] md:translate-y-[-2px]"
                />
              </div>
              <span className="text-white">N</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-black tracking-[4px] text-[#4FC3F7] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                Erkaklar salomatligi uchun
              </span>
            </div>
          </div>

          {/* 2. ALOQA MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-3 p-6 bg-white/5 rounded-[30px] border border-white/10 backdrop-blur-sm hover:border-[#4FC3F7]/30 transition-all duration-500">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-medium">
                  <span className="text-white/50 font-black uppercase tracking-widest mr-3">
                    Ishonch telefoni:
                  </span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-[#4FC3F7] hover:text-white transition-all font-[1000] text-l md:text-l"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-5 text-[11px] md:text-[12px] font-black uppercase tracking-[2px]">
            <a
              href="#"
              className="text-white/40 hover:text-[#4FC3F7] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#4FC3F7] shadow-[0_0_10px_#4FC3F7] opacity-50 group-hover:opacity-100" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#4FC3F7] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#4FC3F7] shadow-[0_0_10px_#4FC3F7] opacity-50 group-hover:opacity-100" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#4FC3F7] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#4FC3F7] shadow-[0_0_10px_#4FC3F7] opacity-50 group-hover:opacity-100" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-[4px] text-white/20 font-black">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} URION VITAKOMPLEKS UZBEKISTAN. BARCHA
            HUQUQLAR HIMOYaLANGAN.
          </p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-3 hover:text-[#4FC3F7] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 bg-[#4FC3F7]/20 rounded-full" />
              TOSHKENT, O'ZBEKISTON
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
