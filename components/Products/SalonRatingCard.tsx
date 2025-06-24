// "use client";
// import React from "react";

// type SalonType = {
//   id: number;
//   name: string;
//   rating: number;
//   district: string;
//   address: string;
//   title?: string;
//   languages: string[];
//   image: string;
//   description?: string;
// };

// function SalonRatingCard({
//   salon,
//   extraStyle,
// }: {
//   salon: SalonType;
//   extraStyle?: string;
// }) {
//   return (
//     <div
//       className={`w-[290px] max-[1100px]:w-[230px] group transition-all !duration-500 ${extraStyle}`}
//     >
//       <div className="bg-[#f7f3ed] w-full flex justify-center items-center h-[200px] rounded-[12px] overflow-hidden relative">
//         <img
//           src={salon.image}
//           alt={salon.name}
//           width={210}
//           height={130}
//           className="object-cover w-full h-full transition-all duration-300 cursor-pointer rounded-xl group-hover:scale-105"
//         />
//         <span className="absolute top-4 left-4 bg-gradient-to-br from-[#fbc19d] to-[#e47c48] text-white text-[18px] font-bold rounded-full px-4 py-1.5 shadow-lg">
//           {salon.rating}-o‘rin
//         </span>
//         {salon.title && (
//           <span className="absolute bottom-3 left-3 text-[#e47c48] bg-white/80 px-2.5 py-1 rounded-lg text-[12px] font-semibold shadow">
//             {salon.title}
//           </span>
//         )}
//       </div>

//       <div className="flex flex-col gap-1 mt-4">
//         <h3 className="text-lg font-bold text-[#1e2737]">{salon.name}</h3>
//         <div className="flex items-center gap-1 text-[#e47c48] text-sm font-medium">
//           <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
//             <path
//               d="M8 15s6-5 6-9a6 6 0 10-12 0c0 4 6 9 6 9z"
//               stroke="#e47c48"
//               strokeWidth="1.2"
//             />
//             <circle cx="8" cy="6" r="2" fill="#e47c48" />
//           </svg>
//           <span>{salon.district} tumani</span>
//         </div>
//         <span className="text-xs text-[#7a5f43] mb-1">{salon.address}</span>
//         <div className="flex items-center gap-1 text-[#2196f3] text-xs font-medium">
//           <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
//             <path
//               d="M4.5 12a4.5 4.5 0 117 0l-3.5 4-3.5-4z"
//               stroke="#2196f3"
//               strokeWidth="1.2"
//             />
//             <circle cx="8" cy="8" r="2" fill="#2196f3" />
//           </svg>
//           {salon.languages.join(", ")}
//         </div>
//         {salon.description && (
//           <p className="text-[13px] text-[#545d6a] mt-2 line-clamp-2">
//             {salon.description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SalonRatingCard;

