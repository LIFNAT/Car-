import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarPlus - ซื้อขายรถยนต์มือสองคุณภาพ",
  description: "แพลตฟอร์มซื้อขายรถยนต์มือสองที่มั่นใจได้ 24 ชั่วโมง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#F8FAFC]">
        {/* Navbar จะโชว์ในทุกหน้า (ยกเว้นคุณจะเขียน logic ดักไว้ในตัว Navbar เอง) */}
        <Navbar /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}