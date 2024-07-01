
import AContact from "../components/AContact.js";
import Navbar from "../components/Navbar.js";
import Carrousel from "../components/Carrousel.js";
import Hero from "../components/Hero.js";
import Info from "../components/Info.js";
import Info2 from "../components/Info2.js";
import Products from "../components/Products.js";
import FusionTabs from "../components/FusionTabs.js";
import ZContact from "../components/ZContact.js";

export default function Home() {
    return (
      <div>
        <AContact />
        <Navbar />
        <Carrousel />
        <Hero />
        <Info />
        <Info2 />
        <Products />
        <FusionTabs />
        <ZContact />
      </div>
    );
  }