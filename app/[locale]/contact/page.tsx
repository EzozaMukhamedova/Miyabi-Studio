// "use client";
// import { Link } from "@/i18n/navigation";
// import React, { useState } from "react";
// import { useTranslations } from "next-intl";
// import { ChevronDown } from "lucide-react";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   TelegramIcon,
//   TwitterIcon,
//   YouTubeIcon,
// } from "@/assets/icons";

// import "react-toastify/dist/ReactToastify.css";
// import { toast, Toaster } from "react-hot-toast";

// const districts = [
//   "Chilonzor tumani",
//   "Olmazor tumani",
//   "Shayxontohur tumani",
//   "Mirzo Ulug'bek tumani",
//   "Sergeli tumani",
//   "Yashnobod tumani",
//   "Yakkasaroy tumani",
//   "Yunusobod tumani",
//   "Uchtepa tumani",
// ];

// const Contact = () => {
//   const tProducts = useTranslations("Products");
//   const tContact = useTranslations("Contact");
//   const [open, setOpen] = useState(false);

//   const [formData, setFormData] = useState<{ [key: string]: string }>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   // const [formData, setFormData] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   phone: "",
//   //   email: "",
//   //   message: "",
//   // });

//   const [errors, setErrors] = useState<any>({});

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validate = () => {
//     const newErrors: any = {};
//     Object.entries(formData).forEach(([key, value]) => {
//       if (!value.trim()) {
//         newErrors[key] = tContact("required");
//       }
//     });
//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     toast.success(tContact("submitSuccess"));
//     setFormData({
//       firstName: "",
//       lastName: "",
//       phone: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="my-12 containers">
//       {/* Breadcrumb */}
//       <div className="flex gap-[15px] mt-[20px] mb-[22px]">
//         <Link className="text-[15px] text-[#b6babf]" href={"/"}>
//           {tProducts("main")} <span>/</span>
//         </Link>
//         <Link className="text-[15px] text-[#b6babf]" href={"/contact"}>
//           {tProducts("contact")} <span>/</span>
//         </Link>
//       </div>

//       {/* Title */}
//       <h2 className="text-[28px] md:text-[32px] font-bold mb-4 text-[#0A1729]">
//         {tContact("title")}
//       </h2>
//       <p className="text-[#545D6A] mb-8 max-w-[600px]">
//         {tContact("description")}
//       </p>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1  md:grid-cols-2 gap-4 max-w-[690px] w-full sm:mb-[127px]"
//       >
//         {["firstName", "lastName", "phone", "email"].map((field) => (
//           <div className="flex flex-col" key={field}>
//             <label htmlFor={field} className="text-sm text-[#94A3B8] mb-1">
//               {tContact(field)}
//             </label>
//             <input
//               id={field}
//               name={field}
//               type={
//                 field === "email" ? "email" : field === "phone" ? "tel" : "text"
//               }
//               value={formData[field]}
//               onChange={handleChange}
//               className="p-4 bg-[#F1F5F9] rounded-md outline-none"
//             />
//             {errors[field] && (
//               <span className="mt-1 text-sm text-red-500">{errors[field]}</span>
//             )}
//           </div>
//         ))}

//         <div className="flex flex-col md:col-span-2">
//           <label htmlFor="message" className="text-sm text-[#94A3B8] mb-1">
//             {tContact("message")}
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="p-4 bg-[#F1F5F9] rounded-md outline-none min-h-[120px] resize-none"
//           ></textarea>
//           {errors.message && (
//             <span className="mt-1 text-sm text-red-500">{errors.message}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-[#134E9B] hover:bg-[#0f3e7f] transition text-white font-medium py-3 px-6 rounded-md md:col-span-2 cursor-pointer "
//         >
//           {tContact("submit")}
//         </button>
//       </form>

//       <Toaster position="top-center" />

//       {/* Map Section */}
//       <section className="relative hidden w-full sm:block">
//         <div className="mt-[20px] sm:h-0 ">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0069867485977!2d69.2489479763551!3d41.316588899355274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5422b38849%3A0xefaaf4d2520a71b4!2sBodomzor%20Street%2C%20Tashkent!5e0!3m2!1sen!2s!4v1714929734393!5m2!1sen!2s"
//             className="absolute top-0 left-0 z-0 hidden w-full h-full sm:block"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Contact Card */}
//         <div className="hidden sm:block ">
//           <div className="flex flex-wrap md:flex-nowrap items-start ml-[340px] z-10 relative">
//             <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6 w-full md:max-w-[450px] space-y-4 mt-[10px] pt-[50px] px-[50px]">
//               <h2 className="text-xl font-semibold">Beauty Park”</h2>
//               <div className="flex gap-[15px] items-center">
//                 <p className="text-sm text-[#00000099] sm:text-[#00000048]">
//                   {tContact("phoneLabel")}:
//                 </p>
//                 <p className="text-base font-medium">+998 71 123 45 56</p>
//               </div>
//               <div className="flex gap-[15px] items-center">
//                 <p className="text-sm text-[#00000099]">
//                   {tContact("emailLabel")}:
//                 </p>
//                 <a
//                   href="mailto:beautypark@gmail.com"
//                   className="text-blue-600 underline"
//                 >
//                   beautypark@gmail.com
//                 </a>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">
//                   {tContact("addressLabel")}:
//                 </p>
//                 <p className="text-[16px] mt-[10px] mb-[20px] text-[#000000B2]">
//                   {tContact("address")}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600 mb-[10px]">
//                   {tContact("socialLabel")}
//                 </p>
//                 <div className="flex gap-2">
//                   {[
//                     FacebookIcon,
//                     YouTubeIcon,
//                     TelegramIcon,
//                     TwitterIcon,
//                     InstagramIcon,
//                   ].map((Icon, i) => (
//                     <span
//                       key={i}
//                       className="w-10 h-10 flex items-center justify-center rounded-md bg-[#F1F5F9] cursor-pointer"
//                     >
//                       <Icon />
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Dropdown */}
//             <div className="mt-[-12px] rounded-lg p-6 w-full md:max-w-[344px] space-y-4 relative z-10">
//               <div className="relative">
//                 <button
//                   onClick={() => setOpen(!open)}
//                   className="flex items-center justify-between w-full px-4 py-3 bg-white border rounded-md"
//                 >
//                   <span className="text-[#545D6A] cursor-pointer">
//                     {tContact("searchStores")}
//                   </span>
//                   <ChevronDown
//                     size={20}
//                     className={`${
//                       open ? "rotate-180" : ""
//                     } transition-transform`}
//                   />
//                 </button>
//                 {open && (
//                   <ul className="absolute z-20 w-full mt-2 overflow-y-auto bg-white border rounded shadow max-h-60">
//                     {districts.map((d) => (
//                       <li
//                         key={d}
//                         className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                       >
//                         {d}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
// app/contact/page.tsx yoki pages/contact.tsx

"use client";
import { Phone, MapPin } from "lucide-react";
import { useState } from "react";
import PartnerForm from "./PartnerForm";

const tashkentSalons = [
  {
    id: 1,
    name: "Puur Soch Saloni",
    address: "Toshkent, Yakkasaroy tumani, Shota Rustaveli 42",
    phone: "+998 90 123 45 67",
  },
  {
    id: 2,
    name: "Que Hair",
    address: "Toshkent, Mirzo Ulug‘bek tumani, Buyuk Ipak Yo‘li 19",
    phone: "+998 97 234 56 78",
  },
  {
    id: 3,
    name: "ANTI Salon",
    address: "Toshkent, Chilonzor tumani, Chilonzor-9, 23-uy",
    phone: "+998 93 345 67 89",
  },
  {
    id: 4,
    name: "BONNY COUTURE",
    address: "Toshkent, Mirobod tumani, Amir Temur ko‘chasi 58",
    phone: "+998 91 456 78 90",
  },
  {
    id: 5,
    name: "Euphoria yangi filiali",
    address: "Toshkent, Olmazor tumani, Beruniy 15",
    phone: "+998 94 567 89 01",
  },
  {
    id: 6,
    name: "Lond Profil",
    address: "Toshkent, Yunusobod tumani, Minor 23",
    phone: "+998 99 111 22 33",
  },
  {
    id: 7,
    name: "Chocolat NAMBA",
    address: "Toshkent, Sergeli tumani, Sergeli-5, 12-uy",
    phone: "+998 90 222 33 44",
  },
  {
    id: 8,
    name: "Door Bell hair Living",
    address: "Toshkent, Mirzo Ulug‘bek tumani, Alisher Navoiy 28",
    phone: "+998 91 333 44 55",
  },
  {
    id: 9,
    name: "ALICe by AFLOAT",
    address: "Toshkent, Uchtepa tumani, Toshkent yo‘li 14",
    phone: "+998 93 444 55 66",
  },
  {
    id: 10,
    name: "Gloss Beauty",
    address: "Toshkent, Shayxontohur tumani, Zarqaynar ko‘chasi 17",
    phone: "+998 97 555 66 77",
  },
  {
    id: 11,
    name: "Lavender Style",
    address: "Toshkent, Chilonzor tumani, Chilonzor-21, 34-uy",
    phone: "+998 99 666 77 88",
  },
  {
    id: 12,
    name: "SOHO Hair Studio",
    address: "Toshkent, Yashnobod tumani, Maxtumquli ko‘chasi 29",
    phone: "+998 91 777 88 99",
  },
  {
    id: 13,
    name: "Elegant Look",
    address: "Toshkent, Mirobod tumani, Usmon Nosir 22",
    phone: "+998 95 888 99 00",
  },
  {
    id: 14,
    name: "Stylish Queen",
    address: "Toshkent, Olmazor tumani, Beruniy 54",
    phone: "+998 90 111 22 44",
  },
  {
    id: 15,
    name: "Primavera Salon",
    address: "Toshkent, Yakkasaroy tumani, Babur ko‘chasi 7",
    phone: "+998 93 222 33 55",
  },
  {
    id: 16,
    name: "Luxe Hair",
    address: "Toshkent, Mirabad tumani, Taraqqiyot ko‘chasi 19",
    phone: "+998 94 333 44 66",
  },
  {
    id: 17,
    name: "Artistic Style",
    address: "Toshkent, Mirzo Ulug‘bek tumani, Qoratosh 8",
    phone: "+998 97 444 55 77",
  },
  {
    id: 18,
    name: "Infinity Beauty",
    address: "Toshkent, Chilonzor tumani, Bunyodkor 71",
    phone: "+998 90 555 66 88",
  },
  {
    id: 19,
    name: "Chic Room",
    address: "Toshkent, Yunusobod tumani, Malik Rabot 21",
    phone: "+998 91 666 77 99",
  },
  {
    id: 20,
    name: "Fresh Look",
    address: "Toshkent, Mirobod tumani, Navoi 39",
    phone: "+998 95 777 88 00",
  },
];

const PAGE_SIZE = 8;

export default function Contact() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(tashkentSalons.length / PAGE_SIZE);

  // Ekranda ko‘rinadigan salonlar
  const visibleSalons = tashkentSalons.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf7] to-[#ffe2ca] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#e48c47] mb-2 text-center tracking-tight">
          Toshkentdagi hamkor salonlar
        </h1>
        <p className="mb-10 text-center text-gray-500">
          Salonlarimiz bilan bevosita bog‘laning yoki joylashuvini xaritada
          ko‘ring
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {visibleSalons.map((salon) => (
            <div
              key={salon.id}
              className="group bg-white/70 border border-[#f3c9a5] rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#e48c47]/10 p-2 rounded-lg">
                  <MapPin className="text-[#e48c47] w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-[#e48c47]">
                  {salon.name}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-[#e48c47]" />
                <span className="text-sm text-gray-700">{salon.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e48c47]" />
                <a
                  href={`tel:${salon.phone.replace(/\s/g, "")}`}
                  className="text-base font-medium text-[#e48c47] hover:underline"
                >
                  {salon.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            className="px-4 py-2 rounded-xl font-semibold cursor-pointer bg-[#ffe2ca] text-[#e48c47] border border-[#e48c47] hover:bg-[#f3c9a5] transition disabled:opacity-40"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Oldingi
          </button>
          <span className="text-[#e48c47] font-semibold mt-2">
            {page} / {totalPages}
          </span>
          <button
            className="px-4 py-2 rounded-xl font-semibold cursor-pointer bg-[#ffe2ca] text-[#e48c47] border border-[#e48c47] hover:bg-[#f3c9a5] transition disabled:opacity-40"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Keyingi
          </button>
        </div>

        <PartnerForm />
      </div>
    </div>
  );
}
