"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

// Zamonaviy Toast (gradient, soyali, icon, blur)
function Toast({ open, message }) {
  if (!open) return null;
  return (
    <div
      className="fixed bottom-7 left-1/2 z-[100] -translate-x-1/2 min-w-[220px]
      flex gap-2 items-center px-6 py-3
      rounded-2xl shadow-2xl backdrop-blur-md
      bg-gradient-to-br from-[#e47c48] to-[#e47c48]/90
      border border-[#e47c48]/60 animate-fadein"
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e47c48] bg-opacity-80 shadow">
        <svg width="24" height="24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#fff" />
          <path
            d="M7 13l3 3 7-8"
            stroke="#e47c48"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-white font-bold text-[1rem] tracking-tight">
        {message}
      </span>
    </div>
  );
}

const tumans = [
  "Chilonzor",
  "Yunusobod",
  "Mirobod",
  "Mirzo-Ulug‘bek",
  "Olmazor",
  "Uchtepa",
  "Yakkasaroy",
  "Yashnobod",
  "Sergeli",
  "Bektemir",
  "Shayxontohur",
  "Yangi Hayot",
];
const salons = [
  {
    id: 1,
    name: "Diamond SPA & Beauty",
    district: "Chilonzor",
    address: "Chilonzor tumani, Bunyodkor shoh ko'chasi, 11",
  },
  {
    id: 2,
    name: "Lux Beauty",
    district: "Chilonzor",
    address: "Chilonzor tumani, Qatortol ko'chasi, 45",
  },
  {
    id: 3,
    name: "BeautyLash",
    district: "Chilonzor",
    address: "Chilonzor tumani, Talabalar ko'chasi, 18",
  },
  {
    id: 4,
    name: "5th Avenue Beauty Salon",
    district: "Yunusobod",
    address: "Yunusobod tumani, Osiyo ko'chasi, Minor 88",
  },
  {
    id: 5,
    name: "Art Avenue Salon",
    district: "Yunusobod",
    address: "Yunusobod tumani, Ayribeka ko'chasi, 55",
  },
  {
    id: 6,
    name: "Nika Beauty",
    district: "Yunusobod",
    address: "Yunusobod tumani, Bog'ishamol ko'chasi, 8",
  },
  {
    id: 7,
    name: "Alfa Style Beauty Salon",
    district: "Mirobod",
    address: "Mirobod tumani, Mirabad bozori",
  },
  {
    id: 8,
    name: "Alina Prof Beauty Salon",
    district: "Mirobod",
    address: "Mirobod tumani, Shahrisabz ko'chasi, 6",
  },
  {
    id: 9,
    name: "Anisa Beauty Salon",
    district: "Mirobod",
    address: "Mirobod tumani, Aybek ko'chasi, 15",
  },
  {
    id: 10,
    name: "Aesthetic Island Spa",
    district: "Mirzo-Ulug‘bek",
    address: "Mirzo-Ulug‘bek tumani, Mustakillik ave, 6",
  },
  {
    id: 11,
    name: "Beauty Salon 2012",
    district: "Mirzo-Ulug‘bek",
    address: "Mirzo-Ulug‘bek tumani, Mustakillik pr-t, 79",
  },
  {
    id: 12,
    name: "Studio 026",
    district: "Mirzo-Ulug‘bek",
    address: "Mirzo-Ulug‘bek tumani, Zarafshan ko'chasi, 1",
  },
  {
    id: 13,
    name: "Express Beauty",
    district: "Olmazor",
    address: "Olmazor tumani, G‘afur G‘ulom ko'chasi, 20",
  },
  {
    id: 14,
    name: "VIP Beauty",
    district: "Olmazor",
    address: "Olmazor tumani, Sebzor 35",
  },
  {
    id: 15,
    name: "Bosco Beauty Club",
    district: "Yakkasaroy",
    address: "Yakkasaroy tumani, Elbek ko'chasi, 15",
  },
  {
    id: 16,
    name: "The Beauty Bar at Hyatt",
    district: "Yakkasaroy",
    address: "Yakkasaroy, Amir Temur ko'chasi",
  },
  {
    id: 17,
    name: "Sunrise Spa",
    district: "Yashnobod",
    address: "Yashnobod tumani, Parkent ko'chasi, 7",
  },
  {
    id: 18,
    name: "Dolce Vita",
    district: "Yashnobod",
    address: "Yashnobod tumani, Bog' ko'chasi, 14",
  },
  {
    id: 19,
    name: "Malika Studio",
    district: "Shayxontohur",
    address: "Shayxontohur tumani, Zarqaynar ko'chasi, 3",
  },
  {
    id: 20,
    name: "Qizlar Beauty",
    district: "Shayxontohur",
    address: "Shayxontohur tumani, Labzak ko'chasi, 8",
  },
  {
    id: 21,
    name: "Dream Salon",
    district: "Uchtepa",
    address: "Uchtepa tumani, Shirin ko'chasi, 41",
  },
  {
    id: 22,
    name: "Eva Beauty",
    district: "Uchtepa",
    address: "Uchtepa tumani, Paxtakor ko'chasi, 2",
  },
  {
    id: 23,
    name: "Amina Studio",
    district: "Sergeli",
    address: "Sergeli tumani, Maxtumquli ko'chasi, 17",
  },
  {
    id: 24,
    name: "Zebo Beauty",
    district: "Sergeli",
    address: "Sergeli tumani, Choshtepa ko'chasi, 22",
  },
  {
    id: 25,
    name: "Bektemir Beauty",
    district: "Bektemir",
    address: "Bektemir tumani, Tashkent ring yo'li, 11",
  },
  {
    id: 26,
    name: "Hayot Beauty",
    district: "Yangi Hayot",
    address: "Yangi Hayot tumani, Yangihayot ko'chasi, 9",
  },
  {
    id: 27,
    name: "Lotus Beauty Lab",
    district: "Olmazor",
    address: "Olmazor tumani, G‘afur G‘ulom ko‘chasi, 9A",
  },
];
const timesMorning = ["09:00", "10:30", "12:00"];
const timesDay = ["13:00", "14:30", "16:00"];
const timesEvening = ["17:30", "19:00", "20:30"];
const timeFilters = [
  { label: "Har qanday vaqt", value: "all" },
  { label: "Ertalab", value: "morning" },
  { label: "Kunduzi", value: "day" },
  { label: "Kechqurun", value: "evening" },
];
function getTimesByFilter(filter) {
  if (filter === "morning") return timesMorning;
  if (filter === "day") return timesDay;
  if (filter === "evening") return timesEvening;
  return [...timesMorning, ...timesDay, ...timesEvening];
}
const getDates = (count = 7) => {
  const arr = [];
  const d = new Date();
  for (let i = 0; i < count; i++) {
    const n = new Date(d);
    n.setDate(d.getDate() + i);
    arr.push(n.toISOString().slice(0, 10));
  }
  return arr;
};
function formatDateUz(dateStr) {
  const date = new Date(dateStr);
  const opts = { weekday: "short", day: "numeric", month: "long" };
  return date.toLocaleDateString("uz-UZ", opts);
}

// Random demo bandlar (sahifa ochilganda yoki reloadda har doim boshqacha)
function randomDemoBookings() {
  const dates = getDates();
  const times = [...timesMorning, ...timesDay, ...timesEvening];
  let bookings = [];
  // 10–14 ta random band slot
  let n = 10 + Math.floor(Math.random() * 5);
  for (let i = 0; i < n; i++) {
    const salonId = salons[Math.floor(Math.random() * salons.length)].id;
    const date = dates[Math.floor(Math.random() * dates.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    // Dublikat bo‘lib qolmasin:
    if (
      !bookings.find(
        (b) => b.salonId === salonId && b.date === date && b.time === time
      )
    ) {
      bookings.push({ salonId, date, time });
    }
  }
  return bookings;
}

export default function MultiStepBookingModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [date, setDate] = useState(getDates()[0]);
  const [filter, setFilter] = useState("all");
  const [selectedTime, setSelectedTime] = useState("");

  // LocalStorage + random demo bandlar
  const [bookedSlots, setBookedSlots] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("myBookings");
    const demo = localStorage.getItem("demoBookings");
    if (!demo) {
      const demoArr = randomDemoBookings();
      localStorage.setItem("demoBookings", JSON.stringify(demoArr));
      return saved ? [...JSON.parse(demoArr), ...JSON.parse(saved)] : demoArr;
    }
    return saved
      ? [...JSON.parse(demo), ...JSON.parse(saved)]
      : JSON.parse(demo);
  });

  // Toast
  const [toast, setToast] = useState({ open: false, message: "" });

  // Har safar bookedSlots o‘zgarsa localStorage’ga yoz
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Faqat user bookinglarini yozamiz (demo bookings emas)
      const myBookings = bookedSlots.filter((b) => b.my);
      localStorage.setItem("myBookings", JSON.stringify(myBookings));
    }
  }, [bookedSlots]);

  // Demo bookinglar localda saqlansin va faqat bir marta yaratiladi
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("demoBookings")
    ) {
      const demoArr = randomDemoBookings();
      localStorage.setItem("demoBookings", JSON.stringify(demoArr));
    }
  }, []);

  const filteredSalons = selectedDistrict
    ? salons.filter((s) => s.district === selectedDistrict).slice(0, 7)
    : [];

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSelectedDistrict("");
      setSelectedSalon(null);
      setSelectedTime("");
      setDate(getDates()[0]);
      setFilter("all");
    }
  }, [open]);

  useEffect(() => {
    if (toast.open) {
      const t = setTimeout(() => setToast({ open: false, message: "" }), 2500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  function handleDistrictSelect(e) {
    setSelectedDistrict(e.target.value);
    setSelectedSalon(null);
    setStep(2);
  }
  function handleSalonSelect(salon) {
    setSelectedSalon(salon);
    setStep(3);
    setSelectedTime("");
  }
  function handleBack() {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
    else onClose();
  }
  function handleBook() {
    if (!selectedTime) return;
    setBookedSlots([
      ...bookedSlots,
      { salonId: selectedSalon.id, date, time: selectedTime, my: true },
    ]);
    setToast({ open: true, message: "Siz uchun joy band qilindi!" });
    setTimeout(() => {
      setStep(1);
      setSelectedDistrict("");
      setSelectedSalon(null);
      setSelectedTime("");
      setDate(getDates()[0]);
      setFilter("all");
      onClose();
    }, 2500);
  }
  function isTimeBooked(time) {
    return bookedSlots.some(
      (b) =>
        b.salonId === selectedSalon?.id && b.date === date && b.time === time
    );
  }
  // Bu foydalanuvchi o‘zi qilgan bandmi?
  function isMyBooking(time) {
    if (typeof window === "undefined") return false;
    const myBookings = bookedSlots.filter((b) => b.my);
    return myBookings.some(
      (b) =>
        b.salonId === selectedSalon?.id && b.date === date && b.time === time
    );
  }

  return (
    <>
      <Toast open={toast.open} message={toast.message} />
      {!open ? null : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadein">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] p-7 max-h-[95vh] overflow-y-auto relative border border-[#f6e2d1]">
            <button
              aria-label="Yopish"
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-[#e47c48] hover:text-[#cf703d] font-bold transition-colors duration-150 cursor-pointer"
            >
              ×
            </button>
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 px-2 py-1 text-[#e47c48] text-lg rounded hover:bg-[#f8e7df] transition cursor-pointer"
            >
              {step > 1 ? "←" : ""}
            </button>

            {/* Step 1: Tuman tanlash */}
            {step === 1 && (
              <>
                <h2 className="mb-3 text-2xl font-bold text-center text-[#e47c48]">
                  Bron qilish
                </h2>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-[#e47c48]">
                    Tumaningizni tanlang
                  </label>
                  <select
                    className="block w-full px-3 py-2 rounded-lg border border-[#e47c48] text-[#3b2f23] focus:ring-2 focus:ring-[#e47c48] transition"
                    value={selectedDistrict}
                    onChange={handleDistrictSelect}
                  >
                    <option value="">Tuman tanlanmagan</option>
                    {tumans.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Step 2: Salon tanlash */}
            {step === 2 && (
              <>
                <h2 className="mb-3 text-xl font-bold text-center text-[#e47c48]">
                  {selectedDistrict} tumanidagi salonlar
                </h2>
                <ul className="grid gap-2 mb-3">
                  {filteredSalons.length === 0 && (
                    <li className="text-sm text-[#c93131]">
                      Afsuski, bu tuman uchun salonlar topilmadi.
                    </li>
                  )}
                  {filteredSalons.map((s) => (
                    <li
                      key={s.id}
                      className="px-3 py-2 bg-[#faf2e7] rounded-lg shadow flex flex-col gap-1 cursor-pointer hover:bg-[#ffe0ce] transition"
                      onClick={() => handleSalonSelect(s)}
                    >
                      <span className="font-medium text-[#222]">{s.name}</span>
                      <span className="text-xs text-[#a84617]">
                        {s.address}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-2 w-full py-2 rounded bg-[#ececec] text-[#e47c48] font-semibold shadow hover:bg-[#ffe0ce] transition-colors"
                  onClick={() => setStep(1)}
                >
                  Tumanini o‘zgartirish
                </button>
              </>
            )}

            {/* Step 3: Sana/vaqt/bron qilish */}
            {step === 3 && selectedSalon && (
              <>
                <h2 className="mb-2 text-xl font-bold text-center text-[#e47c48]">
                  {selectedSalon.name}
                </h2>
                <div className="text-center text-sm text-[#a84617] mb-3">
                  {selectedSalon.address}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {getDates().map((d) => (
                    <button
                      key={d}
                      className={classNames(
                        "px-3 py-1 rounded-full text-sm border font-medium transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-[#e47c48]",
                        date === d
                          ? "bg-[#e47c48] text-white border-[#e47c48] shadow cursor-pointer"
                          : "bg-white text-[#333] border-gray-200 hover:bg-[#ffe0ce] cursor-pointer"
                      )}
                      aria-label={formatDateUz(d)}
                      onClick={() => {
                        setDate(d);
                        setSelectedTime("");
                      }}
                      tabIndex={0}
                    >
                      {formatDateUz(d)}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {timeFilters.map((tf) => (
                    <button
                      key={tf.value}
                      className={classNames(
                        "px-3 py-1 rounded-full text-sm border font-medium transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-[#e47c48]",
                        filter === tf.value
                          ? "bg-[#e47c48] text-white border-[#e47c48] shadow cursor-pointer"
                          : "bg-white text-[#333] border-gray-200 hover:bg-[#ffe0ce] cursor-pointer"
                      )}
                      onClick={() => {
                        setFilter(tf.value);
                        setSelectedTime("");
                      }}
                      tabIndex={0}
                    >
                      {tf.label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {getTimesByFilter(filter).map((time) => (
                    <button
                      key={time}
                      aria-label={`Bron qilish: ${time}`}
                      className={classNames(
                        "py-2 rounded-xl font-semibold transition-all duration-150 text-base text-center focus:outline-none focus:ring-2 focus:ring-[#e47c48] select-none",
                        selectedTime === time
                          ? "bg-[#e47c48] text-white font-bold shadow"
                          : isMyBooking(time)
                          ? "bg-gradient-to-r from-[#e47c48] to-[#f7974e] text-white font-bold shadow cursor-not-allowed animate-pulse"
                          : isTimeBooked(time)
                          ? "bg-[#ffeaea] text-[#c93131] line-through cursor-not-allowed"
                          : "bg-[#d1fadd] text-[#118946] hover:bg-[#bff3d6] hover:text-[#0a6242] shadow cursor-pointer"
                      )}
                      style={{ minWidth: 0 }}
                      disabled={isTimeBooked(time)}
                      onClick={() => setSelectedTime(time)}
                      tabIndex={0}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {/* Yordamchi yozuvlar */}
                <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3 text-xs text-center text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block w-3 h-3 rounded bg-[#d1fadd]" />{" "}
                    Bo'sh
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block w-3 h-3 rounded bg-[#ffeaea]" />{" "}
                    Band
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block w-3 h-3 rounded bg-gradient-to-r from-[#e47c48] to-[#f7974e]" />{" "}
                    Sizning broningiz
                  </span>
                </div>

                {/* Yakuniy bron tugmasi */}
                <button
                  className={classNames(
                    "w-full py-2 rounded-lg font-semibold transition-colors text-white mt-2 cursor-pointer",
                    selectedTime
                      ? "bg-[#e47c48] hover:bg-[#cf703d] shadow"
                      : "bg-[#edd1c0] cursor-not-allowed"
                  )}
                  disabled={!selectedTime}
                  onClick={handleBook}
                >
                  Bron qilish
                </button>
                {/* Orqaga tugmasi */}
                <button
                  className="w-full py-1 rounded text-[#e47c48] font-medium mt-1 cursor-pointer hover:underline"
                  onClick={() => setStep(2)}
                >
                  ← Oldingi qismga qaytish
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
