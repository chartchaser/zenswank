import { welcomeText } from "@/utilities/config";
import Hero from "./comp/hero/Hero";
import LifeIsAGift from "./comp/hero/LifeIsAGift";
import WhatWeDo from "./comp/hero/WhatWeDo";

export default function Home() {
  return(
  <div>
    <Hero />
    <LifeIsAGift />
    <WhatWeDo />
  </div>
  )
}