"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "QUVVAT",
      subtitle: "ENERGIYA ZAPASI",
      imgSrc: "/energy-card.png", // Erkak kishi aktiv harakatda
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "CHIDAMLILIK",
      subtitle: "TESTOSTERON BALANSI",
      imgSrc: "/power-card.png", // Mushaklar yoki quvvat ramzi
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "HIMOYA",
      subtitle: "11 FAOL KOMPONENT",
      imgSrc: "/shield-card.png", // Mahsulot qutisi yoki qalqon ramzi
      color: "from-blue-100 to-blue-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-6 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[42px] font-black italic mb-4 tracking-tighter leading-none">
            <span className="text-[#1A2B3C] flex items-center gap-2">
              URi
              <span className="text-[#4FC3F7] not-italic translate-y-[-2px]">
                ♂
              </span>
              N
            </span>
            <span className="text-[#1A2B3C] ml-0 md:ml-4 not-italic font-extrabold text-2xl md:text-3xl block md:inline uppercase">
              BILAN YUKSAK NATIJALAR SARI
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-bold max-w-[600px] leading-tight uppercase tracking-tight opacity-80">
            Vitakompleks-11 erkaklar organizmini eng kerakli vitamin va
            minerallar bilan to'yintirib, har qanday vaziyatda o'zingizni
            ishonchli his qilishingizni ta'minlaydi.
          </p>
        </div>

        {/* KARTALAR GRIDI */}
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
