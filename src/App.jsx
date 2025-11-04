
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.tsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
      <main>
          <Navbar/>
          <Hero/>
          <ProductViewer/>
          <Showcase/>
          <Performance/>
          <Features/>
      </main>
  )
}

export default App
