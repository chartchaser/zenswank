import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ShopLatestMobile } from "../WideLinks/ShopLatest";


export default function Hero() {
  return (
    <div>
      <ShopLatestMobile />
      <section className="relative h-[288px] md:h-screen bg-cover bg-center animate-fade-in mb-6" style={{ backgroundImage: "url('images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">

          </div>
        </div>
      </section>

    </div>
  );
}
