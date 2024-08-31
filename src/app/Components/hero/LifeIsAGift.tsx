import { welcomeText } from "@/utilities/config";
import React from "react";

export default function LifeIsAGift() {
  return (
    <section className="relative h-screen mb-6" style={{ backgroundImage: "url('images/ZSbackground03.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-gray-800 max-w-2xl mx-auto p-4">
          <img
            src="images/LifeisaGift.png"
            className="w-full max-w-md mx-auto mb-4 object-contain fade-in"
            alt="Life is a Gift"
          />
          <p className="text-md leading-relaxed font-light mb-12">
            {welcomeText}
          </p>

          <div className="flex justify-between mx-6">
          <button className="bg-black text-white p-2 font-light font-roboto-condensed uppercase tracking-widest">Shop our Boxes</button>
          <button className="bg-black text-white p-2 font-light font-roboto-condensed uppercase tracking-widest">Build a box</button>
          </div>
        </div>
      </div>
    </section>
  );
}
