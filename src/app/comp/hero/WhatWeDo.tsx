/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-neutral-100 " style={{ backgroundImage: "url('images/ZenSwank_color2.jpg')" }}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 what-we-do">
          WHAT WE DO
        </h2>
        <div className='divide-x-1'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Box */}
          <div className="bg-transparent p-4">
            <img
              src="images/Build_Your_Own_Gift_Box.jpg"
              alt="Curated Gift Boxes"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <h3 className="text-center mt-6 text-lg font-bold what-we-do">
              CURATED GIFT BOXES
            </h3>
            <p className="text-center mt-4 text-gray-600">
              From your yogi BFF to the beautiful bride to be, our curated gift
              boxes are the perfect gift for any occasion.
            </p>
          </div>

          {/* Second Box */}
          <div className="bg-transparent p-4">
            <img
              src="images/Curated_Gift_Boxes.jpg"
              alt="Build Your Own Gift Box"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <h3 className="text-center mt-6 text-lg font-bold what-we-do">
              BUILD YOUR OWN GIFT BOX
            </h3>
            <p className="text-center mt-4 text-gray-600">
              Our second favorite kind of BYOB. Choose from our selection of
              products to create your own custom gift box!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
