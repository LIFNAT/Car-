'use client';

import React from 'react';
import Link from 'next/link';

export default function Service() {
  const lastUpdated = "23 เมษายน 2026";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#002687] to-[#004dc7] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">เงื่อนไขการให้บริการ</h1>
          <p className="text-blue-100 text-sm opacity-80">Terms and Conditions of Use</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl -mt-10 mb-16 overflow-hidden border border-gray-100">
        <div className="p-8 md:p-12">
          
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">CarPlus Official Document</span>
            <span className="text-xs text-gray-400 italic">ฉบับปรับปรุง: {lastUpdated}</span>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-[#002687] mb-4 flex items-center gap-2">
                <span className="bg-[#002687] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">01</span>
                ข้อตกลงทั่วไป
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                การเข้าถึงและการใช้งานแพลตฟอร์ม **CarPlus** ถือว่าผู้ใช้งานยอมรับที่จะปฏิบัติตามเงื่อนไขและข้อกำหนดเหล่านี้ทุกประการ หากท่านไม่เห็นด้วยกับข้อกำหนดใดๆ เราขอให้ท่านระงับการใช้งานแพลตฟอร์มทันที
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-[#002687] mb-4 flex items-center gap-2">
                <span className="bg-[#002687] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">02</span>
                คุณสมบัติของผู้ใช้งาน
              </h2>
              <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-[#002687] text-sm text-gray-700 space-y-2">
                <p>• ผู้ใช้งานต้องมีอายุไม่ต่ำกว่า 18 ปีบริบูรณ์</p>
                <p>• ต้องให้ข้อมูลที่เป็นจริงและถูกต้องในการสมัครสมาชิกและการลงประกาศขายรถยนต์</p>
                <p>• บัญชีผู้ใช้งานหนึ่งบัญชี สามารถใช้งานได้โดยบุคคลเพียงคนเดียวเท่านั้น</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-[#002687] mb-4 flex items-center gap-2">
                <span className="bg-[#002687] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">03</span>
                ข้อกำหนดสำหรับการลงประกาศ
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                เพื่อให้ CarPlus เป็นชุมชนที่ปลอดภัย ผู้ใช้งานตกลงที่จะ:
              </p>
              <ul className="list-disc ml-6 text-sm text-gray-600 space-y-3">
                <li>ไม่ลงประกาศขายรถยนต์ที่ผิดกฎหมาย หรือไม่มีเอกสารครอบครองที่ถูกต้อง</li>
                <li>ไม่ใช้ภาพถ่ายที่ละเมิดลิขสิทธิ์ของผู้อื่น หรือภาพที่แต่งจนบิดเบือนความเป็นจริง</li>
                <li>ไม่ลงข้อมูลอันเป็นเท็จเพื่อหลอกลวงราคา หรือปิดบังประวัติอุบัติเหตุร้ายแรง</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-[#002687] mb-4 flex items-center gap-2">
                <span className="bg-[#002687] text-white w-6 h-6 rounded-md flex items-center justify-center text-xs">04</span>
                การปฏิเสธความรับผิด (Disclaimer)
              </h2>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600 leading-relaxed italic">
                "CarPlus เป็นเพียงแพลตฟอร์มกลางในการสื่อสารระหว่างผู้ซื้อและผู้ขายเท่านั้น เราไม่มีส่วนเกี่ยวข้องในการทำนิติกรรมสัญญา และจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นจากการเจรจาหรือการทำธุรกรรมระหว่างผู้ใช้เอง"
              </div>
            </section>

          </div>

          {/* Action Buttons */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/Register" className="w-full md:w-auto">
              <button className="w-full px-12 py-3 bg-[#002687] text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg">
                รับทราบและยอมรับเงื่อนไข
              </button>
            </Link>
            <Link href="/Register" className="w-full md:w-auto text-sm text-gray-400 hover:text-gray-600 text-center">
              ยกเลิก
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 pb-12 text-center text-gray-400 text-[11px] space-y-2">
        <p>หากมีข้อสงสัยเกี่ยวกับเงื่อนไขการให้บริการ กรุณาติดต่อฝ่ายกฎหมายที่ legal@carplus.com</p>
        <p>© 2026 CarPlus (Thailand) Co., Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}