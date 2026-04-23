"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";

// ─── Types ───────────────────────────────────────────────
type BadgeType = "ev" | "hot" | "new" | "used";
type GearType = "auto" | "manual";
type FuelType = "gasoline" | "diesel" | "electric" | "hybrid";
type BodyType = "sedan" | "hatchback" | "suv" | "coupe" | "van";
type SortType = "dist" | "priceAsc" | "priceDesc" | "rating";

interface Car {
  id: number;
  name: string;
  sub: string;
  price: number;
  rating: number;
  reviews: number;
  dist: number;
  badge: BadgeType;
  badgeLabel: string;
  body: BodyType;
  gear: GearType;
  fuel: FuelType;
  img: string;
}

// ─── Data ────────────────────────────────────────────────
const CAR_DATA: Car[] = [
  { id: 1, name: "Audi A4", sub: "2.0 TFSI 249 hp, Quattro", price: 24.59, rating: 4.7, reviews: 109, dist: 120, badge: "used", badgeLabel: "มือสอง", body: "sedan", gear: "auto", fuel: "gasoline", img: "/car1.png" },
  { id: 2, name: "Opel Insignia", sub: "2.0 Turbo 230 hp, AWD", price: 19.99, rating: 4.0, reviews: 87, dist: 250, badge: "used", badgeLabel: "มือสอง", body: "sedan", gear: "auto", fuel: "gasoline", img: "/car2.png" },
  { id: 3, name: "Mini Countryman", sub: "Cooper S ALL4 189 hp", price: 28.50, rating: 4.9, reviews: 142, dist: 180, badge: "new", badgeLabel: "ใหม่", body: "suv", gear: "auto", fuel: "gasoline", img: "/car3.png" },
  { id: 4, name: "Mazda 6", sub: "2.5 Turbo 250 hp, AWD", price: 22.99, rating: 5.0, reviews: 764, dist: 90, badge: "hot", badgeLabel: "ยอดนิยม", body: "sedan", gear: "auto", fuel: "gasoline", img: "/car4.png" },
  { id: 5, name: "Cadillac Escalade", sub: "6.2L V8 420 hp, 4WD", price: 24.00, rating: 4.6, reviews: 64, dist: 320, badge: "used", badgeLabel: "มือสอง", body: "suv", gear: "auto", fuel: "gasoline", img: "/car1.png" },
  { id: 6, name: "Ford Focus ST", sub: "2.3 EcoBoost 280 hp, FWD", price: 26.75, rating: 4.7, reviews: 156, dist: 140, badge: "used", badgeLabel: "มือสอง", body: "hatchback", gear: "manual", fuel: "gasoline", img: "/car2.png" },
  { id: 7, name: "Tesla Model S", sub: "Long Range 670 hp, AWD", price: 45.00, rating: 4.1, reviews: 298, dist: 200, badge: "ev", badgeLabel: "EV", body: "sedan", gear: "auto", fuel: "electric", img: "/car3.png" },
  { id: 8, name: "Mazda 3 Hatchback", sub: "2.5 Skyactiv-G 186 hp, FWD", price: 21.99, rating: 5.0, reviews: 987, dist: 150, badge: "hot", badgeLabel: "ยอดนิยม", body: "hatchback", gear: "auto", fuel: "gasoline", img: "/car4.png" },
  { id: 9, name: "VW Tiguan", sub: "2.0 TSI R-Line 184 hp, 4Motion", price: 31.50, rating: 4.6, reviews: 118, dist: 280, badge: "new", badgeLabel: "ใหม่", body: "suv", gear: "auto", fuel: "hybrid", img: "/car1.png" },
];

const BODY_OPTIONS: { value: BodyType; label: string }[] = [
  { value: "sedan", label: "ซีดาน" },
  { value: "hatchback", label: "แฮทช์แบ็ค" },
  { value: "suv", label: "SUV / Crossover" },
  { value: "coupe", label: "คูเป้" },
  { value: "van", label: "Van / MPV" },
];

const FUEL_OPTIONS: { value: FuelType; label: string }[] = [
  { value: "gasoline", label: "น้ำมัน" },
  { value: "diesel", label: "ดีเซล" },
  { value: "electric", label: "ไฟฟ้า (EV)" },
  { value: "hybrid", label: "ไฮบริด" },
];

const BADGE_STYLES: Record<BadgeType, string> = {
  ev:   "bg-blue-50 text-blue-800",
  hot:  "bg-orange-50 text-orange-800",
  new:  "bg-green-50 text-green-800",
  used: "bg-gray-100 text-gray-600",
};

// ─── Sub-components ───────────────────────────────────────

/** Pill toggle button */
const Pill = ({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
      active
        ? "bg-gray-900 text-white border-gray-900"
        : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
    }`}
  >
    {label}
  </button>
);

/** iOS-style toggle switch */
const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    role="switch"
    aria-checked={checked}
    className={`relative w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
      checked ? "bg-gray-900" : "bg-gray-200"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
        checked ? "translate-x-4" : "translate-x-0"
      }`}
    />
  </button>
);

/** Checkbox with custom styling */
const CheckItem = ({
  label, checked, onChange,
}: { label: string; checked: boolean; onChange: () => void }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <div
      onClick={onChange}
      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${
        checked
          ? "bg-gray-900 border-gray-900"
          : "border-gray-300 bg-white group-hover:border-gray-500"
      }`}
    >
      {checked && (
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
          <polyline
            points="1.5,5 4,7.5 8.5,2.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
      {label}
    </span>
  </label>
);

/** Collapsible sidebar section */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-gray-100 pt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full mb-3 text-left"
      >
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
          {title}
        </span>
        <span className={`text-gray-400 text-xs transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && children}
    </div>
  );
};

/** Active filter tag */
const FilterTag = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
    {label}
    <button onClick={onRemove} className="text-gray-400 hover:text-gray-700 leading-none text-sm">
      ×
    </button>
  </div>
);

/** Car card */
const CarCard = ({
  car,
  liked,
  onToggleLike,
}: { car: Car; liked: boolean; onToggleLike: () => void }) => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer group">
    {/* Image */}
    <div className="relative h-36 bg-gray-50">
      <Image src={car.img} alt={car.name} fill className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
      <button
        onClick={(e) => { e.stopPropagation(); onToggleLike(); }}
        className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full border flex items-center justify-center text-xs transition-all ${
          liked
            ? "bg-red-50 border-red-200 text-red-500"
            : "bg-white border-gray-200 text-gray-300 hover:text-red-400 hover:border-red-200"
        }`}
      >
        <FaHeart size={11} />
      </button>
    </div>

    {/* Body */}
    <div className="p-3.5">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${BADGE_STYLES[car.badge]}`}>
          {car.badgeLabel}
        </span>
        <div className="flex items-center gap-1">
          <FaStar className="text-amber-400 text-[10px]" />
          <span className="text-xs font-semibold text-gray-800">{car.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-400">({car.reviews})</span>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 leading-tight">{car.name}</h3>
      <p className="text-[11px] text-gray-400 mt-0.5 mb-3 truncate">{car.sub}</p>

      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
        <div>
          <span className="text-base font-bold text-gray-900">${car.price.toFixed(2)}</span>
          <span className="text-[11px] text-gray-400 ml-1">/ ชม.</span>
        </div>
        <button className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
          ดูข้อมูล
        </button>
      </div>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────
export default function Selling() {
  const [rentType, setRentType]     = useState<string>("all");
  const [availOnly, setAvailOnly]   = useState(false);
  const [priceMin, setPriceMin]     = useState(15);
  const [priceMax, setPriceMax]     = useState(100);
  const [gear, setGear]             = useState<string>("all");
  const [sort, setSort]             = useState<SortType>("dist");
  const [likedIds, setLikedIds]     = useState<Set<number>>(new Set([4, 8]));
  const [bodyFilter, setBodyFilter] = useState<Set<BodyType>>(
    new Set(BODY_OPTIONS.map((b) => b.value))
  );
  const [fuelFilter, setFuelFilter] = useState<Set<FuelType>>(
    new Set(FUEL_OPTIONS.map((f) => f.value))
  );

  const toggleLike = (id: number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleBody = (val: BodyType) => {
    setBodyFilter((prev) => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  };

  const toggleFuel = (val: FuelType) => {
    setFuelFilter((prev) => {
      const next = new Set(prev);
      next.has(val) ? next.delete(val) : next.add(val);
      return next;
    });
  };

  const resetAll = () => {
    setRentType("all");
    setGear("all");
    setPriceMin(15);
    setPriceMax(100);
    setAvailOnly(false);
    setBodyFilter(new Set(BODY_OPTIONS.map((b) => b.value)));
    setFuelFilter(new Set(FUEL_OPTIONS.map((f) => f.value)));
  };

  const filtered = useMemo(() => {
    let list = CAR_DATA.filter((c) => {
      if (!bodyFilter.has(c.body)) return false;
      if (!fuelFilter.has(c.fuel)) return false;
      if (c.price < priceMin || c.price > priceMax) return false;
      if (gear !== "all" && c.gear !== gear) return false;
      return true;
    });
    if (sort === "dist")      list = [...list].sort((a, b) => a.dist - b.dist);
    if (sort === "priceAsc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating")    list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [bodyFilter, fuelFilter, priceMin, priceMax, gear, sort]);

  // Active filter tags
  const activeTags: { label: string; onRemove: () => void }[] = [];
  if (gear !== "all") activeTags.push({
    label: gear === "auto" ? "เกียร์อัตโนมัติ" : "เกียร์ธรรมดา",
    onRemove: () => setGear("all"),
  });
  const disabledBody = BODY_OPTIONS.filter((b) => !bodyFilter.has(b.value));
  if (disabledBody.length) activeTags.push({
    label: `ยกเว้น: ${disabledBody.map((b) => b.label).join(", ")}`,
    onRemove: () => setBodyFilter(new Set(BODY_OPTIONS.map((b) => b.value))),
  });
  const disabledFuel = FUEL_OPTIONS.filter((f) => !fuelFilter.has(f.value));
  if (disabledFuel.length) activeTags.push({
    label: `ยกเว้น: ${disabledFuel.map((f) => f.label).join(", ")}`,
    onRemove: () => setFuelFilter(new Set(FUEL_OPTIONS.map((f) => f.value))),
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ═══ SIDEBAR ═══ */}
      <aside className="w-[220px] shrink-0 bg-white border-r border-gray-100 px-5 py-6 sticky top-0 h-screen overflow-y-auto flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-800">ค้นหารถ</span>
          <button
            onClick={resetAll}
            className="text-[11px] text-gray-400 hover:text-red-500 transition-colors"
          >
            ล้างทั้งหมด ×
          </button>
        </div>

        {/* Rental Type */}
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
            ประเภทการเช่า
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[{ v: "all", l: "ทั้งหมด" }, { v: "hour", l: "รายชั่วโมง" }, { v: "day", l: "รายวัน" }].map(({ v, l }) => (
              <Pill key={v} label={l} active={rentType === v} onClick={() => setRentType(v)} />
            ))}
          </div>
        </div>

        {/* Available Now */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">ว่างตอนนี้เท่านั้น</span>
          <Toggle checked={availOnly} onChange={() => setAvailOnly((p) => !p)} />
        </div>

        {/* Price Range */}
        <Section title="ช่วงราคา / ชั่วโมง ($)">
          <div className="flex gap-2">
            <div className="flex-1 border border-gray-200 rounded-lg px-2.5 py-2">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">ต่ำสุด</p>
              <input
                type="number"
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="w-full text-sm font-semibold text-gray-900 bg-transparent outline-none"
              />
            </div>
            <div className="flex-1 border border-gray-200 rounded-lg px-2.5 py-2">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">สูงสุด</p>
              <input
                type="number"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full text-sm font-semibold text-gray-900 bg-transparent outline-none"
              />
            </div>
          </div>
        </Section>

        {/* Body Type */}
        <Section title="ประเภทรถ">
          <div className="grid grid-cols-1 gap-2">
            {BODY_OPTIONS.map(({ value, label }) => (
              <CheckItem
                key={value}
                label={label}
                checked={bodyFilter.has(value)}
                onChange={() => toggleBody(value)}
              />
            ))}
          </div>
        </Section>

        {/* Transmission */}
        <Section title="ระบบเกียร์">
          <div className="flex flex-wrap gap-1.5">
            {[{ v: "all", l: "ทั้งหมด" }, { v: "auto", l: "อัตโนมัติ" }, { v: "manual", l: "ธรรมดา" }].map(({ v, l }) => (
              <Pill key={v} label={l} active={gear === v} onClick={() => setGear(v)} />
            ))}
          </div>
        </Section>

        {/* Fuel Type */}
        <Section title="เชื้อเพลิง">
          <div className="grid grid-cols-1 gap-2">
            {FUEL_OPTIONS.map(({ value, label }) => (
              <CheckItem
                key={value}
                label={label}
                checked={fuelFilter.has(value)}
                onChange={() => toggleFuel(value)}
              />
            ))}
          </div>
        </Section>
      </aside>

      {/* ═══ MAIN ═══ */}
      <main className="flex-1 px-6 py-6 min-w-0">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-900">
            {filtered.length} คัน
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">เรียงตาม</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortType)}
              className="text-sm border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white text-gray-700 outline-none cursor-pointer"
            >
              <option value="dist">ใกล้ที่สุด</option>
              <option value="priceAsc">ราคา ต่ำ → สูง</option>
              <option value="priceDesc">ราคา สูง → ต่ำ</option>
              <option value="rating">คะแนนสูงสุด</option>
            </select>
          </div>
        </div>

        {/* Active filter tags */}
        {activeTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeTags.map((tag, i) => (
              <FilterTag key={i} label={tag.label} onRemove={tag.onRemove} />
            ))}
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {filtered.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                liked={likedIds.has(car.id)}
                onToggleLike={() => toggleLike(car.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-sm">ไม่พบรถที่ตรงกับเงื่อนไข</p>
            <button
              onClick={resetAll}
              className="mt-3 text-sm text-blue-500 hover:underline"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </main>
    </div>
  );
}