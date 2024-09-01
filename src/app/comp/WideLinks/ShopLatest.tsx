'use client'
import { useCallback, useEffect, useState } from "react";
import WideLinkClose from "./WideLinkClose";

type ShopLatestProps = {
  mobile: boolean,
};


export default function ShopLatestMobile({mobile}:ShopLatestProps) {

  const [isOpen, setIsOpen] = useState<Boolean>(true);
   
  
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  function isMobile() {
    if(mobile === true && isOpen === true) {
      return (
        "flex md:hidden"
      )
    } else if (mobile === false && isOpen === true) {
      return (
        "md:flex hidden"
      )
    }
    else if (mobile === false && isOpen === false || mobile === true && isOpen === false) {
      return (
        "hidden"
      )
    }
  }
  return (

    <div className={`w-full py-1 ${isMobile()} justify-between items-center bg-black `}>
      <div className="w-1/4 flex justify-start ">
        {/* Left content here */}
      </div>
      <div className="w-1/2 flex justify-center uppercase text-white py-2 text-sm font-light">
        Shop our latest boxes!
      </div>
      <div className="w-1/4 flex justify-end text-white pr-6">
        <WideLinkClose isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

