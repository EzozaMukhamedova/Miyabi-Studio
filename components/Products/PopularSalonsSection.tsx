import React from "react";
import { popularSalons } from "../Products/popularSalons/salons";
import SalonRatingCard from "./SalonRatingCard";

export default function PopularSalonsSection() {
  return (
    <section className="w-full py-10 px-4 bg-[#fbf6f0]">
      <h2 className="text-3xl font-extrabold mb-8 text-[#e47c48] text-center">
        Mashhur salonlar reytingi
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {popularSalons.map((salon) => (
          <SalonRatingCard key={salon.id} salon={salon} />
        ))}
      </div>
    </section>
  );
}
