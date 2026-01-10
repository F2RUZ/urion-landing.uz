"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0F172A] py-6 text-white/70 border-t-2 border-[#4FC3F7]/10">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: URi♂N */}
          <div className="flex flex-col items-center md:items-start gap-4 group cursor-pointer">
            <h2 className="flex items-center text-[36px] font-black italic tracking-tighter select-none leading-none">
              <span className="text-white">URi</span>
              <span className="text-[#4FC3F7] text-[42px] not-italic translate-y-[-2px] mx-[-1px] transform rotate-[10deg]">
                ♂
              </span>
              <span className="text-white">N</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-black tracking-[4px] text-[#4FC3F7] uppercase">
                Erkaklar salomatligi uchun
              </span>
            </div>
          </div>

          {/* 2. ALOQA MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-3 p-5 bg-white/5 rounded-[25px] border border-white/10 backdrop-blur-sm">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-medium">
                  <span className="text-white/50 font-bold uppercase tracking-wider mr-2">
                    Ishonch telefoni:
                  </span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-[#4FC3F7] hover:text-white transition-all font-black text-lg md:text-xl"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                Dushanba - Yakshanba: 09:00 - 21:00
              </p>
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-4 text-[11px] md:text-[12px] font-black uppercase tracking-wider">
            <a
              href="#"
              className="text-white/50 hover:text-[#4FC3F7] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] shadow-[0_0_8px_#4FC3F7]" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#4FC3F7] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] shadow-[0_0_8px_#4FC3F7]" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#4FC3F7] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] shadow-[0_0_8px_#4FC3F7]" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[3px] text-white/20 font-bold">
          <p>
            © {new Date().getFullYear()} URION VITAKOMPLEKS UZBEKISTAN. BARCHA
            HUQUQLAR HIMOYaLANGAN.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-[#4FC3F7] transition-colors cursor-default">
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              TOSHKENT, O'ZBEKISTON
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
