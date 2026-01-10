"use client";
import { motion } from "framer-motion";

export default function Purchase() {
  const cards = [
    {
      title: "ERKAKLIK QUVVATI",
      desc: "Testosteron darajasini tabiiy qo'llab-quvvatlash va erkaklik energiyasini qayta tiklashga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#4FC3F7]"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "CHIDAMLILIK VA ENERGIYA",
      desc: "Ishdagi va shaxsiy hayotdagi faollikni oshiradi, jismoniy charchoqni kamaytirib, organizmni tonusda saqlaydi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#1A2B3C]"
        >
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
    },
    {
      title: "100% TABIIY TARKIB",
      desc: "Hech qanday zararli kimyoviy qo'shimchalarsiz. 11 xil o'simlik ekstraktlari va vitaminlar majmuasi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-[#4FC3F7]"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-6 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-[40px] p-10 shadow-[0_15px_40px_rgba(26,43,60,0.05)] border border-slate-100 hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(26,43,60,0.1)] transition-all duration-500 group"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-[10deg] transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-[#1A2B3C] font-black text-[13px] mb-4 tracking-[2px] uppercase">
                {card.title}
              </h3>
              <p className="text-[#1A2B3C]/70 text-[13px] leading-relaxed font-bold">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO QISMI: URi♂N */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center space-y-6 mb-16"
        >
          <h2 className="flex items-center text-[50px] md:text-[85px] font-black italic tracking-tighter leading-none text-[#1A2B3C]">
            URi
            <span className="text-[#4FC3F7] text-[60px] md:text-[100px] not-italic translate-y-[-4px] md:translate-y-[-8px] mx-[-2px] transform rotate-[10deg]">
              ♂
            </span>
            N
          </h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent" />
          <p className="text-[#1A2B3C]/50 font-black tracking-[6px] uppercase text-[10px] md:text-[12px]">
            ERKAKLAR SALOMATLIGI KOMPLEKSI
          </p>
        </motion.div>

        {/* O'YNAB TURUVCHI KAPSULALAR (URION RANGLARIDA) */}
        <div className="relative h-24 flex justify-center items-center gap-12">
          {[
            {
              color: "bg-[#1A2B3C]",
              size: "w-10 h-5",
              delay: 0,
              rotate: "rotate-45",
            },
            {
              color: "bg-[#4FC3F7]",
              size: "w-12 h-6",
              delay: 0.5,
              rotate: "-rotate-12",
            },
            {
              color: "bg-slate-300",
              size: "w-10 h-5",
              delay: 1,
              rotate: "rotate-[60deg]",
            },
          ].map((pill, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: pill.delay,
                ease: "easeInOut",
              }}
              className={`${pill.size} ${pill.color} rounded-full shadow-lg border border-white/50 ${pill.rotate} opacity-80`}
            />
          ))}
        </div>
      </div>

      {/* Orqa fondagi dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
