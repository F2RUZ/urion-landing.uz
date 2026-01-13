"use client";
import Image from "next/image";
import { Mars } from "lucide-react"; // Ikonkani chaqirib olamiz

export default function Gymnastics() {
  const gymCards = [
    {
      title: "QUVVAT",
      subtitle: "ENERGIYA ZAPASI",
      imgSrc: "/quvvat.png",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "CHIDAMLILIK",
      subtitle: "TESTOSTERON BALANSI",
      imgSrc: "/chidamlik.png",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "HIMOYA",
      subtitle: "11 FAOL KOMPONENT",
      imgSrc: "/ximoya.png",
      color: "from-blue-100 to-blue-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-6 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - YANGILANGAN UR♂N BILAN */}
        <div className="mb-12">
          <h2 className="flex flex-wrap items-center text-[32px] md:text-[42px] font-black italic mb-4 tracking-tighter leading-none">
            {/* UR♂N LOGO QISMI */}
            <div className="flex items-center select-none mr-2 md:mr-4">
              <span className="text-[#1A2B3C] italic leading-none">URI</span>
              <div className="flex items-center justify-center mx-[-1px] md:mx-[1px]">
                <Mars
                  strokeWidth={4} // Harflar qalinligiga moslash uchun
                  className="w-8 h-8 md:w-[48px] md:h-[48px] text-[#4FC3F7] transform rotate-[10deg] translate-y-[-1px] md:translate-y-[-2px]"
                />
              </div>
              <span className="text-[#1A2B3C] italic leading-none">N</span>
            </div>

            {/* QO'SHIMCHA MATN */}
            <span className="text-[#1A2B3C] not-italic font-extrabold text-2xl md:text-3xl uppercase">
              BILAN YUKSAK NATIJALAR SARI
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base font-bold max-w-[600px] leading-tight uppercase tracking-tight opacity-80">
            Vitakompleks-11 erkaklar organizmini eng kerakli vitamin va
            minerallar bilan to'yintirib, har qanday vaziyatda o'zingizni
            ishonchli his qilishingizni ta'minlaydi.
          </p>
        </div>

        {/* KARTALAR GRIDI (Stillariga teginilmadi) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] bg-white rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A2B3C] text-2xl font-black leading-[0.9] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-sm md:text-base text-[#4FC3F7] font-black tracking-widest">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda) */}
              <div
                className={`absolute right-0 top-0 w-[65%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover object-center"
                  />
                  {/* Overlay gradient - Matn o'qilishi uchun */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:from-transparent" />
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-4 -left-2 text-[100px] font-black text-slate-50 z-0 select-none opacity-50">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ chiziq */}
        <div className="mt-16 flex justify-center">
          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
