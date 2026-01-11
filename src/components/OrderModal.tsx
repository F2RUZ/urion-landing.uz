"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mars, User, Phone, X, Check, AlertCircle } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  const API_URL = `${process.env.NEXT_PUBLIC_API_SUSTAFLEX}/leads/`;

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

    // Backendga yuborish uchun telefonni tozalash (+ va bo'shliqlarsiz)
    const cleanPhone = formData.phone.replace(/\D/g, "");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: cleanPhone,
          source: "urion_web_site", // Qayerdan kelganini bilish uchun
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 4000);
      } else {
        throw new Error("Xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("error");
      // 3 soniyadan keyin qayta urinish imkonini berish
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-[480px] bg-white rounded-[45px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className={`h-full shadow-[0_0_10px] ${
                  status === "error"
                    ? "bg-red-500 shadow-red-500"
                    : "bg-[#4FC3F7] shadow-[#4FC3F7]"
                }`}
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
                    {/* LOGOTIP */}
                    <div className="text-center mb-10">
                      <div className="flex items-center justify-center text-4xl md:text-5xl font-[1000] italic tracking-tighter leading-none">
                        <span className="text-[#1A2B3C]">URI</span>
                        <div className="flex items-center justify-center mx-[-1px] md:mx-[1px]">
                          <Mars
                            strokeWidth={3}
                            className="w-9 h-9 md:w-[50px] md:h-[50px] text-[#4FC3F7] transform rotate-[10deg] translate-y-[-1px] md:translate-y-[-2px]"
                          />
                        </div>
                        <span className="text-[#1A2B3C]">N</span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-5 mb-2 block tracking-[2px]">
                          Ismingiz:
                        </label>
                        <div
                          className={`relative flex items-center bg-slate-50 border-2 rounded-[22px] transition-all duration-300 ${
                            activeField === "name"
                              ? "border-[#4FC3F7] bg-white ring-4 ring-[#4FC3F7]/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span className="pl-6 text-slate-300">
                            <User size={20} strokeWidth={2.5} />
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="Masalan: Azizbek"
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-5 bg-transparent outline-none font-bold text-[#1A2B3C] placeholder:text-slate-300 text-sm"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Phone Input */}
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-5 mb-2 block tracking-[2px]">
                          Telefon raqam:
                        </label>
                        <div
                          className={`relative flex items-center bg-slate-50 border-2 rounded-[22px] transition-all duration-300 ${
                            activeField === "phone"
                              ? "border-[#4FC3F7] bg-white ring-4 ring-[#4FC3F7]/5"
                              : "border-slate-100"
                          }`}
                        >
                          <span className="pl-6 text-slate-300">
                            <Phone size={20} strokeWidth={2.5} />
                          </span>
                          <input
                            required
                            type="text"
                            placeholder="+998 (__) ___ __ __"
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-5 bg-transparent outline-none font-[1000] text-[#1A2B3C] text-sm tracking-wider"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === "loading" || progress < 100}
                        className={`w-full mt-4 py-6 rounded-[24px] font-black uppercase tracking-[4px] text-[12px] shadow-2xl transition-all overflow-hidden relative ${
                          status === "error"
                            ? "bg-red-500 text-white"
                            : "bg-[#1A2B3C] text-white shadow-blue-900/20"
                        } disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none`}
                      >
                        <span className="relative z-10">
                          {status === "loading"
                            ? "YUBORILMOQDA..."
                            : status === "error"
                            ? "XATOLIK!"
                            : "TASDIQLASH"}
                        </span>
                        {status === "loading" && (
                          <motion.div
                            className="absolute inset-0 bg-[#4FC3F7]/30"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all group"
            >
              <X
                size={20}
                strokeWidth={3}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
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
      className="py-12 text-center"
    >
      <div className="w-24 h-24 bg-green-500 rounded-[30px] flex items-center justify-center text-white shadow-2xl shadow-green-500/40 mx-auto mb-8 transform rotate-[10deg]">
        <Check size={48} strokeWidth={4} />
      </div>
      <h3 className="text-3xl font-[1000] text-[#1A2B3C] mb-4 uppercase tracking-tighter">
        Qabul qilindi!
      </h3>
      <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight opacity-80">
        Operatorlarimiz tez orada <br /> siz bilan bog'lanishadi.
      </p>
    </motion.div>
  );
}
