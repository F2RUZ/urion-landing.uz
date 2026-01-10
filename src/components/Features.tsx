"use client";

export default function Features() {
  const features = [
    {
      text: "11 XIL TABIIY FAOL KOMPONENTLAR",
    },
    {
      text: "KURS SIFATIDA QABUL QILISHGA MOS",
    },
    {
      text: "BIOLOGIK FAOL QO'SHIMCHA (BFQ)",
    },
  ];

  return (
    <section className="relative w-full py-10 md:py-6 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - To'q ko'k soya va moviy border bilan */}
        <div className="relative bg-white rounded-[30px] md:rounded-[50px] shadow-[0_20px_50px_-15px_rgba(26,43,60,0.15)] border border-slate-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Orqa fondagi yashirin nur effekti (Moviy nur) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-6 md:px-10 py-6 md:py-10
                transition-all duration-300 hover:bg-slate-50/50 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-slate-100"
                    : ""
                }
              `}
            >
              {/* Doira belgisi (Urion Moviy gradienti) */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#1A2B3C] shadow-lg shadow-blue-200/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              </div>

              {/* Matn */}
              <div className="relative">
                <p className="text-[#1A2B3C] font-black text-[12px] md:text-[13px] leading-tight tracking-wider uppercase">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blok ostidagi dekorativ element (Moviy gradient) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-50/50 blur-[80px] rounded-full -z-10" />
    </section>
  );
}
