"use client";
import { useState } from "react";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "To‘ldirish majburiy";
    if (!formData.phone.trim()) newErrors.phone = "Telefon raqami majburiy";
    else if (
      !/^(\+998[\s\-]?)?[0-9]{2,3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
        formData.phone
      )
    )
      newErrors.phone = "Telefon raqam noto‘g‘ri";
    if (!formData.email.trim()) newErrors.email = "E-mail majburiy";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "E-mail noto‘g‘ri";
    if (!formData.address.trim()) newErrors.address = "Manzil majburiy";
    if (!formData.message.trim()) newErrors.message = "Xabar majburiy";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSuccess(false);
      return;
    }
    // Bu yerda APIga yuborish kodini yozishingiz mumkin
    setSuccess(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
    setErrors({});
  }

  return (
    <div className="w-full max-w-[770px] mx-auto mt-16 mb-10 sm:px-0 px-2">
      <h2 className="text-2xl font-bold text-[#e48c47] mb-6 text-center">
        Hamkor sifatida qo‘shilish uchun so‘rovnoma
      </h2>
      {success && (
        <div className="p-4 mb-4 font-medium text-center text-green-700 bg-green-100 rounded-lg">
          So'rovnoma muvaffaqiyatli yuborildi! Email orqali javobimizni kuting!
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-[#fffaf7] border border-[#ffe2ca] rounded-2xl shadow-md grid gap-5 sm:p-8 p-4"
        autoComplete="off"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm text-[#e48c47] font-semibold mb-1"
          >
            Salon nomi
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-[#F1F5F9] rounded-md outline-none"
            placeholder="Masalan, Art Beauty"
          />
          {errors.name && (
            <span className="mt-1 text-sm text-red-500">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm text-[#e48c47] font-semibold mb-1"
          >
            Telefon raqam
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 bg-[#F1F5F9] rounded-md outline-none"
            placeholder="+998 90 000 00 00"
          />
          {errors.phone && (
            <span className="mt-1 text-sm text-red-500">{errors.phone}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm text-[#e48c47] font-semibold mb-1"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-[#F1F5F9] rounded-md outline-none"
            placeholder="example@email.com"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-sm text-[#e48c47] font-semibold mb-1"
          >
            Salon manzili
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 bg-[#F1F5F9] rounded-md outline-none"
            placeholder="Masalan, Toshkent, Chilonzor tumani, Chilonzor-9"
          />
          {errors.address && (
            <span className="mt-1 text-sm text-red-500">{errors.address}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm text-[#e48c47] font-semibold mb-1"
          >
            Xabar / Qo‘shimcha ma'lumot
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-[#F1F5F9] rounded-md outline-none min-h-[100px] resize-none"
            placeholder="O‘zingiz yoki saloningiz haqida qisqacha ma'lumot yozing"
          ></textarea>
          {errors.message && (
            <span className="mt-1 text-sm text-red-500">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#e48c47] cursor-pointer hover:bg-[#f3c9a5] text-white font-semibold py-3 px-8 rounded-lg transition mt-2"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}
