import { welcomeText } from "@/utilities/config";
import Hero from "./Components/hero/Hero";

export default function Home() {
  return(
  <div>
    <Hero />
    <p>{welcomeText}</p>
  </div>
  )
}