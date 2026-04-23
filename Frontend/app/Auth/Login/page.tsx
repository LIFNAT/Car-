'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaApple, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
  
export default function Login() {
  const router = useRouter();
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center font-sans">
      {/* Background Hero Image Section */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('https://i.pinimg.com/originals/7c/b7/df/7cb7dfc196f8e48cb206b4d59ccb4b19.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Subtle Overlay */}
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Branding */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-7xl lg:text-8xl font-black italic tracking-tighter">
            CarPlus
          </h1>
          <p className="text-2xl lg:text-3xl font-bold mt-2">
            ซื้อ-ขาย รถมือสอง
          </p>
        </div>

        {/* Right Side: Dark Blue Login Card */}
        <div className="w-full max-w-md bg-[#002687] p-8 rounded-sm shadow-2xl">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            เข้าสู่ระบบ
          </h2>

          <form className="space-y-5" action="#" method="POST">
            <div>
              <label className="block text-xs font-semibold text-white mb-1">
                ชื่อผู้ใช้ / Email
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 bg-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-white mb-1">
                รหัสผ่าน
              </label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 bg-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button type="button" className="absolute right-3 top-8 text-gray-400">
                {/* Password View Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#007BFF] hover:bg-blue-600 text-white font-bold rounded-md transition duration-200"
            >
              เข้าสู่ระบบ
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-blue-800"></div>
              <span className="mx-4 text-xs text-blue-200">เข้าสู่ระบบด้วย</span>
              <div className="flex-grow border-t border-blue-800"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"><FaGoogle /></div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer text-blue-700 font-bold"><FaFacebookF /></div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"><FaApple /></div>
            </div>

            <p className="text-center text-xs text-white mt-8">
              ยังไม่ได้ลงทะเบียน ? 
              <Link href="/Auth/Register" className="text-yellow-400 hover:underline">
                ลงทะเบียน
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Blue Footer Section (Matches bottom of image) */}
    <footer className="absolute bottom-0 w-full bg-[#001D6E]/90 backdrop-blur-md border-t border-white/10 py-8 px-6 lg:px-16 text-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "ความปลอดภัย", desc: "เช็ครถได้ตลอด 24 ชั่วโมง พร้อมระบบตรวจสอบ" },
      { title: "การันตีคืนเงิน", desc: "มั่นใจได้ 100% คืนเงินทันทีเมื่อตรวจสอบพบการทุจริต" },
      { title: "บริการดูแล", desc: "มีทีมงานคนกลางคอยดูแลทุกขั้นตอนการซื้อ-ขาย" }
    ].map((item, i) => (
      <div key={i} className="flex flex-col space-y-2 border-l border-blue-500/50 pl-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">
          {item.title}
        </h4>
        <p className="text-[11px] text-blue-100 leading-relaxed opacity-80">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
  
  {/* ส่วนลิขสิทธิ์ด้านล่างสุด */}
  <div className="mt-8 pt-4 border-t border-white/5 text-center text-[10px] text-white/40">
    © 2024 CarPlus Thailand. All rights reserved.
  </div>
</footer>
      </div>
    
  );
}