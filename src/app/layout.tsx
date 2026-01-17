import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// 1. FONT OPTIMIZATION
const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadlineThin.ttf", weight: "100" },
    { path: "../fonts/FuturaNowHeadlineLight.ttf", weight: "300" },
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400" },
    { path: "../fonts/FuturaNowHeadlineMedium.ttf", weight: "500" },
    { path: "../fonts/FuturaNowHeadlineBold.ttf", weight: "700" },
    { path: "../fonts/FuturaNowHeadlineExtraBold.ttf", weight: "800" },
    { path: "../fonts/FuturaNowHeadlineBlack.ttf", weight: "900" },
  ],
  variable: "--font-futura",
  display: "swap",
});

// 2. SEO & METADATA (Urion uchun yangilandi)
export const metadata: Metadata = {
  metadataBase: new URL("https://urion.uz"),
  title: {
    default: "Urion - Erkaklar salomatligi uchun vitakompleks-11",
    template: "%s | Urion",
  },
  description:
    "Urion vitakompleks-11 bilan erkaklik quvvatini tiklang. Tabiiy tarkib, xavfsiz va samarali yechim.",
  keywords: [
    "Urion",
    "erkaklar salomatligi",
    "quvvatni oshirish",
    "vitakompleks",
    "natural men health",
    "erkaklar uchun dori",
  ],
  authors: [{ name: "Urion Health Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urion - Erkaklar salomatligi uchun innovatsion yechim",
    description:
      "11 xil faol moddadan iborat kompleks erkaklar salomatligini himoya qiladi.",
    url: "https://urion.uz",
    siteName: "Urion",
    images: [
      {
        url: "/og-urion.jpg",
        width: 1200,
        height: 630,
        alt: "Urion Vitakompleks-11",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A2B3C", // Urion brend rangi
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ANALYTICS: GOOGLE TAG */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${futura.variable} font-sans antialiased selection:bg-[#4FC3F7] selection:text-white bg-white text-[#1A2B3C]`}
        suppressHydrationWarning
      >
        <main>{children}</main>

        {/* 3. GLOBAL DISCLAIMER (Urion ranglarida) */}
        {/* <div className="fixed bottom-0 left-0 w-full border-t border-slate-200 py-3 bg-white/80 backdrop-blur-md z-[9999]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-500 font-bold text-[10px] md:text-xs tracking-[2px] uppercase">
              BIOLOGIK FAOL QO'SHIMCHA. DORI VOSITASI HISOBLANMAYDI.
            </p>
          </div>
        </div> */}
      </body>
    </html>
  );
}
