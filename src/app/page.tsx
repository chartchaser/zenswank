import { welcomeText } from "@/utilities/config";
import Hero from "./Components/hero/Hero";
import LifeIsAGift from "./Components/hero/LifeIsAGift";

export default function Home() {
  return(
  <div>
    <Hero />
    <LifeIsAGift />
  </div>
  )
}