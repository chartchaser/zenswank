import { welcomeText } from "@/utilities/config";
import Hero from "./Components/hero/Hero";
import LifeIsAGift from "./Components/hero/LifeIsAGift";
import WhatWeDo from "./Components/hero/WhatWeDo";

export default function Home() {
  return(
  <div>
    <Hero />
    <LifeIsAGift />
    <WhatWeDo />
  </div>
  )
}