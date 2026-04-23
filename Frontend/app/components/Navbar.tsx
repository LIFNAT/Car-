import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">MyLogo</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-200">หน้าหลัก</Link>
          <Link href="/about" className="hover:text-blue-200">เกี่ยวกับเรา</Link>
          <Link href="/Selling" className="hover:text-blue-200">ซื้อรถ</Link>
          <Link href="/Auth/Login" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">เข้าสู่ระบบ</Link>
        </div>
      </div>
    </nav>
  );
}