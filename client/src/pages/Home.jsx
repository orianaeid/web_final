import { useEffect } from "react";
import About from "../components/About";
import HomeEntry from "../components/HomeEntry";
import PhotoSlider from "../components/PhotoSlider";


export default function Home() {
  // the count effect runs when the component mounts
  useEffect(() => {
    const countElt = document.querySelector("#art-counter");
    let counter = 0;

    const interval = setInterval(() => {
      if(counter >= 1490)
        clearInterval(interval);

      counter += 10;
      countElt.textContent = counter;
    }, 20);
  }, []);
  

  return (
    <main>
      <h1 className='main-title'>FusArt, the Fusion of Art</h1>

      <HomeEntry />

      <About />

      <PhotoSlider />
    </main>
  )
}
