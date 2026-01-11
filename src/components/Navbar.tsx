"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import OrderModal from "./OrderModal";
import { Mars } from "lucide-react";

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
                <div className="flex items-center h-full leading-none select-none">
                  {/* UR qismi */}
                  <span className="text-3xl md:text-[40px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
                    URI
                  </span>

                  {/* i o'rnidagi Mars (♂) belgisi */}
                  <div className="flex items-center justify-center mx-[-2px] md:mx-[0px]">
                    <Mars
                      /* strokeWidth orqali font qalinligini boshqaramiz */
                      strokeWidth={3}
                      /* O'lchamni harflar bilan tenglashtiramiz */
                      className="w-7 h-7 md:w-[48px] md:h-[40px] text-[#4FC3F7] transform rotate-[12deg] translate-y-[-2px] md:translate-y-[2px]"
                    />
                  </div>

                  {/* N harfi */}
                  <span className="text-3xl md:text-[40px] font-[1000] italic tracking-tighter text-[#1A2B3C] leading-none">
                    N
                  </span>
                </div>
              </Link>
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
