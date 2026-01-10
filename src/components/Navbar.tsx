"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Sharhlar", href: "#reviews" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "top-0 py-1" : "top-2 md:top-4 py-10"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/95 backdrop-blur-md flex justify-between items-center px-4 md:px-6 py-2
              transition-all duration-500 rounded-full border border-slate-100 shadow-lg
            `}
          >
            {/* 1. LOGO: URi♂N */}
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex items-center shrink-0">
                <div className="flex items-center h-full leading-none">
                  <span className="text-xl md:text-3xl font-black italic tracking-tighter text-[#1A2B3C]">
                    URi
                  </span>
                  {/* Markazlashtirilgan ♂ belgisi */}
                  <span className="flex items-center justify-center text-2xl md:text-4xl font-black text-[#4FC3F7] transform rotate-[10deg] mx-[-1px] translate-y-[-1px] md:translate-y-[-2px]">
                    ♂
                  </span>
                  <span className="text-xl md:text-3xl font-black italic tracking-tighter text-[#1A2B3C]">
                    N
                  </span>
                </div>
              </Link>

              {/* 2. DESKTOP MENU - md ekranlardan boshlab ko'rinadi */}
              <div className="hidden md:flex items-center gap-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem("")}
                    className={`
                      relative px-3 py-1.5 text-[10px] xl:text-[11px] font-black uppercase 
                      transition-all duration-300 rounded-full
                      ${
                        activeItem === item.name
                          ? "text-white"
                          : "text-[#1A2B3C] hover:text-[#4FC3F7]"
                      }
                    `}
                  >
                    {activeItem === item.name && (
                      <span className="absolute inset-0 bg-[#1A2B3C] rounded-full -z-10 animate-in fade-in zoom-in duration-300"></span>
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. RIGHT SECTION: Tugma va Burger */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* SOTIB OLISH tugmasi - md ekranlardan boshlab doimiy ko'rinadi */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex bg-[#4FC3F7] text-[#1A2B3C] px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest shadow-md hover:bg-[#1A2B3C] hover:text-white transition-all active:scale-95 whitespace-nowrap"
              >
                SOTIB OLISH
              </button>

              {/* BURGER - Faqat mobil (md dan kichik) ekranlarda ko'rinadi */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 flex flex-col justify-center items-center bg-slate-50 rounded-full border border-slate-100"
              >
                <span
                  className={`w-4 h-0.5 bg-[#1A2B3C] mb-1 transition-all ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-[#1A2B3C] mb-1 transition-all ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-[#1A2B3C] transition-all ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`fixed inset-0 bg-[#1A2B3C] z-[90] md:hidden flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-black uppercase tracking-widest hover:text-[#4FC3F7]"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-4 bg-[#4FC3F7] text-[#1A2B3C] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest"
            >
              Hoziroq xarid qilish
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
