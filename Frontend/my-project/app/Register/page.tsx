'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F4F7FA] text-[#1A1C1E]">
      {/* --- Corporate Navigation --- */}
    

      <main className="flex-grow flex justify-center py-16 px-4">
        <div className="w-full max-w-4xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-200">
          
          {/* --- Page Title --- */}
          <div className="p-10 border-b border-gray-100 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-[#1A1C1E]">ลงทะเบียนเข้าสู่ระบบ</h1>
              <p className="text-sm text-gray-500 mt-1">โปรดระบุข้อมูลตามความเป็นจริงเพื่อประโยชน์ในการรับบริการ</p>
            </div>
           
          </div>

          <form className="p-10 lg:p-16 space-y-12">
            
            {/* --- Section: User Classification --- */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-[#002687] flex items-center gap-3">
                <span className="w-1 h-4 bg-[#002687]"></span>
                ประเภทสมาชิกที่ต้องการลงทะเบียน
              </h2>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="type" 
                    checked={userType === 'buyer'} 
                    onChange={() => setUserType('buyer')}
                    className="w-4 h-4 text-[#002687] focus:ring-[#002687]"
                  />
                  <span className={`text-sm font-semibold ${userType === 'buyer' ? 'text-[#1A1C1E]' : 'text-gray-400'}`}>
                    บุคคลธรรมดา (ผู้ซื้อ)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="type" 
                    checked={userType === 'seller'} 
                    onChange={() => setUserType('seller')}
                    className="w-4 h-4 text-[#002687] focus:ring-[#002687]"
                  />
                  <span className={`text-sm font-semibold ${userType === 'seller' ? 'text-[#1A1C1E]' : 'text-gray-400'}`}>
                    นิติบุคคล / ตัวแทนจำหน่าย (ผู้ขาย)
                  </span>
                </label>
              </div>
            </div>

            {/* --- Section: Basic Information --- */}
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-[#002687] flex items-center gap-3">
                <span className="w-1 h-4 bg-[#002687]"></span>
                ข้อมูลรายละเอียดบัญชี
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {[
                  { label: 'ชื่อ (First Name)', placeholder: 'ระบุชื่อภาษาไทย' },
                  { label: 'นามสกุล (Last Name)', placeholder: 'ระบุนามสกุลภาษาไทย' },
                  { label: 'ที่อยู่อีเมล (Email Address)', placeholder: 'example@domain.com', full: true },
                  { label: 'หมายเลขโทรศัพท์ (Phone Number)', placeholder: '08X-XXX-XXXX', full: true }
                ].map((input, idx) => (
                  <div key={idx} className={`${input.full ? 'md:col-span-2' : ''} flex flex-col gap-2`}>
                    <label className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">{input.label}</label>
                    <input 
                      type="text" 
                      placeholder={input.placeholder}
                      className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#002687] transition-colors placeholder:text-gray-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* --- Section: Seller Verification (Conditional) --- */}
            {userType === 'seller' && (
              <div className="p-8 bg-gray-50 border border-gray-100 space-y-8 animate-in fade-in duration-500">
                <h2 className="text-sm font-bold text-[#002687] flex items-center gap-3 underline decoration-gray-200 underline-offset-8">
                  ข้อมูลการยืนยันตัวตนสำหรับผู้ขาย
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-gray-600 uppercase">เลขประจำตัวประชาชน / เลขทะเบียนนิติบุคคล</label>
                    <input type="text" className="border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-[#002687]" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-gray-600 uppercase">ที่ตั้งสำนักงาน / ที่อยู่ปัจจุบัน</label>
                    <input type="text" className="border-b border-gray-300 bg-transparent py-2 text-sm outline-none focus:border-[#002687]" />
                  </div>
                </div>
              </div>
            )}

            {/* --- Section: Security --- */}
            <div className="space-y-8 pt-4">
              <h2 className="text-sm font-bold text-[#002687] flex items-center gap-3">
                <span className="w-1 h-4 bg-[#002687]"></span>
                ความปลอดภัยของบัญชี
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-600 uppercase">กำหนดรหัสผ่าน (Password)</label>
                  <input type="password" underline-none className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#002687]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-gray-600 uppercase">ยืนยันรหัสผ่าน (Confirm Password)</label>
                  <input type="password" underline-none className="border-b border-gray-300 py-2 text-sm outline-none focus:border-[#002687]" />
                </div>
              </div>
            </div>

            {/* --- Legal & Consent --- */}
            <div className="bg-gray-50 p-6 rounded-sm flex items-start gap-4 border border-gray-100">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-[#002687]" required />
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                ข้าพเจ้าตกลงยินยอมให้ข้อมูลข้างต้นแก่บริษัทฯ และยอมรับ 
                <Link href="/Policy/Service" className="text-[#002687] font-bold mx-1 hover:underline">ข้อตกลงและเงื่อนไขการใช้บริการ</Link> 
                รวมถึง <Link href="/Policy/PDPA" className="text-[#002687] font-bold mx-1 hover:underline">นโยบายความเป็นส่วนตัว</Link> 
                เพื่อตรวจสอบความถูกต้องของข้อมูลและดำเนินการเปิดบัญชีผู้ใช้งานตามระเบียบของทางบริษัทฯ
              </p>
            </div>

            {/* --- Submit Action --- */}
            <div className="flex justify-center pt-6">
              <button className="px-20 py-4 bg-[#002687] text-white text-sm font-bold tracking-widest hover:bg-[#001D6E] transition-all shadow-md active:bg-black">
                ลงทะเบียนสมาชิก
              </button>
            </div>
          </form>
        </div>
      </main>

  
    </div>
  );
}