import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center animate-fade-in mb-6" style={{ backgroundImage: "url('images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">

        </div>
      </div>
    </section>
  );
}
