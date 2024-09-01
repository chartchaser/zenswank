/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { aboutMe } from "@/utilities/config";
import { bad_script, my_font } from "@/utilities/fonts";

export default function About() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center p-4'>
      <div className='w-full flex justify-center mb-8'>
        <img src='/images/BehindtheBoxes.png' className="max-w-full h-auto" />
      </div>
      <div className={`w-full flex justify-center mb-8 ${bad_script}`}>
        <h1 className="text-2xl md:text-4xl font-bold uppercase text-gray-800 tracking-wider">{aboutMe[0].mainTitle}</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-1/2">
        {/* First Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img src={aboutMe[0].mainArticleImage} className="max-w-full h-auto" />
        </div>

        {/* Second Column: Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <p className={`text-sm whitespace-pre-wrap font-roboto-condensed`}>
            {aboutMe[0].articleText}
          </p>
        </div>
      </div>
    </div>
  );
}
