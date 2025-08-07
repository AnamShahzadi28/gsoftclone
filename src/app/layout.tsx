// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Providers } from "./Provider";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import Header from "@/components/Navbar/Header";
import ToastProvider from "@/components/ToastProvider";

const montserrat = Montserrat({
  weight: ['100','200','300','400','500','600','700','800','900' ],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gsoft Consulting - Innovative Software Solutions",
  description:
    "Gsoft Consulting provides cutting-edge software development, web solutions, and IT consulting to drive your business forward.",
  keywords:
    "software development, web development, IT consulting, Gsoft, technology solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} `}>
        <Providers>
      <Header/>
      <main>{children}</main>
      <ToastProvider />
          <Footer />

         
        </Providers>
        <WhatsAppButton/>
       
      </body>
    </html>
  );
}
