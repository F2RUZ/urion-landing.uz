"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  // Formani to'ldirish progressi
  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.replace(/\D/g, "").length === 12 ? 50 : 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("998")) value = "998" + value;
    value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " (" + value.slice(3, 5) + ")";
    if (value.length > 5) formatted += " " + value.slice(5, 8);
    if (value.length > 8) formatted += " " + value.slice(8, 10);
    if (value.length > 10) formatted += " " + value.slice(10, 12);

    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // API simulyatsiyasi
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => onClose(), 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Orqa fon (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md"
          />

          {/* Modal Konteyneri */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-[480px] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Yuqori progress bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#4FC3F7] shadow-[0_0_10px_#4FC3F7]"
              />
            </div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <SuccessView />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Logotip */}
                    <div className="text-center mb-8">
                      <h2 className="flex items-center justify-center text-4xl md:text-5xl font-black italic tracking-tighter text-[#1A2B3C]">
                        URi
                        <span className="text-[#4FC3F7] not-italic translate-y-[-4px] mx-1">
                          ♂
                        </span>
                        N
                      </h2>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[3px] mt-4">
                        Shaxsiy ma'lumotlarni kiriting
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Ism input */}
                      <div className="group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-5 mb-1 block tracking-widest">
                          Ism:
                        </label>
                        <div
                          className={`relative flex items-center bg-slate-50 border-2 rounded-2xl transition-all duration-300 ${
                            activeField === "name"
                              ? "border-[#4FC3F7] bg-white ring-4 ring-[#4FC3F7]/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span className="pl-5 text-slate-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="Ismingizni kiriting"
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-4.5 bg-transparent outline-none font-bold text-[#1A2B3C] placeholder:text-slate-300 text-sm"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Telefon input */}
                      <div className="group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-5 mb-1 block tracking-widest">
                          Telefon raqam:
                        </label>
                        <div
                          className={`relative flex items-center bg-slate-50 border-2 rounded-2xl transition-all duration-300 ${
                            activeField === "phone"
                              ? "border-[#4FC3F7] bg-white ring-4 ring-[#4FC3F7]/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span className="pl-5 text-slate-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="+998 (__) ___ __ __"
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-4.5 bg-transparent outline-none font-bold text-[#1A2B3C] placeholder:text-slate-300 text-sm"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                          />
                        </div>
                      </div>

                      {/* Submit Tugmasi */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "loading" || progress < 100}
                        className="w-full mt-4 py-5 bg-[#1A2B3C] text-white rounded-[20px] font-black uppercase tracking-[3px] text-[11px] shadow-2xl shadow-blue-900/20 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-all overflow-hidden relative"
                      >
                        <span className="relative z-10">
                          {status === "loading"
                            ? "Yuborilmoqda..."
                            : "Tasdiqlash"}
                        </span>
                        {status === "loading" && (
                          <motion.div
                            className="absolute inset-0 bg-[#4FC3F7]/20"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                          />
                        )}
                      </motion.button>
                    </form>

                    <p className="text-center text-[9px] text-slate-400 mt-8 font-bold uppercase tracking-widest opacity-60">
                      Sizning ma'lumotlaringiz xavfsiz ostida
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Yopish tugmasi */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-[#4FC3F7] hover:text-white transition-all group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="group-hover:rotate-90 transition-transform duration-300"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SuccessView() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="py-10 text-center"
    >
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 mx-auto mb-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-2xl font-black text-[#1A2B3C] mb-2 uppercase">
        Qabul qilindi!
      </h3>
      <p className="text-slate-500 font-bold text-sm leading-relaxed">
        Operatorlarimiz tez orada <br /> siz bilan bog'lanishadi.
      </p>
    </motion.div>
  );
}
