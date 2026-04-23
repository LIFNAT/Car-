'use client';

import React from 'react';
import Link from 'next/link';

export default function PDPA() {
  const lastUpdated = "23 เมษายน 2026";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Top Header */}
      <div className="bg-[#002687] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">นโยบายคุ้มครองข้อมูลส่วนบุคคล</h1>
          <p className="text-blue-200 text-sm">Privacy Policy & Terms of Service</p>
          <div className="mt-6 inline-block bg-blue-900/50 px-4 py-1 rounded-full text-xs border border-blue-400/30">
            อัปเดตล่าสุดเมื่อ: {lastUpdated}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl -mt-8 mb-12 overflow-hidden border border-gray-100">
        <div className="p-8 md:p-12 space-y-10">
          
          {/* Section 1: Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-[#007BFF] rounded-full"></div>
              <h2 className="text-xl font-bold">1. บทนำ</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              ยินดีต้อนรับสู่ **CarPlus** เราให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของคุณ นโยบายนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ และเปิดเผยข้อมูลของคุณเมื่อคุณใช้งานแพลตฟอร์มซื้อ-ขายรถยนต์ของเรา เพื่อให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            </p>
          </section>

          {/* Section 2: Data Collection */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-[#007BFF] rounded-full"></div>
              <h2 className="text-xl font-bold">2. ข้อมูลที่เราจัดเก็บ</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">●</span>
                <span>**ข้อมูลระบุตัวตน:** ชื่อ-นามสกุล, เลขบัตรประชาชน (สำหรับการยืนยันตัวตนผู้ขาย)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">●</span>
                <span>**ข้อมูลติดต่อ:** เบอร์โทรศัพท์, อีเมล, ที่อยู่ปัจจุบัน</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">●</span>
                <span>**ข้อมูลรถยนต์:** รายละเอียดรถยนต์, หมายเลขตัวถัง, ทะเบียนรถ และภาพถ่าย</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">●</span>
                <span>**ข้อมูลทางเทคนิค:** IP Address, คุกกี้ (Cookies), และพฤติกรรมการใช้งาน</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Purpose */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-[#007BFF] rounded-full"></div>
              <h2 className="text-xl font-bold">3. วัตถุประสงค์ในการใช้ข้อมูล</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>เรานำข้อมูลของคุณไปใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>เพื่อดำเนินการสร้างและจัดการบัญชีผู้ใช้งานของคุณ</li>
                <li>เพื่ออำนวยความสะดวกในการติดต่อระหว่างผู้ซื้อและผู้ขายรถยนต์</li>
                <li>เพื่อตรวจสอบความถูกต้องของข้อมูลรถยนต์และป้องกันการฉ้อโกง</li>
                <li>เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพการทำงานของแพลตฟอร์ม</li>
              </ol>
            </div>
          </section>

          {/* Section 4: Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
              <h2 className="text-xl font-bold">4. ความปลอดภัยของข้อมูล</h2>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 italic text-sm text-gray-700">
              "CarPlus ใช้ระบบรักษาความปลอดภัยระดับมาตรฐานสากล (SSL Encryption) เพื่อป้องกันไม่ให้ข้อมูลสูญหาย เข้าถึงโดยไม่ได้รับอนุญาต หรือถูกนำไปใช้ในทางมิชอบ ข้อมูลการยืนยันตัวตนจะถูกเข้ารหัสไว้อย่างปลอดภัย"
            </div>
          </section>

          {/* Section 5: Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-6 bg-[#007BFF] rounded-full"></div>
              <h2 className="text-xl font-bold">5. สิทธิของเจ้าของข้อมูล</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              คุณมีสิทธิตามกฎหมายในการเข้าถึง ขอสำเนา แก้ไข คัดค้าน หรือขอให้ลบข้อมูลส่วนบุคคลของคุณออกจากระบบของเราได้ทุกเมื่อ โดยติดต่อผ่านเจ้าหน้าที่คุ้มครองข้อมูล (DPO)
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Contact & Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              <p className="font-bold text-gray-700">มีข้อสงสัยเพิ่มเติม?</p>
              <p>อีเมล: privacy@carplus.com | โทร: 02-XXX-XXXX</p>
            </div>
            <div className="flex gap-4">
              <Link href="/Register">
                <button className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all">
                  ย้อนกลับ
                </button>
              </Link>
              <Link href="/Register">
                <button className="px-8 py-2.5 bg-[#007BFF] text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-200 hover:bg-[#0056b3] transition-all">
                  ยอมรับและลงทะเบียน
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="text-center pb-12 text-gray-400 text-xs">
        <p>© 2026 CarPlus Thailand Asset Management. All rights reserved.</p>
      </footer>
    </div>
  );
}