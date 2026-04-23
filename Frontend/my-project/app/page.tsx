"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaSearch, FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa";

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

  // State สำหรับเก็บค่าที่เลือก
  const [selectedCarTypes, setSelectedCarTypes] = useState<string[]>([]);
  const [selectedSellers, setSelectedSellers] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGear, setSelectedGear] = useState<string>("ทั้งหมด");

  const toggleFilter = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleCheckboxChange = (value: string, type: "carType" | "seller" | "brand") => {
    if (type === "carType") {
      setSelectedCarTypes((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === "seller") {
      setSelectedSellers((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === "brand") {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  const removeItem = (value: string, type: "carType" | "seller" | "brand") => {
    if (type === "carType") setSelectedCarTypes((prev) => prev.filter((item) => item !== value));
    if (type === "seller") setSelectedSellers((prev) => prev.filter((item) => item !== value));
    if (type === "brand") setSelectedBrands((prev) => prev.filter((item) => item !== value));
  };

  const isChecked = (value: string, type: "carType" | "seller" | "brand"): boolean => {
    if (type === "carType") return selectedCarTypes.includes(value);
    if (type === "seller") return selectedSellers.includes(value);
    if (type === "brand") return selectedBrands.includes(value);
    return false;
  };

  // ฟังก์ชันล้างทั้งหมด
  const clearAllFilters = () => {
    setSelectedCarTypes([]);
    setSelectedSellers([]);
    setSelectedBrands([]);
    setSelectedGear("ทั้งหมด");
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-10 px-4 font-sans text-[#1a1a1a]">
      {/* ใช้ Container ขนาดเดิม */}
      <div className="max-w-[1350px] mx-auto p-4 md:p-8">

        {/* Header Section (โครงเดิม) */}
        <div className="flex justify-between items-center pb-8 border-b border-gray-100 mb-8">
          <h1 className="text-5xl font-extrabold text-blue-600 tracking-tighter">
            Car Shop
          </h1>
          <div className="text-end font-bold leading-tight space-y-1">
            <p className="text-2xl text-slate-900">บริการ ซื้อ-ขายรถ 24 ชั่วโมง</p>
            <p className="text-2xl text-slate-900">ปลอดภัย มั่นใจได้</p>
          </div>
        </div>

        {/* หมวดหมู่ Swiper (โครงเดิม ปรับดีไซน์เล็กน้อย) */}
        <div className="mb-12 relative group ฃ p-8 rounded-2xl ฃ border-gray-100">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-blue-600 rounded-full"></span>
            หมวดหมู่รถยนต์
          </h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 }, // เพิ่มจำนวนแสดงผลเล็กน้อยให้ดูเต็ม
            }}
            className="category-swiper"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer w-full flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 hover:scale-105">
                  <div className="w-full h-[100px] flex items-center justify-center mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="max-w-30 max-h-40 object-contain transition-transform "
                    />
                  </div>
                  <p className="font-semibold text-slate-800 text-center  ">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- ตัวกรองการค้นหา (โครงเดิมที่ได้รับการออกแบบใหม่) --- */}
        <div className="bg-white p-8 md:p-10 shadow-lg rounded-3xl border border-gray-100">
          
          {/* Header Filter (ปรับให้ดูโปรขึ้น) */}
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
              <FaSearch className="text-blue-500 text-xl" />
              ตัวกรองการค้นหา
            </h2>
            <button 
              onClick={clearAllFilters}
              className="text-slate-500 text-sm hover:text-red-500 transition font-medium flex items-center gap-1.5"
            >
              <FaTimes size={12}/> ล้างตัวกรองทั้งหมด
            </button>
          </div>

          <div className="space-y-10">
            {/* 1. รูปแบบการดู & จังหวัด (โครงเดิม ปรับ UI) */}
            <section>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                1. พื้นที่และรูปแบบการดู
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="flex-1 px-6 py-3.5 text-sm rounded-xl border border-blue-200 font-semibold bg-blue-50 text-blue-700 transition hover:bg-blue-100">
                  ดูรถทุกรุ่นทั่วประเทศ
                </button>
                <div className="relative flex-1">
                  <select
                    className="w-full h-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 text-sm 
                               appearance-none cursor-pointer font-medium text-slate-700
                               focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 
                               hover:border-gray-300 transition-all duration-200"
                  >
                    <option value="">เลือกจังหวัดที่คุณต้องการ</option>
                    <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                    <option value="ชลบุรี">ชลบุรี</option>
                    <option value="เชียงใหม่">เชียงใหม่</option>
                    <option value="ขอนแก่น">ขอนแก่น</option>
                    <option value="นครราชสีมา">นครราชสีมา</option>
                    <option value="สงขลา">สงขลา</option>
                    <option value="ภูเก็ต">ภูเก็ต</option>
                    <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                    <option value="อุบลราชธานี">อุบลราชธานี</option>
                    <option value="เมืองอุตสาหกรรม">เมืองอุตสาหกรรม</option>
                    <option value="เมืองอุตสาหกรรม">เมืองอุตสาหกรรม</option>
                    
                  </select>
                  <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 2. ช่วงราคา (โครงเดิม ปรับ UI) */}
            <section>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  2. งบประมาณ (บาท)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">ต่ำสุด</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-16 pr-4 text-sm font-semibold focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">สูงสุด</span>
                  <input
                    type="number"
                    placeholder="ไม่จำกัด"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-16 pr-4 text-sm font-semibold focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition"
                  />
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. ประเภทรถ & ยี่ห้อ (โครงเดิมที่ปรับเป็น Chip-style ให้ดูง่าย) */}
            <section className="space-y-10">
              {[
                { 
                  title: "3. ประเภทคนขาย", 
                  key: "seller" as const, 
                  options: ["รถบ้าน", "มือแรก", "มือสอง", "ดีลเลอร์", "บริษัท", "รถนำเข้า"],
                  selected: selectedSellers 
                },
                { 
                  title: "4. ยี่ห้อรถยอดนิยม", 
                  key: "brand" as const, 
                  // เพิ่มตัวเลือกให้เต็ม Grid
                  options: ["Toyota", "Honda", "Isuzu", "Mazda", "Ford", "MG", "BYD", "Nissan", "Mitsubishi", "Suzuki", "Mercedes-Benz", "BMW", "Audi"],
                  selected: selectedBrands 
                },
              ].map(({ title, key, options, selected }) => (
                <div key={key}>
                  <div
                    onClick={() => toggleFilter(title)}
                    className="flex justify-between items-center cursor-pointer group mb-5"
                  >
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition">
                      {title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {selected.length > 0 && (
                        <span className="text-xs font-bold bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                          {selected.length}
                        </span>
                      )}
                      {openFilter === title ? (
                        <FaChevronUp className="text-gray-400 text-xs transition group-hover:text-blue-600" />
                      ) : (
                        <FaChevronDown className="text-gray-400 text-xs transition group-hover:text-blue-600" />
                      )}
                    </div>
                  </div>

                  {/* เนื้อหา Dropdown ที่ปรับปรุง UI */}
                  {openFilter === title && (
                    <div className="bg-slate-50/50 rounded-2xl p-6 border border-gray-100 mt-2">
                      {/* ใช้ Grid 2 คอลัมน์บนมือถือ 4 คอลัมน์บนจอใหญ่ เพื่อความระเบียบ */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {options.map((item) => {
                          const checked = isChecked(item, key);
                          return (
                            <label
                              key={item}
                              className={`group flex items-center justify-between space-x-3 cursor-pointer px-5 py-3 rounded-xl border transition-all duration-200 ${
                                checked 
                                  ? "bg-blue-600 border-blue-600 shadow-md shadow-blue-100" 
                                  : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                              }`}
                            >
                              <span
                                className={`text-sm font-semibold transition ${
                                  checked ? "text-white" : "text-slate-700"
                                }`}
                              >
                                {item}
                              </span>
                              {/* ซ่อน checkbox จริง แต่ใช้สไตล์ของ Label แทน */}
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => handleCheckboxChange(item, key)}
                                className="sr-only" // ซ่อน checkbox เดิม
                              />
                              {/* แสดงเครื่องหมายติ๊กถูกเมื่อเลือก */}
                              {checked && (
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* แสดง Tag ที่เลือกแล้ว (โครงเดิม ปรับ UI) */}
                  {selected.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 px-1">
                      {selected.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1.5 bg-gray-100 text-slate-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gray-200"
                        >
                          {item}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeItem(item, key);
                            }}
                            className="ml-1 text-gray-400 hover:text-red-500 transition"
                          >
                            <FaTimes size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            <hr className="border-gray-100" />

            {/* 5. ระบบเกียร์ (โครงเดิม ปรับ UI ให้ดูง่าย) */}
            <section>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                5. ระบบเกียร์
              </h3>
              <div className="flex flex-wrap gap-3">
                {["ทั้งหมด", "Auto", "Manual"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedGear(t)}
                    className={`px-8 py-3 text-sm rounded-full border font-semibold transition-all duration-200 ${
                      selectedGear === t
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* Search Button (โครงเดิม ปรับ UI ให้เด่นขึ้น) */}
            <button className="group relative h-14 w-full flex items-center justify-center overflow-hidden rounded-2xl bg-blue-600 px-10 font-bold text-lg text-white duration-300 hover:bg-blue-700 mt-6 shadow-lg shadow-blue-100 active:scale-[0.98]">
              <div className="flex items-center gap-3 translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                <FaSearch />
                ค้นหารถยนต์
              </div>
              <div className="absolute flex items-center gap-3 translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <FaSearch className="text-white text-xl" />
               
              </div>
            </button>
          </div>
        </div>
        
        {/* Footer แนะนำตัว (Optional) */}
       
      </div>
    </div>
  );
}