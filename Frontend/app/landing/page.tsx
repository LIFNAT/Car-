"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaSearch, FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa";

// Styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    name: "SUV",
    img: "https://img.icarcdn.com/one2car-news/body/000000591455_f005c954_719d_4ec2_b534_91c896824f3a.png",
  },
  {
    name: "Sedan",
    img: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Family-Pages/Sedan-Family/Civic-sedan/2026/MY26_Civic-Sedan_Family_Card_Jelly_2x.png?sc_lang=en",
  },
  {
    name: "Pick Up",
    img: "https://www.d-max.isuzu-trucks.com/images/pickup4door/hi-4d-30-front-gray-m.webp",
  },
  {
    name: "Coupe",
    img: "https://vehicle-images.carscommerce.inc/stock-images/chrome/4a4b3740fb7e551b217a0ab3b6b83cba.png",
  },
  {
    name: "EV",
    img: "https://mg-upload.sgp1.cdn.digitaloceanspaces.com/52a1015a945e38fc52c7e1f2f12f0e80.png",
  },
  {
    name: "Sport",
    img: "https://platform.cstatic-images.com/large/in/v2/stock_photos/54611c46-bd32-41a8-96cb-7875fe53c075/90e12aef-8333-44bb-b334-d756dbdb1275.png",
  },
  {
    name: "Van",
    img: "https://itp1.itopfile.com/ImageServer/z_itp_21042021jnto/0/0/1z-z791217064007.webp",
  },
  {
    name: "Motorcycle",
    img: "https://www.ncxhonda.com/motorcycles/storage/app/uploads//Color_Chart/Wave/Motorcycles_Model-Wave110.png",
  },
];

export default function Home() {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  // State Management
  const [selectedSellers, setSelectedSellers] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGear, setSelectedGear] = useState<string>("ทั้งหมด");

  const toggleFilter = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleCheckboxChange = (value: string, type: "seller" | "brand") => {
    if (type === "seller") {
      setSelectedSellers((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === "brand") {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  const removeItem = (value: string, type: "seller" | "brand") => {
    if (type === "seller") setSelectedSellers((prev) => prev.filter((item) => item !== value));
    if (type === "brand") setSelectedBrands((prev) => prev.filter((item) => item !== value));
  };

  const isChecked = (value: string, type: "seller" | "brand"): boolean => {
    if (type === "seller") return selectedSellers.includes(value);
    if (type === "brand") return selectedBrands.includes(value);
    return false;
  };

  const clearAllFilters = () => {
    setSelectedSellers([]);
    setSelectedBrands([]);
    setSelectedGear("ทั้งหมด");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 font-sans text-[#1E293B]">
      <div className="max-w-[1350px] mx-auto p-4 md:p-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-10 border-b border-gray-200 mb-10 gap-6">
          <div>
            <h1 className="text-6xl font-black text-[#002687] tracking-tighter italic">
              CarPlus<span className="text-[#007BFF]">.</span>
            </h1>
            <p className="text-gray-400 font-medium mt-2 tracking-wide uppercase text-xs">Premium Car Marketplace</p>
          </div>
          <div className="text-right font-bold leading-tight">
            <p className="text-2xl text-slate-900 uppercase">Automotive Solutions 24H</p>
            <p className="text-blue-600 font-medium text-sm">Professional • Secure • Trusted</p>
          </div>
        </div>

        {/* Category Swiper with Next.js Image */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#002687] rounded-full"></span>
            ค้นหาตามประเภทรถยนต์
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={6}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="category-swiper !px-2"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer w-full flex flex-col items-center  p-6 rounded-2xl  border-gray-100 transition-all duration-300 ">
                  <div className="relative w-full h-[100px] mb-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 15vw"
                      priority={index < 6}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-bold text-sm text-slate-700 tracking-tight">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Search Filters Section */}
        <div className="bg-white p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[2.5rem] border border-gray-50">
          
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <FaSearch className="text-[#007BFF] text-sm" />
              </div>
              ค้นหารถแบบละเอียด
            </h2>
            <button 
              onClick={clearAllFilters}
              className="text-gray-400 text-xs hover:text-red-500 transition font-bold   flex items-center gap-2"
            >
              <FaTimes /> ล้างทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12">
            
            {/* 1. Location Selection */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">พื้นที่การค้นหา</label>
                <button className="w-full px-6 py-4 text-sm rounded-xl border border-blue-100 font-bold bg-blue-50/50 text-[#007BFF] hover:bg-blue-50 transition-all text-left">
                  แสดงทั้งหมด
                </button>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">จังหวัด</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 px-5 text-sm font-semibold appearance-none focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer">
                    <option value="">เลือกจังหวัดที่คุณต้องการ</option>
                    <option value="Bangkok">กรุงเทพมหานคร</option>
                    <option value="Chonburi">ชลบุรี</option>
                    <option value="ChiangMai">เชียงใหม่</option>
                  </select>
                  <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 text-xs pointer-events-none" />
                </div>
              </div>
            </section>

            {/* 2. Budget Range */}
            <section className="space-y-4">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">งบประมาณที่ต้องการ (บาท)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300 uppercase">Min</span>
                  <input type="number" placeholder="0" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-16 pr-5 text-sm font-bold outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300 uppercase">Max</span>
                  <input type="number" placeholder="ไม่จำกัด" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-16 pr-5 text-sm font-bold outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
              </div>
            </section>

            {/* 3. Dropdown Selection for Sellers & Brands */}
            {[
              { 
                title: "เลือกประเภทผู้ขาย", 
                key: "seller" as const, 
                options: ["รถบ้าน", "มือแรก", "มือสอง", "ดีลเลอร์", "บริษัท", "รถนำเข้า"],
                selected: selectedSellers 
              },
              { 
                title: "เลือกยี่ห้อรถยนต์", 
                key: "brand" as const, 
                options: ["Toyota", "Honda", "Isuzu", "Mazda", "Ford", "MG", "BYD", "Nissan", "Mitsubishi", "BMW", "Mercedes-Benz"],
                selected: selectedBrands 
              },
            ].map(({ title, key, options, selected }) => (
              <section key={key} className="border-t border-gray-50 pt-8">
                <div 
                  onClick={() => toggleFilter(title)}
                  className="flex justify-between items-center cursor-pointer group"
                >
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-[#007BFF] transition-colors">{title}</label>
                  <div className="flex items-center gap-3">
                    {selected.length > 0 && (
                      <span className="text-[10px] font-black bg-[#002687] text-white px-2 py-0.5 rounded-sm">{selected.length}</span>
                    )}
                    {openFilter === title ? <FaChevronUp size={10} className="text-gray-300"/> : <FaChevronDown size={10} className="text-gray-300"/>}
                  </div>
                </div>

                {openFilter === title && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    {options.map((item) => {
                      const active = isChecked(item, key);
                      return (
                        <div 
                          key={item}
                          onClick={() => handleCheckboxChange(item, key)}
                          className={`cursor-pointer px-4 py-3 rounded-xl border-2 text-center transition-all ${
                            active ? 'border-[#007BFF] bg-blue-50/50 text-[#007BFF] font-bold' : 'border-gray-50 hover:border-gray-200 text-gray-500 font-medium text-sm'
                          }`}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Active Tags */}
                {selected.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selected.map(item => (
                      <span key={item} className="flex items-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-600">
                        {item}
                        <FaTimes className="cursor-pointer hover:text-red-500" onClick={() => removeItem(item, key)}/>
                      </span>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* 4. Transmission Selection */}
            <section className="space-y-4 border-t border-gray-50 pt-8">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ระบบเกียร์</label>
              <div className="flex gap-3 mt-5">
                {["ทั้งหมด", "Auto", "Manual"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedGear(t)}
                    className={`px-8 py-3 text-xs font-bold rounded-full border-2 transition-all ${
                      selectedGear === t ? 'bg-[#1E293B] border-[#1E293B] text-white shadow-lg' : 'bg-white border-gray-50 text-gray-400 hover:border-gray-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* Search Button */}
            <button className="w-full h-16 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-3">
              <FaSearch size={18} />
             ค้นหา
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}