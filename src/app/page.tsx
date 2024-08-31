import { welcomeText } from "@/utilities/config";
import Hero from "./components/hero/Hero";
import LifeIsAGift from "./components/hero/LifeIsAGift";
import WhatWeDo from "./components/hero/WhatWeDo";

export default function Home() {
  return(
  <div>
    <Hero />
    <LifeIsAGift />
    <WhatWeDo />
  </div>
  )
}